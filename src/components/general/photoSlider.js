import {useState} from "react";
import {Autoplay, Navigation, Thumbs} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {uri} from "../../api/const";

export const ImagesSlider = props => {
    const [activeThumb, setActiveThumb] = useState()

    return <>
        <Swiper
            hashNavigation={{
                watchState: true,
            }}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay, Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            speed={800}
        >
            {
                props.images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-[432px] h-[247px] mr-[62px] mb-2 z-10 overflow-hidden float-left">
                        <img
                            src={uri + item.image}
                            alt="cart-img"
                            className="h-auto w-[100%] rounded-t"
                        />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        {props.images.length > 1 &&
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
        }
    </>
}