import {useFetch} from "../../api/useFetch";
import {base, newsUrl, uri, url} from "../../api/const";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef } from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../general/sanitize";

export const News = () => {
    const { response } = useFetch(base + newsUrl + '/news/');
  const swiperRef = useRef();
  const {t, i18n} = useTranslation()

    const settings = {
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
        }
    }

  return (
    <div className="container m-auto max-w-[1236px] pt-[62px] relative mb-[62px] z-10">
      <div className="flex justify-between">
        <p className="title">{t('news')}</p>
        <Link to='/news' className="all-view">{t('all')}</Link>
      </div>
        <div className='block justify-center m-auto'>
      <Swiper
          {...settings}
        hashNavigation={{
          watchState: true,
        }}
          loop={true}
          speed={400}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination, Navigation]}
      >
        <div className="block justify-center m-auto">
          {response &&
            response.results.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`news/${item.id}`} className="block w-[384px] mr-0 shadow-lg rounded bg-white pb-4 mb-4 leading-5 cursor-pointer hover:shadow-2xl xl:w-[350px]">
                    <div className="mb-3 h-[247px] w-[384px] overflow-hidden rounded-t xl:w-[350px]">
                        <img
                            src={uri + item.preview_image}
                            alt="cart-img"
                            className="h-auto w-[100%] rounded-t"
                        />
                    </div>
                  <div className="px-2.5">
                      {i18n.language === "ky" &&
                      <>
                          <p className="text-base mb-3 font-semibold w-[324px] h-[38px] text-black overflow-y-hidden leading-[19px]">
                              {item.title_ky.length > 60 ? item.title_ky.slice(0, 60) + "..." : item.title_ky }
                          </p>
                          <p className="text-base font-normal w-[324px] h-[38px] grey overflow-y-hidden leading-[19px]">
                              <Sanitized html={item.desc_ky}/>
                          </p>
                      </>}
                      {i18n.language === "ru" &&
                          <>
                          <p className="text-base mb-3 font-semibold w-[324px] h-[38px] text-black overflow-y-hidden leading-[19px]">
                              {item.title_ru.length > 60 ? item.title_ru.slice(0, 60) + "..."  : item.title_ru}
                          </p>
                              <p className="text-base font-normal w-[324px] h-[38px] grey overflow-y-hidden leading-[19px]">
                                  <Sanitized html={item.desc_ru}/>
                              </p>
                          </>}
                      {i18n.language === "en" &&
                          <>
                          <p className="text-base mb-3 font-semibold w-[324px] h-[38px] text-black overflow-y-hidden leading-[19px]">
                              {item.title_en.length > 60 ? item.title_en.slice(0, 60) + "..."  : item.title_en}
                          </p>
                              <p className="text-base font-normal w-[324px] h-[38px] grey overflow-y-hidden leading-[19px]">
                                  <Sanitized html={item.desc_en}/>
                              </p>
                          </>}
                    <div className="flex justify-between w-[324px] mt-4">
                      <p className="text-sm font-medium text-grey" >{item.news_date.split('-').reverse().join('-')}</p>
                      <div className="text-blue underline cursor-pointer text-sm">
                          {t('more')}
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
        </div>
      <div
        className="swiper-prev absolute top-[299px] left-[-35px] ml-[5px]"
        onClick={() => swiperRef.current.slidePrev()}
      ></div>
      <div
        className="swiper-next absolute top-[299px] right-[-10px] "
        onClick={() => swiperRef.current.slideNext()}
      ></div>
    </div>
  );
};
