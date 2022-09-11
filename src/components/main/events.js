import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {useFetch} from "../../api/useFetch";
import {url} from "../../api/const";
import dots from "../../assets/image/main/Ellipse 1.png"
import {Link} from "react-router-dom";

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
    const { isLoading, response } = useFetch(url);
    const swiperRef = useRef();

    return (
        <div className="container m-auto w-[1236px] pt-[62px] relative mb-[62px] z-10">
            <div className="flex justify-between">
                <p className="title">Мероприятие</p>
                <Link to="/events" className="all-view">Посмотреть все</Link>
            </div>
                <Swiper
                    {...settings}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    hashNavigation={{
                        watchState: true,
                    }}
                    slidesPerView={3}
                    spaceBetween={50}
                    modules={[Pagination, Navigation]}
                    navigation={{
                        nextEl: '.button-next',
                        prevEl: '.button-prev',
                    }}
                >
                    <div className="block justify-center m-auto">
                    {response &&
                        response.map((item) => (
                            <SwiperSlide key={item.id}>
                            <Link to={`events/${item.id}`}
                                className="max-w-[384px] h-[419px] m-auto shadow-md rounded bg-white pb-4 mb-4 leading-5 block"
                            >
                                <img
                                    src={item.path}
                                    alt="cart-img"
                                    className="mb-3 h-[247px] w-[384px] rounded-t"
                                />
                                <div className="px-2.5">
                                    <p className="text-base mb-3 font-extrabold max-h-[38px] w-[324px] leading-[19px]">
                                        Стипендиальная программа для иностранных студентов
                                    </p>
                                    <p className="text-base font-normal w-[324px] max-h-[38px] grey overflow-y-hidden leading-[19px]">
                                        Программа разработана для талантливых иностранных студентов, желающих обу...</p>
                                    <div className="w-[324px] my-4 text-sm font-medium">
                                        <p className="text-grey flex">
                                            <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                                            <span>Дата:</span><span className='text-black '>&nbsp;{item.date}</span>
                                        </p>
                                        <p className="text-grey flex">
                                            <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                                            Место проведения: <span className='text-black'>&nbsp;отель Orion</span>
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

