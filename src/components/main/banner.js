import React, {useEffect, useRef, useState} from 'react';
import {b, base, mainUrl, uri, url} from '../../api/const';
import { useFetch } from '../../api/useFetch';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../index.css';
import {ClipLoader} from "react-spinners";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {Sanitized} from "../general/sanitize";

const Banner = () => {
    const swiperRef = useRef();
    const { isLoading  } = useFetch(base + mainUrl + '/slider/');
    const [response, setResponse] = useState([])
    const {i18n} = useTranslation()

    const getSliders = async () => {
        const res = await axios.get(base + mainUrl + '/slider/')
        setResponse(res.data)
    }

    useEffect(() => {
        getSliders()
    },[])

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
      <div className="relative max-w-[1440px] m-auto text-justify">
        <Swiper
          hashNavigation={{
            watchState: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop={true}
          slidesPerView={1}
          speed={800}
          navigation={{
            nextEl: '.banner-next',
            prevEl: '.banner-prev',
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {response &&
            response.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-wrap justify-center w-full h-[624px] bg-arrow">
                  <img
                    src={uri + item.background_image}
                    alt=""
                    className="w-full h-auto object-cover bg-no-repeat relative"
                  />
                  {/*<div className='w-full h-[624px] bg-gradient-banner opacity-[40%] absolute top-0 left-0 z-0'></div>*/}
                  {/*<div className='w-[4.3%] h-[624px] absolute bg-gradient-banner opacity-[40%] top-0 right-0 z-100'></div>*/}
                  <div
                    className="container max-w-[1220px] h-[624px] m-auto text-white bg-gradient-banner absolute top-0 flex items-center z-1000
                                xl:max-w-[1090px] 2lg:max-w-[900px] lg:max-w-[800px] 2md:max-w-[700px] md:max-w-[600px]"
                  >
                    {i18n.language === 'ky' && (
                      <div className="mx-[50px] items-center 2lg:mx-[40px] lg:mx-[30px] 2md:mx-[20px] md:mx-[15px]">
                        <p className="text-[32px] font-bold xl:text-[28px] lg:text-[24px] md:text-[20px]">
                          <Sanitized html={item.title_ky} />
                        </p>
                        <p className="mt-[26px] font-normal text-[26px] xl:text-[20px] md:text-[18px]">
                          <Sanitized html={item.subtitle_ky} />
                        </p>
                      </div>
                    )}
                    {i18n.language === 'ru' && (
                      <div className="mx-[50px] items-center 2lg:mx-[40px] lg:mx-[30px] 2md:mx-[20px] md:mx-[15px]">
                        <p className="text-[32px] font-bold">
                          <Sanitized html={item.title_ru} />
                        </p>
                        <p className="mt-[26px] font-normal text-[26px]">
                          <Sanitized html={item.subtitle_ru} />
                        </p>
                      </div>
                    )}
                    {i18n.language === 'en' && (
                      <div className="mx-[50px] items-center 2lg:mx-[40px] lg:mx-[30px] 2md:mx-[20px] md:mx-[15px]">
                        <p className="text-[32px] font-bold">
                          <Sanitized html={item.title_en} />
                        </p>
                        <p className="mt-[26px] font-normal text-[26px]">
                          <Sanitized html={item.subtitle_en} />
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div
          className="banner-prev absolute top-[300px] left-[20px] sm:hidden"
          onClick={() => swiperRef.current.slidePrev()}
        ></div>
        <div
          className="banner-next absolute top-[300px] right-[25px] sm:hidden"
          onClick={() => swiperRef.current.slideNext()}
        ></div>
      </div>
    );
};

export default Banner;