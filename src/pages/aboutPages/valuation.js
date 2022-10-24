import React from 'react';
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, uri, url} from "../../api/const";
import left from '../../assets/image/about/left.png'
import rigth from '../../assets/image/about/rigth.png'
import {BreadCrumb} from "../../components/general/breadcrumb";
import {ClipLoader} from "react-spinners";
import {useTranslation} from "react-i18next";

const Valuation = () => {
    const { isLoading, response } = useFetch(base + aboutUrl + '/values/');
    const {i18n} = useTranslation()

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
      <div className="h-auto font-inter">
        <div className="wrapper">
          <BreadCrumb />
        </div>
        {response &&
          response.map((item) => (
            <div
              className="flex max-w-[1236px] m-auto shadow-xl rounded px-8 py-4 bg-white"
              key={item.id}
            >
              {i18n.language === 'ky' && (
                <div className="flex">
                  <div>
                    <div className="m-auto max-w-[231px] max-h-[131px] overflow-hidden">
                      <img
                        src={uri + item.image}
                        alt="values"
                        className="h-auto w-[100%] shadow-xl"
                      />
                    </div>
                    <p className="name mt-[10px] 2md:mt-1">
                      {item.full_name_ky}
                    </p>
                    <p className="text-[11px] font-normal text-center px-[20px] 2md:px-0 sm:text-[10px]">
                      {item.annotation_ky}
                    </p>
                  </div>
                  <div className="ml-[32px] pt-[33px] 1sm:pt-[10px]">
                    <div className="flex max-w-[857px] justify-center mb-4 min-h-[88px]">
                      <img
                        src={left}
                        alt="quotes"
                        className="w-[27px] h-[24px] sm:w-[17px] sm:h-[14px]"
                      />
                      <p className="text-lg font-normal text-center mx-4 max-w-[709px] 2md:text-sm 2md:mx-1 sm:text-xs">
                        {item.quote_ky}
                      </p>
                      <img
                        src={rigth}
                        alt="quotes"
                        className="w-[27px] h-[24px] self-end sm:w-[17px] sm:h-[14px]"
                      />
                    </div>
                  </div>
                </div>
              )}
              {i18n.language === 'ru' && (
                <div className="flex">
                  <div>
                    <div className="m-auto max-w-[231px] max-h-[131px] overflow-hidden">
                      <img
                        src={uri + item.image}
                        alt="values"
                        className="h-auto w-[100%] shadow-xl"
                      />
                    </div>
                    <p className="name mt-[10px] 2md:mt-1">
                      {item.full_name_ru}
                    </p>
                    <p className="text-[11px] font-normal text-center px-[20px] 2md:px-0 sm:text-[10px]">
                      {item.annotation_ru}
                    </p>
                  </div>
                  <div className="ml-[32px] pt-[33px] 1sm:pt-[10px]">
                    <div className="flex max-w-[857px] justify-center mb-4 min-h-[88px]">
                      <img
                        src={left}
                        alt="quotes"
                        className="w-[27px] h-[24px] sm:w-[17px] sm:h-[14px]"
                      />
                      <p className="text-lg font-normal text-center mx-4 max-w-[709px] 2md:text-sm 2md:mx-1 sm:text-xs">
                        {item.quote_ru}
                      </p>
                      <img
                        src={rigth}
                        alt="quotes"
                        className="w-[27px] h-[24px] self-end sm:w-[17px] sm:h-[14px]"
                      />
                    </div>
                  </div>
                </div>
              )}
              {i18n.language === 'en' && (
                <div className="flex">
                  <div>
                    <div className="m-auto max-w-[231px] max-h-[131px] overflow-hidden">
                      <img
                        src={uri + item.image}
                        alt="values"
                        className="h-auto w-[100%] shadow-xl"
                      />
                    </div>
                    <p className="name mt-[10px] 2md:mt-1">
                      {item.full_name_en}
                    </p>
                    <p className="text-[11px] font-normal text-center px-[20px] 2md:px-0 sm:text-[10px]">
                      {item.annotation_en}
                    </p>
                  </div>
                  <div className="ml-[32px] pt-[33px] 1sm:pt-[10px]">
                    <div className="flex max-w-[857px] justify-center mb-4 min-h-[88px]">
                      <img
                        src={left}
                        alt="quotes"
                        className="w-[27px] h-[24px] sm:w-[17px] sm:h-[14px]"
                      />
                      <p className="text-lg font-normal text-center mx-4 max-w-[709px] 2md:text-sm sm:text-xs 2md:mx-1">
                        {item.quote_en}
                      </p>
                      <img
                        src={rigth}
                        alt="quotes"
                        className="w-[27px] h-[24px] self-end sm:w-[17px] sm:h-[14px]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        <div className="h-[62px]"></div>
      </div>
    );
};

export default Valuation;