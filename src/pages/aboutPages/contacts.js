import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import {aboutUrl, base, uri} from "../../api/const";
import {useFetch} from "../../api/useFetch";
import {useTranslation} from "react-i18next";
import {ClipLoader} from "react-spinners";

export const Contacts = () => {
    const { isLoading, response } = useFetch(base + aboutUrl + '/contacts/');
    const {t, i18n} = useTranslation()

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
        {response &&
          response.map((item) => (
            <div
              className="w-full h-[655px] relative font-inter 1xs:h-[555px] 1xs:mb-[0px]"
              style={{
                backgroundImage: `url(${uri}/${item.background_image})`,
              }}
              key={item.id}
            >
              {/*<div className='  absolute top-[170px] left-0 rounded bg-[#3070B633] bg-gradient-jashtar z-0'></div>*/}
              <div className="wrapper">
                <div className="container max-w-[1196px] m-auto">
                  <BreadCrumb />
                </div>
                <div className="flex md:block">
                  <div className="flex items-center max-w-[70%] h-[232px] bg-[#3070B633] pl-14 mt-12 md:mt-6 xl:pl-6 xl:max-w-[90%] md:h-[52px]
                   md:bg-none md:mb-[30px] md:py-12 md:pl-3 m-auto">
                    {i18n.language === 'ky' && (
                      <p className="font-semibold text-[18px] text-white leading-[23px] w-[65%] 3lg:w-[100%] 3xs:text-[14px]">
                        {item.title_ky}
                      </p>
                    )}
                    {i18n.language === 'ru' && (
                      <p className="font-semibold text-[18px] text-white leading-[23px] w-[65%] 3lg:w-[100%] 3xs:text-[14px]">
                        {item.title_ru}
                      </p>
                    )}
                    {i18n.language === 'en' && (
                      <p className="font-semibold text-[18px] text-white leading-[23px] w-[65%] 3lg:w-[100%] 3xs:text-[14px]">
                        {item.title_en}
                      </p>
                    )}
                  </div>

                  <div className="rounded w-[532px] h-[322px] bg-white flex items-center pl-[20px] m-auto 1sm:w-[400px] 1sm:pl-[10px] 2md:h-[280px] 2md:mt-6 1sm:h-[240px] xs:w-[330px] xs:h-[200px]">
                    {/*<img src={pattern} alt="pattern" className="absolute top-0 right-[20px] w-[200px] h-[200px] z-9999"/>*/}
                    <div>
                      {response &&
                        response.map((item) => (
                          <div
                            key={item.id}
                            className="text-black md:w-[280px]"
                          >
                            {i18n.language === 'ky' && (
                              <p className="text-base font-medium mb-[22px]">
                                {t('address')}
                                <span className="text-blue">
                                  {item.address_ky}
                                </span>
                              </p>
                            )}
                            {i18n.language === 'ru' && (
                              <p className="text-base font-medium mb-[22px]">
                                {t('address')}
                                <span className="text-blue">
                                  {item.address_ru}
                                </span>
                              </p>
                            )}
                            {i18n.language === 'en' && (
                              <p className="text-base font-medium mb-[22px]">
                                {t('address')}
                                <span className="text-blue">
                                  {item.address_en}
                                </span>
                              </p>
                            )}
                          </div>
                        ))}
                      {item.contact.map((i) => (
                        <div key={i.id}>
                          <p className="text-base font-medium">
                            {t('phone')}
                            <span className="text-blue">{i.phone}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </>
    );
};

