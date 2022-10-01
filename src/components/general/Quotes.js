import {React, useRef} from 'react';
import {useFetch} from "../../api/useFetch";
import {base, mainUrl, uri} from "../../api/const";
import {useTranslation} from "react-i18next";
import {Autoplay, Navigation, Pagination, } from "swiper";
import {SwiperSlide, Swiper} from "swiper/react";

const Quotes = () => {
    const { response } = useFetch(base + mainUrl + '/quote/');
    const { t, i18n} = useTranslation();
    const swiperRef = useRef();

    return (
        <div>
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
                slidesPerView={1}
                speed={600}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {response &&
                    response.map((item) => (
                        <SwiperSlide key={item.id} className='flex items-center'>
                            <>
                                { i18n.language === 'ky' &&
                                    <div>
                                        <p className=" text-[12px] text-center w-[284px] font-medium flex-wrap text-blue leading-[11px]">{item.quote_ky}</p>
                                        <div className="text-[11px] text-right w-[284px] font-normal mt-[10px] text-grey mr-2">{item.annotation_ky}</div>
                                    </div>}
                                { i18n.language === 'ru' &&
                                    <div>
                                        <p className="text-[11px] w-[284px] font-medium flex-wrap text-blue leading-[13px]">{item.quote_ru}</p>
                                        <div className="text-[10px] text-right font-normal mt-[10px] text-grey mr-2">{item.annotation_ru}</div>
                                    </div>}
                                { i18n.language === 'en' &&
                                    <div>
                                        <p className=" text-[11px] w-[284px] font-medium flex-wrap text-blue leading-[13px]">{item.quote_en}</p>
                                        <div className="text-[10px] text-right font-normal mt-[10px] text-grey mr-2">{item.annotation_en}</div>
                                    </div>}
                                <div className="h-[62px] w-[62px] overflow-hidden z-10 m-auto rounded-[50%] my-[14px] ">
                                    <img
                                        src={uri + item.avatar_image}
                                        alt="cart-img"
                                        className=" h-auto w-[100%]"
                                    />
                                </div>

                                </>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default Quotes;