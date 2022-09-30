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
                    delay: 3500,
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
                        <SwiperSlide key={item.id} className='flex '>
                            <>
                                { i18n.language === 'ky' &&
                                    <div className=" mt-3.5 pt-1">
                                        <p className=" text-[11px] text-center w-[284px] font-medium flex-wrap text-blue leading-[13px]">{item.quote_ky}</p>
                                        <div className="text-[10px] text-right font-normal mt-[10px] text-grey">{item.annotation_ky}</div>
                                    </div>}
                                {/*{ i18n.language === 'ru' &&*/}
                                {/*    <div className=" mt-3.5 pt-1">*/}
                                {/*        <p className="text-[11px] w-[284px] font-medium flex-wrap text-blue leading-[13px]">{item.quote_ru}</p>*/}
                                {/*        <div className="text-[10px] text-right font-normal mt-[10px] text-grey">{item.annotation_ru}</div>*/}
                                {/*    </div>}*/}
                                {/*{ i18n.language === 'en' &&*/}
                                {/*    <div className=" mt-3.5 pt-1">*/}
                                {/*        <p className=" text-[11px] w-[284px] font-medium flex-wrap text-blue leading-[13px]">{item.quote_en}</p>*/}
                                {/*        <div className="text-[10px] text-right font-normal mt-[10px] text-grey">{item.annotation_en}</div>*/}
                                {/*    </div>}*/}
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