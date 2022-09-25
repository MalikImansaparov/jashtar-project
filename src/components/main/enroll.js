import React, { useRef } from 'react';
import person from '../../assets/image/main/studeb=nt 1 2.png';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetch } from '../../api/useFetch';
import {aboutUrl, base, eventsUrl, uri, url} from '../../api/const'
import pattern from '../../assets/image/main/Looper-1.png'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../general/sanitize";
import dots from "../../assets/image/main/Ellipse 1.png";

export const Enroll = () => {
  const { isLoading, response } = useFetch(base + eventsUrl + '/events/');
  const swiperRef = useRef();
  const {t, i18n} = useTranslation()

  return (
    <div className="bg-gradient-enroll w-screen h-[216px] relative ">
      <img src={pattern} alt="" className="absolute top-0 left-[25px] "/>
      <div className="max-w-[1032px]  m-auto flex bg-enroll shadow-enroll rounded px-[62px] absolute top-[-24px] left-[12%]">
        <Swiper
          hashNavigation={{
            watchState: true,
          }}
          // onSwiper={(swiper) => {
          //   swiperRef.current = swiper;
          // }}
          speed={800}
          slidesPerView={1}
          navigation={{
            nextEl: '.next',
            prevEl: '.prev',
          }}
          modules={[Pagination, Navigation]}
        >
          {response &&
            response.results.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-[100%] w-[100%] flex">
                  <div className="mt-[52px] max-w-[815px]">
                        <div className="w-[461px]">
                          {i18n.language === "ky" &&
                              <>
                        <p className="text-[22px] text-semibold text-white w-[461px] mb-[22px]">
                          <Sanitized html={item.title_ky}/>
                        </p>
                          <p className="text-[16px] text-normal max-h-[38px] grey overflow-y-hidden leading-[19px]">
                            <Sanitized html={item.desc_ky}/>
                          </p>
                              </>}
                          {i18n.language === "ru" &&
                              <>
                                <p className="text-[22px] text-semibold text-white w-[461px] mb-[22px]">
                                  <Sanitized html={item.title_ru}/>
                                </p>
                                <p className="text-[16px] text-normal max-h-[38px] grey overflow-y-hidden leading-[19px]">
                                  <Sanitized html={item.desc_ru}/>
                                </p>
                              </>}
                          {i18n.language === "en" &&
                              <>
                                <p className="text-[22px] text-semibold text-white w-[461px] mb-[22px]">
                                  <Sanitized html={item.title_en}/>
                                </p>
                                <p className="text-[16px] text-normal max-h-[38px] grey overflow-y-hidden leading-[19px]">
                                  <Sanitized html={item.desc_en}/>
                                </p>
                              </>}
                          <div className="flex mt-8 justify-between">
                            <p className="text-grey flex">
                              <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-2" alt='dots'/>
                              <span>{t('date')}</span><span className='text-black '>&nbsp;{item.event_date}</span>
                            </p>
                              <Link to={`events/${item.id}`} className="btn pointer-events-auto mr-8">
                                {t('more')}
                              </Link>
                          </div>
                        </div>
                  </div>
                    <img
                      src={uri + item.preview_image}
                      alt="person"
                      className="w-[516px] max-h-[264px]"
                    />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div
          className="prev absolute top-[129px] left-[-140px]"
          onClick={() => swiperRef.current.slidePrev()}
        ></div>
        <div
          className="next absolute top-[129px] right-[-135px]"
          onClick={() => swiperRef.current.slideNext()}
        ></div>
      </div>
    </div>
  );
};

