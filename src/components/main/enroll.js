import React, {useEffect, useRef, useState} from 'react';
import {b, base, mainUrl, uri, url} from '../../api/const';
import { useFetch } from '../../api/useFetch';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import {ClipLoader} from "react-spinners";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {Sanitized} from "../general/sanitize";
import dots from '../../assets/image/main/Ellipse 1.png';
import {Link} from "react-router-dom";
import pattern from '../../assets/image/main/Looper-1.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Enroll = () => {
    const swiperRef = useRef();
    const { isLoading  } = useFetch(base + mainUrl + '/slider/');
    const [response, setResponse] = useState([])
    const {t,i18n} = useTranslation()

    const getSliders = async () => {
        const res = await axios.get(base + mainUrl + '/events/')
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
        <div className="bg-gradient-enroll w-screen h-[216px] m-auto justify-center relative max-w-[1440px]">
            <img src={pattern} alt="" className="absolute top-0 left-[25px]" />
            <div className="max-w-[1032px] m-auto flex bg-enroll shadow-enroll rounded pl-[42px] absolute top-[-24px] left-[12%] lg:left-[6%] md:left-[2%] sn:left-[1%]">
            <Swiper
                hashNavigation={{
                    watchState: true,
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                speed={800}
                grabCursor={true}
                navigation={{
                    nextEl: '.banner-next',
                    prevEl: '.banner-prev',
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {response &&
                    response.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="h-[100%] w-[100%] flex justify-between">
                                <div className="mt-[35px] max-w-[815px] m-auto">
                                    <div className="w-[561px]">
                                        {i18n.language === 'ky' && (
                                            <>
                                                <p className="text-[22px] text-semibold text-white w-[461px] mb-[18px]">
                                                    <Sanitized
                                                        html={
                                                            item.title_ky.length > 62
                                                                ? item.title_ky.slice(0, 62) + '...'
                                                                : item.title_ky
                                                        }
                                                    />
                                                </p>
                                                <p className="text-[16px] text-normal max-h-[38px] grey overflow-y-hidden leading-[19px]">
                                                    <Sanitized html={item.desc_ky} />
                                                </p>
                                            </>
                                        )}
                                        {i18n.language === 'ru' && (
                                            <>
                                                <p className="text-[22px] text-semibold text-white w-[461px] mb-[22px]">
                                                    <Sanitized
                                                        html={
                                                            item.title_ru.length > 62
                                                                ? item.title_ky.slice(0, 62) + '...'
                                                                : item.title_ky
                                                        }
                                                    />
                                                </p>
                                                <p className="text-[16px] text-normal max-h-[38px] grey overflow-y-hidden leading-[19px]">
                                                    <Sanitized html={item.desc_ru} />
                                                </p>
                                            </>
                                        )}
                                        {i18n.language === 'en' && (
                                            <>
                                                <p className="text-[22px] text-semibold text-white w-[461px] mb-[22px]">
                                                    <Sanitized
                                                        html={
                                                            item.title_en.length > 62
                                                                ? item.title_ky.slice(0, 62) + '...'
                                                                : item.title_ky
                                                        }
                                                    />
                                                </p>
                                                <p className="text-[16px] text-normal max-h-[38px] grey overflow-y-hidden leading-[19px]">
                                                    <Sanitized html={item.desc_en} />
                                                </p>
                                            </>
                                        )}
                                        <div className="flex mt-8 justify-between">
                                            <p className="text-grey flex">
                                                <img
                                                    src={dots}
                                                    className="mr-[10px] w-[8px] h-[8px] mt-2"
                                                    alt="dots"
                                                />
                                                <span>{t('date')}</span>
                                                <span className="text-black ">
                            &nbsp;
                                                    {item.event_date.split('-').reverse().join('-')}
                          </span>
                                            </p>
                                            <Link
                                                to={`events/${item.id}`}
                                                className="btn pointer-events-auto mr-8"
                                            >
                                                {t('more')}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[416px] max-h-[264px] items-end overflow-hidden rounded-t">
                                    <img
                                        src={uri + item.preview_image}
                                        alt="person"
                                        className="h-auto w-[100%]"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
                <div
                    className="prev absolute top-[129px] left-[-60px]"
                    onClick={() => swiperRef.current.slidePrev()}
                ></div>
                <div
                    className="next absolute top-[129px] right-[-60px]"
                    onClick={() => swiperRef.current.slideNext()}
                ></div>
        </div>
        </div>
    );
};

