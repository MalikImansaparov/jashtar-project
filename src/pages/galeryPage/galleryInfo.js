import React, {useRef} from 'react';
import close from "../../assets/image/about/close.png";
import lotte from "../../assets/image/main/news.png";
import Modal from './modal'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {settings} from "../../components/slider/settings";
import {useFetch} from "../../api/useFetch";
import {url} from "../../api/const";

const GalleryInfo = ({openRegisterModal, setOpenRegisterModal}) => {
    const { response } = useFetch(url);
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
                                        <div className="flex justify-end mt-[37px] mb-[27px]">
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
                                        <div className='block text-base text-blue font-medium mb-3'>Список участников координационного совета:</div>
                                        <div className="flex items-center mb-[26px]">
                                            <p className="font-normal text-base">Приоритетным направлением IFC в Кыргызской Республике является поддержка развития и диверсификации частного сектора с целью улучшения конкурентоспособности страны и возможностей трудоустройства. IFC помогает совершенствовать операционную деятельность компаний, создать благоприятную среду для ведения бизнеса и увеличить доступ к финансированию для малого и среднего бизнеса (МСБ).</p>
                                        </div>
                                        <p className="font-medium text-sm text-grey">16 июня, 2022 г.</p>
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