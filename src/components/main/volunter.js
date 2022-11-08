import React from 'react';
import {useFetch} from "../../api/useFetch";
import {base, mainUrl, uri} from "../../api/const";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {Sanitized} from "../general/sanitize";

const Volunter = () => {
    const { response } = useFetch(base + mainUrl + '/subprojects/');
    const { t, i18n } = useTranslation();

    return (
      <div className="mt-[62px] m-auto wrapper lg:max-w-[100%]">
          {i18n.language === 'ky' && response &&
               response.map(item => (
                  item.id % 2 ?
                      <div className="flex w-full max-h-[259px] justify-center shadow-xl bg-white 1sm:border-b-grey 1sm:border-b-2" key={item.id}>
                          <div className='w-[618.5px] max-h-[259px] overflow-hidden lg:max-w-[570px] lg:h-[220px] 2md:w-[480px]
                          2md:h-[220px] md:h-[200px] sm:w-[425px] sm:max-h-[180px] 1sm:hidden 1sm:max-h-[220px]'>
                              <img src={uri + item.corresponding_image} alt='volunter' className='w-[100%] h-auto '/>
                          </div>
                          <div className="m-auto text-center bg-gradient-volunter 1sm:mb-4">
                              <img src={uri + item.logo_image} alt='icon' className='w-[60px] h-[60px] m-auto lg:w-[48px] lg:h-[45px]'/>
                              <p className='text-[22px] font-semibold mb-1 xl:mb-1 text-[20px] lg:text-[18px] md:text-[14px]'>{item.title_ky}</p>
                              <div
                                  className="flex justify-center font-normal text-base max-w-[422px] leading-5 text-grey lg:text-[14px]
                                  2md:text-[14px] md:text-[12px] md:leading-3 md:mx-0.5"><Sanitized html={item.desc_ky}/></div>
                              <Link to={`/volunteer/${item.id}`} className='button'>
                                  {t('volunteer')}
                              </Link>
                          </div>
                      </div>
                      :
                      <div className=" flex w-full max-h-[259px] justify-center shadow-xl bg-white 1sm:border-b-grey 1sm:border-b-2" key={item.id}>
                          <div className="m-auto text-center bg-gradient-volunter 1sm:mb-4">
                              <img src={uri + item.logo_image} alt='icon' className='w-[60px] h-[60px] m-auto lg:w-[48px] lg:h-[45px]'/>
                              <p className='text-[22px] font-semibold mb-1 xl:mb-1 text-[20px] lg:text-[18px] md:text-[14px]'>{item.title_ky}</p>
                              <div
                                  className="flex justify-center font-normal text-base max-w-[422px] leading-5 text-grey lg:text-[14px]
                                  2md:text-[14px] md:text-[12px] md:leading-3 md:mx-1"><Sanitized html={item.desc_ky}/></div>
                          </div>
                          <div className='w-[618.5px] max-h-[259px] overflow-hidden lg:max-w-[570px] lg:h-[220px] 2md:w-[480px]
                          2md:h-[220px] md:h-[200px] sm:w-[425px] sm:max-h-[180px] 1sm:hidden 1sm:max-h-[230px]'>
                          <img src={uri + item.corresponding_image} alt='volunter' className='w-[100%] h-auto '/>
                          </div>
                      </div>
              ))
          }
          {i18n.language === 'ru' && response &&
              response.map(item => (
                  item.id % 2 ?
                      <div className="flex w-full max-h-[259px] justify-center shadow-xl bg-white" key={item.id}>
                          <div className='w-[618.5px] max-h-[259px] overflow-hidden lg:max-w-[570px] lg:h-[220px] 2md:w-[480px]
                          2md:h-[220px] md:h-[200px] sm:w-[425px] sm:max-h-[180px] 1sm:hidden 1sm:max-h-[220px]'>
                              <img src={uri + item.corresponding_image} alt='volunter' className='w-[100%] h-auto '/>
                          </div>
                          <div className="m-auto text-center bg-gradient-volunter 1sm:mb-4">
                              <img src={uri + item.logo_image} alt='icon' className='w-[60px] h-[60px] m-auto lg:w-[48px] lg:h-[45px]'/>
                              <p className='text-[22px] font-semibold mb-1 xl:mb-1 text-[20px] lg:text-[18px] md:text-[14px]'>{item.title_ru}</p>
                              <div
                                  className="flex justify-center font-normal text-base max-w-[422px] leading-5 text-grey lg:text-[14px]
                                  2md:text-[14px] md:text-[12px] md:leading-3 md:mx-0.5"><Sanitized html={item.desc_ru}/></div>
                              <Link to={`/volunteer/${item.id}`} className='button'>
                                  {t('volunteer')}
                              </Link>
                          </div>
                      </div>
                      :
                      <div className=" flex w-full max-h-[259px] justify-center shadow-xl bg-white" key={item.id}>
                          <div className="m-auto text-center bg-gradient-volunter 1sm:mb-4">
                              <img src={uri + item.logo_image} alt='icon' className='w-[60px] h-[60px] m-auto lg:w-[48px] lg:h-[45px]'/>
                              <p className='text-[22px] font-semibold mb-1 xl:mb-1 text-[20px] lg:text-[18px] md:text-[14px]'>{item.title_ru}</p>
                              <div
                                  className="flex justify-center font-normal text-base max-w-[422px] leading-5 text-grey lg:text-[14px]
                                  2md:text-[14px] md:text-[12px] md:leading-3 md:mx-1"><Sanitized html={item.desc_ru}/></div>
                          </div>
                          <div className='w-[618.5px] max-h-[259px] overflow-hidden lg:max-w-[570px] lg:h-[220px] 2md:w-[480px]
                          2md:h-[220px] md:h-[200px] sm:w-[425px] sm:max-h-[180px] 1sm:hidden 1sm:max-h-[230px]'>
                              <img src={uri + item.corresponding_image} alt='volunter' className='w-[100%] h-auto '/>
                          </div>
                      </div>
              ))
          }
          {i18n.language === 'en' && response &&
              response.map(item => (
                  item.id % 2 ?
                      <div className="flex w-full max-h-[259px] justify-center shadow-xl bg-white" key={item.id}>
                          <div className='w-[618.5px] max-h-[259px] overflow-hidden lg:max-w-[570px] lg:h-[220px] 2md:w-[480px]
                          2md:h-[220px] md:h-[200px] sm:w-[425px] sm:max-h-[180px] 1sm:hidden 1sm:max-h-[220px]'>
                              <img src={uri + item.corresponding_image} alt='volunter' className='w-[100%] h-auto '/>
                          </div>
                          <div className="m-auto text-center bg-gradient-volunter 1sm:mb-">
                              <img src={uri + item.logo_image} alt='icon' className='w-[60px] h-[60px] m-auto lg:w-[48px] lg:h-[45px]'/>
                              <p className='text-[22px] font-semibold mb-1 xl:mb-1 text-[20px] lg:text-[18px] md:text-[14px]'>{item.title_en}</p>
                              <div
                                  className="flex justify-center font-normal text-base max-w-[422px] leading-5 text-grey lg:text-[14px]
                                  2md:text-[14px] md:text-[12px] md:leading-3 md:mx-0.5"><Sanitized html={item.desc_en}/></div>
                              <Link to={`/volunteer/${item.id}`} className='button'>
                                  {t('volunteer')}
                              </Link>
                          </div>
                      </div>
                      :
                      <div className=" flex w-full max-h-[259px] justify-center shadow-xl bg-white" key={item.id}>
                          <div className="m-auto text-center bg-gradient-volunter 1sm:mb-4">
                              <img src={uri + item.logo_image} alt='icon' className='w-[60px] h-[60px] m-auto lg:w-[48px] lg:h-[45px]'/>
                              <p className='text-[22px] font-semibold mb-1 xl:mb-1 text-[20px] lg:text-[18px] md:text-[14px]'>{item.title_en}</p>
                              <div
                                  className="flex justify-center font-normal text-base max-w-[422px] leading-5 text-grey lg:text-[14px]
                                  2md:text-[14px] md:text-[12px] md:leading-3 md:mx-1"><Sanitized html={item.desc_en}/></div>
                          </div>
                          <div className='w-[618.5px] max-h-[259px] overflow-hidden lg:max-w-[570px] lg:h-[220px] 2md:w-[480px]
                          2md:h-[220px] md:h-[200px] sm:w-[425px] sm:max-h-[180px] 1sm:hidden 1sm:max-h-[230px]'>
                              <img src={uri + item.corresponding_image} alt='volunter' className='w-[100%] h-auto '/>
                          </div>
                      </div>
              ))
          }
      </div>
    );
};

export default Volunter;