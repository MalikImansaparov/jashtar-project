import {useState} from "react";
import {Autoplay, Navigation, Thumbs} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {uri} from "../../api/const";

export const TabsSlider = props => {
    const [activeThumb, setActiveThumb] = useState()

    return <>
        <div className="flex m-auto w-[300px]">
        <Swiper
            onSwiper={setActiveThumb}
            navigation={{
                nextEl: '.detail-next',
                prevEl: '.detail-prev',
            }}
            loop={true}
            spaceBetween={10}
            slidesPerView={5}
            modules={[Navigation, Thumbs]}
        >
            {
                props.images.map((item, index) => (
                    <SwiperSlide key={index} className="">
                        <img
                            src={uri + item.image}
                            alt="cart-img"
                            className="h-[40px] w-[62px] rounded-t mt-5 mb-2 m-auto  cursor-pointer"
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
        </div>
    </>
}