import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import {b, base, mainUrl, uri, url} from '../../api/const';
import { useFetch } from '../../api/useFetch';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../index.css';
import {ClipLoader} from "react-spinners";
import sanitize from 'sanitize-html'
import SanitizedHTML from 'react-sanitized-html';


const Banner = () => {
  const { isLoading, response } = useFetch(base + mainUrl + '/slider/');
    const swiperRef = useRef();

    const Sanitized = ({ html = "" }) => {
        const sanitized = sanitize(html);
        return <span dangerouslySetInnerHTML={{ __html: sanitized }} />;
    };

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
    <div className="relative">
      <Swiper
        hashNavigation={{
          watchState: true,
        }}
        onSwiper={(swiper) => {
            swiperRef.current = swiper;
        }}
        loop={true}
        slidesPerView={1}
        navigation={{
            nextEl: '.banner-next',
            prevEl: '.banner-prev',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {response &&
          response.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-wrap justify-center w-full max-h-[624px] bg-arrow">
                <img
                  src={uri + item.background_image}
                  alt=""
                  className="w-full max-h-[624px] object-cover bg-no-repeat relative"
                />
                  <div className='w-full h-[624px] bg-gradient-banner opacity-[40%] absolute top-0 left-0 z-0'></div>
                  {/*<div className='w-[4.3%] h-[624px] absolute bg-gradient-banner opacity-[40%] top-0 right-0 z-100'></div>*/}
                <div className="container w-[1236px] h-[624px] m-auto text-white bg-gradient-banner absolute top-0 flex items-center z-1000">
                  <div className="ml-[52px] items-center">
                    <p className="text-[32px] font-bold">
                        <Sanitized html={item.title_ky}/>
                    </p>
                    <p className="text-[32px] font-normal"></p>
                    <p className="mt-[26px] font-normal text-[26px]">
                        <SanitizedHTML html={item.subtitle_ky} />
                      {/*<Link to="/" className="underline text-white">*/}
                      {/*  {' '}*/}
                      {/*  jashtar.gov.kg*/}
                      {/*</Link>*/}
                    </p>
                  </div>
                </div>
                  </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div
          className="banner-prev absolute top-[300px] left-[20px]"
          onClick={() => swiperRef.current.slidePrev()}
      ></div>
      <div
          className="banner-next absolute top-[300px] right-[25px]"
          onClick={() => swiperRef.current.slideNext()}
      ></div>
    </div>
  );
};

export default Banner;