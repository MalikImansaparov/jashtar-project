import React, { useRef } from 'react';
import person from '../../assets/image/main/studeb=nt 1 2.png';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetch } from '../../api/useFetch';
import {aboutUrl, base, url} from '../../api/const'
import pattern from '../../assets/image/main/Looper-1.png'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../general/sanitize";

export const Enroll = () => {
  const { isLoading, response } = useFetch(base + aboutUrl + '/events/');
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
            response.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-[100%] w-[100%] flex">
                  <div className="mt-[52px] max-w-[815px]">
                    {
                      i18n.language === "ky" &&
                        <p className="text-[22px] text-semibold text-white">
                          <Sanitized html={item.title_ky}/>
                        </p>
                    }
                    {
                        i18n.language === "ru" &&
                        <p className="text-[22px] text-semibold text-white">
                          <Sanitized html={item.title_ru}/>
                        </p>
                    }
                    {
                        i18n.language === "en" &&
                        <p className="text-[22px] text-semibold text-white">
                          <Sanitized html={item.title_en}/>
                        </p>
                    }
                    <div className="flex mt-[32px]">
                      {/*<div className="mr-[66px]">*/}
                      {/*  <span className="clock">16</span>*/}
                      {/*  <span className="clock mx-7">:</span>*/}
                      {/*  <span className="clock">16</span>*/}
                      {/*  <span className="clock mx-7">:</span>*/}
                      {/*  <span className="clock">16</span>*/}
                      {/*</div>*/}
                      <div className="mr-[32px]">
                        {/*<p className="text-base font-normal text-grey">*/}
                        {/*  Места ограничены:*/}
                        {/*  <span className="text-blue"> осталось 32</span>*/}
                        {/*</p>*/}
                        <Link to={`events/${item.id}`} className="btn mt-[29px] pointer-events-auto">
                            {t('more')}
                        </Link>
                      </div>
                    </div>
                  </div>
                    <img
                      src={person}
                      alt="person"
                      className="max-w-[236px] max-h-[264px]"
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

