import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, eventsUrl, uri, url} from "../../api/const";
import dots from "../../assets/image/main/Ellipse 1.png"
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../general/sanitize";
import {settings} from "../slider/settings";


export const Events = () => {
  const { isLoading, response } = useFetch(base + eventsUrl + '/events/src/jashtar/');
  const { t, i18n } = useTranslation();
  const swiperRef = useRef();

  return (
    <div className="container m-auto max-w-[1236px] pt-[62px] relative mb-[62px] z-10">
      <div className="flex wrapper justify-between">
        <p className="title ml-2">{t('events')}</p>
        <Link to="/events" className="all-view mr-2 sm:mr-8">
          {t('all')}
        </Link>
      </div>
      <Swiper
        {...settings}
        hashNavigation={{
          watchState: true,
        }}
        loop={true}
        slidesPerView={3}
        speed={400}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
      >
        <div className="flex justify-center">
          {response &&
            response.results.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  to={`events/${item.id}`}
                  className="block w-[384px] h-[419px] m-auto shadow-lg rounded bg-white mb-4 leading-5 cursor-pointer hover:shadow-2xl 3lg:w-[384px] xl:w-[340px] 1sm:w-[384px] xs:w-[300px]"
                >
                  <div className="mb-3 h-[247px] overflow-hidden rounded-t xl:w-[340px] 2lg:w-[340px] 1sm:w-full xs:w-[300px] xs:h-[230px] xs:mb-0 3lg:w-full 2lg:w-full">
                    <img
                      src={uri + item.preview_image}
                      alt="cart-img"
                      className="h-auto w-[100%] rounded-t"
                    />
                  </div>
                  <div className="px-2.5">
                    {i18n.language === 'ky' && (
                      <>
                        <p className="text-base mb-3 font-semibold w-[324px] h-[38px] text-black overflow-hidden leading-[19px]">
                          {item.title_ky.length > 60
                            ? item.title_ky.slice(0, 60) + '...'
                            : item.title_ky}
                        </p>
                        <p className="text-base font-normal w-[100%] h-[38px] grey overflow-hidden leading-[19px]">
                          <Sanitized html={item.desc_ky} />
                        </p>
                      </>
                    )}
                    {i18n.language === 'ru' && (
                      <>
                        <p className="text-base mb-3 font-semibold w-[324px] h-[38px] text-black overflow-hidden leading-[19px]">
                          {item.title_ru.length > 60
                            ? item.title_ru.slice(0, 60) + '...'
                            : item.title_ru}
                        </p>
                        <p className="text-base font-normal w-[100%] h-[38px] grey overflow-hidden leading-[19px]">
                          <Sanitized html={item.desc_ru} />
                        </p>
                      </>
                    )}
                    {i18n.language === 'en' && (
                      <>
                        <p className="text-base mb-3 font-semibold w-[324px] h-[38px] text-black overflow-hidden leading-[19px]">
                          {item.title_en.length > 60
                            ? item.title_en.slice(0, 60) + '...'
                            : item.title_en}
                        </p>
                        <p className="text-base font-normal w-[100%] h-[38px] grey overflow-hidden leading-[19px]">
                          <Sanitized html={item.desc_en} />
                        </p>
                      </>
                    )}
                    <div className="w-[324px] my-4 text-sm font-medium">
                      <p className="text-grey flex">
                        <img
                          src={dots}
                          className="mr-[10px] w-[8px] h-[8px] mt-1.5"
                          alt="dots"
                        />
                        <span>{t('date')}</span>
                        <span className="text-black ">
                          &nbsp;{item.event_date.split('-').reverse().join('-')}
                        </span>
                      </p>
                      <p className="text-grey flex">
                        <img
                          src={dots}
                          className="mr-[10px] w-[8px] h-[8px] mt-1.5"
                          alt="dots"
                        />
                        {t('location')}
                        {i18n.language === 'ky' && (
                          <span className="text-black">
                            &nbsp;
                            {item.location_ky.length > 20
                              ? item.location_ky.slice(0, 20) + '...'
                              : item.location_ky}
                          </span>
                        )}
                        {i18n.language === 'ru' && (
                          <span className="text-black">
                            &nbsp;
                            {item.location_ru.length > 20
                              ? item.location_ru.slice(0, 20) + '...'
                              : item.location_ru}
                          </span>
                        )}
                        {i18n.language === 'en' && (
                          <span className="text-black">
                            &nbsp;
                            {item.location_en.length > 20
                              ? item.location_en.slice(0, 20) + '...'
                              : item.location_en}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>

      <div
        className="swiper-prev absolute top-[299px] left-[-18px] xl:left-[14px] 2lg:top-[335px] 2lg:left-[7px] 3xl:top-[310px] lg:left-[12px] 2md:left-[8px] 3md:left-[15%] sm:top-[310px] sm:left-[5%] ml-2"
        onClick={() => swiperRef.current.slidePrev()}
      ></div>
      <div
        className="swiper-next absolute top-[299px] right-[-18px] xl:right-[11px] 2lg:top-[335px] 2lg:right-[7px] 3xl:top-[310px] lg:right-[10px] 2md:right-[8px] 3md:right-[15%] sm:top-[310px] sm:right-[5%] mr-2"
        onClick={() => swiperRef.current.slideNext()}
      ></div>
    </div>
  );
};