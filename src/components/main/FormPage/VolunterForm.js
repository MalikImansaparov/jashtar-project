import {React} from "react";
import {useTranslation} from "react-i18next";
import {useFetch} from "../../../api/useFetch";
import {aboutUrl, base, uri} from "../../../api/const";
import {ClipLoader} from "react-spinners";
import {BreadCrumb} from "../../general/breadcrumb";
import {Sanitized} from "../../general/sanitize";
import {useParams} from "react-router-dom";

export const VolunterForm = () => {
    const {id} = useParams()
    const {i18n} = useTranslation()
    const { isLoading, response } = useFetch(base + aboutUrl + '/ministry/');


    if (isLoading) {
    return (
    <div role="status" className='flex justify-center my-28 pb-24'>
      <ClipLoader
      color="#1985A1"
      size={300}
    />
    </div>
    )
  }

    return (
    <>
      {response && response.map(item => (
          <div className="w-full h-[604px] relative z-0 pb-8 font-inter xs:h-[664px]" key={item.id} style={{backgroundImage:`url(${uri}${item.background_image})`}}>
            <div className="absolute top-0 left-0 bg-gradient-ministry w-full h-[624px] xs:h-[664px] z-0" ></div>
            <div className='container max-w-[1196px] m-auto text-white text-base font-normal' key={item.id}>
              <div className="1xs:pt-[32px] wrapper text-white">
                <BreadCrumb/>
              </div>
              <p className="my-16 leading-[19.3px] relative z-10 text-justify mx-4 1sm:my-8 xs:my-0">
                {i18n.language === "ky" &&
                    <Sanitized html={item.desc_ky}/>
                }
                {i18n.language === "ru" &&
                    <Sanitized html={item.desc_ru}/>
                }
                {i18n.language === "en" &&
                    <Sanitized html={item.desc_en}/>
                }
              </p>
            </div>
          </div>
      ))}
    </>
    );
};
