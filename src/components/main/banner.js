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
import SanitizedHTML from 'react-sanitized-html';
import {useTranslation} from "react-i18next";
import axios from "axios";

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
        <div className="relative max-w-[1440px] m-auto">
            <Swiper
                hashNavigation={{
                    watchState: true,
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                spaceBetween={10}
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
                            <div className="flex flex-wrap justify-center w-full max-h-[624px] bg-arrow">
                                <img
                                    src={uri + item.background_image}
                                    alt=""
                                    className="w-full max-h-[624px] object-cover bg-no-repeat relative"
                                />
                                {/*<div className='w-full h-[624px] bg-gradient-banner opacity-[40%] absolute top-0 left-0 z-0'></div>*/}
                                {/*<div className='w-[4.3%] h-[624px] absolute bg-gradient-banner opacity-[40%] top-0 right-0 z-100'></div>*/}
                                <div className="container w-[1236px] h-[624px] m-auto text-white bg-gradient-banner absolute top-0 flex items-center z-1000">
                                    {i18n.language === 'ky' &&
                                        <div className="ml-[52px] items-center">
                                            <p className="text-[32px] font-bold">
                                                <SanitizedHTML html={item.title_ky}/>
                                            </p>
                                            <p className="text-[32px] font-normal">
                                            </p>
                                            <p className="text-[32px] font-normal"></p>
                                            {/*<p className="mt-[26px] font-normal text-[26px]">*/}
                                            {/*    <SanitizedHTML html={(item.subtitle_ky)}/>*/}
                                            {/*</p>*/}
                                        </div>
                                    }
                                    {i18n.language === 'ru' &&
                                        <div className="ml-[52px] items-center">
                                            <p className="text-[32px] font-bold">
                                                <SanitizedHTML html={item.title_ru}/>
                                            </p>
                                            <p className="text-[32px] font-normal">
                                            </p>
                                            <p className="text-[32px] font-normal"></p>
                                            {/*<p className="mt-[26px] font-normal text-[26px]">*/}
                                            {/*    <SanitizedHTML html={(item.subtitle_ru)}/>*/}
                                            {/*</p>*/}
                                        </div>
                                    }
                                    {i18n.language === 'en' &&
                                        <div className="ml-[52px] items-center">
                                            <p className="text-[32px] font-bold">
                                                <SanitizedHTML html={item.title_en}/>
                                            </p>
                                            <p className="text-[32px] font-normal">
                                            </p>
                                            <p className="text-[32px] font-normal"></p>
                                            {/*<p className="mt-[26px] font-normal text-[26px]">*/}
                                            {/*    <SanitizedHTML html={(item.subtitle_en)}/>*/}
                                            {/*</p>*/}
                                        </div>
                                    }
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