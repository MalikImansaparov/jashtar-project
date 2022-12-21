import {React} from "react";
import {useTranslation} from "react-i18next";
import {useFetch} from "../../../api/useFetch";
import { base, mainUrl, uri} from "../../../api/const";
import {ClipLoader} from "react-spinners";
import {BreadCrumb} from "../../general/breadcrumb";
import {Sanitized} from "../../general/sanitize";
import {useParams} from "react-router-dom";

export const VolunterForm = () => {
    const {id} = useParams()
    const { t, i18n } = useTranslation();
    const { isLoading, response } = useFetch(
      base + mainUrl + `/subprojects/${id}/`
    );

    if (isLoading) {
      return (
        <div role="status" className="flex justify-center my-28 pb-24">
          <ClipLoader color="#1985A1" size={300} />
        </div>
      );
    }

    return (
      <>
        {response && (
          <div
            className="wrapper h-[604px] relative z-0 pb-8 font-inter xs:h-[664px]"
            key={response.id}
            style={{
              backgroundImage: `url(${uri}${response.background_image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          >
            <div className="absolute top-0 left-0 right-0 bg-gradient-ministry w-full min-h-[648px] xs:min-h-[664px] z-0"></div>
            <div
              className="container max-w-[1236px] m-auto  text-white bg-gradient-banner opacity-[100%] absolute top-0 left-0 right-0 flex 2md:pt-24
                            items-center z-10 xl:max-w-[1090px] 2lg:max-w-[900px] lg:max-w-[800px] 2md:max-w-[700px] md:max-w-[600px]"
            >
              <div className="container max-w-[1196px] m-auto text-white text-base font-normal">
                <div className="1xs:pt-[32px] wrapper text-white">
                  <BreadCrumb />
                </div>
                <p className="my-16 leading-[19.3px] relative z-10 text-justify mx-4 1sm:my-8 xs:my-0">
                  {i18n.language === 'ky' && (
                    <Sanitized html={response.desc_ky} />
                  )}
                  {i18n.language === 'ru' && (
                    <Sanitized html={response.desc_ru} />
                  )}
                  {i18n.language === 'en' && (
                    <Sanitized html={response.desc_en} />
                  )}
                </p>
                <div className="flex justify-around items-center wrapper flex-wrap xs:mt-4 container">
                  <p>{t('join')}</p>
                  <div
                    className="lg:mt-4 w-[189px] h-[34px] flex justify-center items-center bg-orange rounded text-white text-[15px] font-medium cursor-pointer"
                    onClick={() => window.open(response.apply)}
                  >
                    {t('form')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
};
