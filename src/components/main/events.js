import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, eventsUrl, uri, url} from "../../api/const";
import dots from "../../assets/image/main/Ellipse 1.png"
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../general/sanitize";

const settings = {
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }
}

export const Events = () => {
    const { isLoading, response } = useFetch(base + eventsUrl + '/events/');
    const {t, i18n} = useTranslation()
    const swiperRef = useRef();

    return (
        <div className="container m-auto w-[1236px] pt-[62px] relative mb-[62px] z-10">
            <div className="flex justify-between">
                <p className="title">{t('events')}</p>
                <Link to="/events" className="all-view">{t('all')}</Link>
            </div>
                <Swiper
                    hashNavigation={{
                        watchState: true,
                    }}
                    spaceBetween={50}
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
                    <div className="block justify-center m-auto">
                    {response &&
                        response.results.map((item) => (
                            <SwiperSlide key={item.id}>
                            <Link to={`events/${item.id}`}
                                className="w-[384px] h-[419px] m-auto shadow-lg rounded bg-white pb-4 mb-4 leading-5 block hover:shadow-2xl"
                            >
                                <div className="mb-3 h-[247px] w-[384px] overflow-hidden rounded-t">
                                    <img
                                        src={uri + item.preview_image}
                                        alt="cart-img"
                                        className="h-auto w-[100%] rounded-t"
                                    />
                                </div>
                                <div className="px-2.5">
                                    {i18n.language === "ky" &&
                                        <>
                                    <p className="text-base mb-3 font-extrabold max-h-[38px] w-[324px] leading-[19px]">
                                        {item.title_ky.length > 60 ? item.title_ky.slice(0, 60) + "..." : item.title_ky}
                                    </p>
                                    <p className="text-base font-normal w-[324px] max-h-[38px] grey overflow-y-hidden leading-[19px]">
                                        <Sanitized html={item.desc_ky}/>
                                    </p>
                                    </>}
                                    {i18n.language === "ru" &&
                                        <>
                                            <p className="text-base mb-3 font-extrabold max-h-[38px] w-[324px] leading-[19px]">
                                                {item.title_ru.length > 60 ? item.title_ky.slice(0, 60) + "..." : item.title_ky}
                                            </p>
                                            <p className="text-base font-normal w-[324px] max-h-[38px] grey overflow-y-hidden leading-[19px]">
                                                <Sanitized html={item.desc_ru}/>
                                            </p>
                                        </>}
                                    {i18n.language === "en" &&
                                        <>
                                            <p className="text-base mb-3 font-extrabold max-h-[38px] w-[324px] leading-[19px]">
                                                {item.title_en.length > 60 ? item.title_ky.slice(0, 60) + "..." : item.title_ky}
                                            </p>
                                            <p className="text-base font-normal w-[324px] max-h-[38px] grey overflow-y-hidden leading-[19px]">
                                                <Sanitized html={item.desc_en}/>
                                            </p>
                                        </>}
                                    <div className="w-[324px] my-4 text-sm font-medium">
                                        <p className="text-grey flex">
                                            <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1.5" alt='dots'/>
                                            <span>{t('date')}</span><span className='text-black '>&nbsp;{item.event_date.split('-').reverse().join('-')}</span>
                                        </p>
                                        <p className="text-grey flex">
                                            <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1.5" alt='dots'/>
                                            {t('location')}
                                            {i18n.language === "ky" && <span className='text-black'>&nbsp;{item.location_ky}</span>}
                                            {i18n.language === "ru" && <span className='text-black'>&nbsp;{item.location_ru}</span>}
                                            {i18n.language === "en" && <span className='text-black'>&nbsp;{item.location_en}</span>}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            </SwiperSlide>
                        ))
                    }
                    </div>
                </Swiper>

            <div
                className="button-prev absolute top-[299px] left-[-35px]"
                onClick={() => swiperRef.current.slidePrev()}
            ></div>
            <div
                className="button-next absolute top-[299px] right-[-40px]"
                onClick={() => swiperRef.current.slideNext()}
            ></div>
        </div>
    );
};

