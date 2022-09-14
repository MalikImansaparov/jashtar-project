import {useFetch} from "../../api/useFetch";
import {base, uri, url} from "../../api/const";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef } from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const News = () => {
    const { isLoading, response } = useFetch(base + uri + '/news/');
  const swiperRef = useRef();
  const {t} = useTranslation()

    const settings = {
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    }

  return (
    <div className="container m-auto w-[1236px] pt-[62px] relative mb-[62px] z-10">
      <div className="flex justify-between">
        <p className="title">{t('news')}</p>
        <Link to='/news' className="all-view">Посмотреть все</Link>
      </div>
        <div className='block justify-center m-auto'>
      <Swiper
          {...settings}
        hashNavigation={{
          watchState: true,
        }}
        spaceBetween={50}
        slidesPerView={3}
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
            response.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`news/${item.id}`} className=" block max-w-[384px] m-auto shadow-md rounded bg-white pb-4 mb-4 leading-5 cursor-pointer">
                  <img
                    src={uri + item}
                    alt="cart-img"
                    className="mb-3 h-[247px] w-[384px] rounded-t"
                  />
                  <div className="px-2.5">
                    <p className="text-base mb-3 font-extrabold h-[38px] w-[324px] leading-[19px]">
                        Стипендиальная программа для иностранных студентов
                    </p>
                    <p className="text-base font-normal w-[324px] h-[38px] grey overflow-y-hidden leading-[19px]">
                        Программа разработана для талантливых иностранных студентов, желающих обу...
                    </p>
                    <div className="flex justify-between w-[324px] mt-4">
                      <p className="text-sm font-medium text-grey" >{item.date}</p>
                      <div className="text-blue underline cursor-pointer text-sm">
                        Подробнее
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
        className="swiper-prev absolute top-[299px] left-[-35px]"
        onClick={() => swiperRef.current.slidePrev()}
      ></div>
      <div
        className="swiper-next absolute top-[299px] right-[-40px]"
        onClick={() => swiperRef.current.slideNext()}
      ></div>
    </div>
  );
};
