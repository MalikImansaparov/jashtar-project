import React from 'react';
import {useFetch} from "../../api/useFetch";
import {base, mainUrl, uri} from "../../api/const";
import {useTranslation} from "react-i18next";

const Volunter = () => {
    const { response } = useFetch(base + mainUrl + '/subprojects/');
    const { t, i18n } = useTranslation();

    return (
      <div className="mt-[62px] m-auto wrapper">
          {i18n.language === 'ky' && response &&
               response.map(item => (
                  item.id % 2 ?
                      <div className=" flex w-full h-[259px] justify-center shadow-xl bg-white " key={item.id}>
                          <div className='w-[618.5px] h-[259px] overflow-hidden'>
                              <img src={uri + item.corresponding_image} alt='volunter' className='w-[100%] h-auto'/>
                          </div>
                          <div className="m-auto text-center bg-gradient-volunter">
                              <img src={uri + item.logo_image} alt='icon' className='w-[60px] h-[60px] mb-2 m-auto'/>
                              <p className='text-[22px] font-semibold mb-2'>{item.title_ky}</p>
                              <div
                                  className="flex justify-center font-normal text-base max-w-[422px] leading-5 text-grey">{item.desc_ky}</div>
                              <button className='button' onClick={() => window.open(item.apply_link)}>
                                  {t('volunteer')}
                              </button>
                          </div>
                      </div>
                      :
                      <div className=" flex w-full h-[259px] justify-center shadow-xl bg-white " key={item.id}>
                          <div className="m-auto text-center bg-gradient-volunter">
                              <img src={uri + item.logo_image} alt='icon' className='w-[60px] h-[60px] mb-4 m-auto'/>
                              <p className='text-[22px] font-semibold mb-3'>{item.title_ky}</p>
                              <div
                                  className="font-normal text-base max-w-[422px] leading-5 text-grey">{item.desc_ky}</div>
                          </div>
                          <div className='w-[618.5px] h-[259px] overflow-hidden'>
                          <img src={uri + item.corresponding_image} alt='volunter' className='w-[100%] h-auto'/>
                          </div>
                      </div>
              ))
          }
          {i18n.language === 'ru' && response &&
              response.map(item => (
                  item.id % 2 ?
                      <div className=" flex w-full h-[302px] justify-center  bg-white shadow-vol" key={item.id}>
                          <img src={uri + item.corresponding_image} alt='volunter' className='w-[50%]'/>
                          <div className="m-auto text-center bg-gradient-volunter">
                              <img src={uri + item.logo_image} alt='icon' className='w-[60px] h-[60px] mb-4 m-auto'/>
                              <p className='text-[22px] font-semibold mb-3'>{item.title_ru}</p>
                              <div
                                  className="font-normal text-base max-w-[422px] leading-5 text-grey">{item.desc_ru}</div>
                              <button className='button' onClick={() => window.open(item.apply_link)}>
                                  {t('volunteer')}
                              </button>
                          </div>
                      </div>
                      :
                      <div className=" flex w-full h-[302px] justify-center  bg-white shadow-vol" key={item.id}>
                          <div className="m-auto text-center bg-gradient-volunter">
                              <img src={uri + item.logo_image} alt='icon' className='w-[60px] h-[60px] mb-4 m-auto'/>
                              <p className='text-[22px] font-semibold mb-3'>{item.title_ru}</p>
                              <div
                                  className="font-normal text-base max-w-[422px] leading-5 text-grey">{item.desc_ru}</div>
                          </div>
                          <img src={uri + item.corresponding_image} alt='volunter' className='w-[50%]'/>
                      </div>
              ))
          }
          {i18n.language === 'en' && response &&
              response.map(item => (
                  item.id % 2 ?
                      <div className=" flex w-full h-[302px] justify-center  bg-white shadow-vol" key={item.id}>
                          <img src={uri + item.corresponding_image} alt='volunter' className='w-[50%]'/>
                          <div className="m-auto text-center bg-gradient-volunter">
                              <img src={uri + item.logo_image} alt='icon' className='w-[60px] h-[60px] mb-4 m-auto'/>
                              <p className='text-[22px] font-semibold mb-3'>{item.title_en}</p>
                              <div
                                  className="font-normal text-base max-w-[422px] leading-5 text-grey">{item.desc_en}</div>
                              <button className='button' onClick={() => window.open(item.apply_link)}>
                                  {t('volunteer')}
                              </button>
                          </div>
                      </div>
                      :
                      <div className=" flex w-full h-[302px] justify-center  bg-white shadow-vol" key={item.id}>
                          <div className="m-auto text-center bg-gradient-volunter">
                              <img src={uri + item.logo_image} alt='icon' className='w-[60px] h-[60px] mb-4 m-auto'/>
                              <p className='text-[22px] font-semibold mb-3'>{item.title_en}</p>
                              <div
                                  className="font-normal text-base max-w-[422px] leading-5 text-grey">{item.desc_en}</div>
                          </div>
                          <img src={uri + item.corresponding_image} alt='volunter' className='w-[50%]'/>
                      </div>
              ))
          }
      </div>
    );
};

export default Volunter;