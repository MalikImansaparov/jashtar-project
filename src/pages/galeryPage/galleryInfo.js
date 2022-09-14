import React, {useRef} from 'react';
import close from "../../assets/image/about/close.png";
import lotte from "../../assets/image/main/news.png";
import Modal from './modal'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {useFetch} from "../../api/useFetch";
import {base, galeryUrl, url} from "../../api/const";
import {useClickOutside} from "../../hooks/useOutside";

const GalleryInfo = ({openRegisterModal, setOpenRegisterModal}) => {
    const [ref] = useClickOutside(() => setOpenRegisterModal(false))
    const { isLoading, response } = useFetch(base + galeryUrl + '/gallery_image/');
    const swiperRef = useRef();
    document.body.style.overflow = "hidden";

    const onClose = () => {
        setOpenRegisterModal(false)
        document.body.style.overflow = "";
    }

    return (
        <div>
            <Modal open={openRegisterModal} >
                <div className='w-[1236px]  bg-white rounded-[12px] px-8 shadow-org'>
                    <Swiper
                        hashNavigation={{
                            watchState: true,
                        }}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.info-next',
                            prevEl: '.info-prev',
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Pagination, Navigation]}
                    >
                        {response &&
                            response.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div>
                                        <div className="flex justify-end mt-[37px] mb-[27px]" ref={ref}>
                                            <img src={close} alt="close icon " className="cursor-pointer" onClick={onClose}/>
                                        </div>
                                        <img src={lotte} alt='img' className="w-full h-[555px]"/>
                                        <div className="flex justify-center mt-8 mb-4">
                                            <div
                                                className="info-prev"
                                                onClick={() => swiperRef.current.slidePrev()}
                                            ></div>
                                            <div
                                                className="info-next"
                                                onClick={() => swiperRef.current.slideNext()}
                                            ></div>
                                        </div>
                                        <div className='block text-base text-blue font-medium mb-3'>{item.title_ky}</div>
                                        <div className="flex items-center mb-[26px]">
                                            <p className="font-normal text-base">{item.desc_ky}</p>
                                        </div>
                                        <p className="font-medium text-sm text-grey">{item.date}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </Modal>

        </div>
    );
};

export default GalleryInfo;