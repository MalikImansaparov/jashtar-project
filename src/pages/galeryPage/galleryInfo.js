import React, {useRef} from 'react';
import close from "../../assets/image/about/close.png";
import Modal from './modal'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {useFetch} from "../../api/useFetch";
import {base, galeryUrl, uri, url} from "../../api/const";
import {useClickOutside} from "../../hooks/useOutside";
import {Sanitized} from "../../components/general/sanitize";
import {useTranslation} from "react-i18next";
import {ClipLoader} from "react-spinners";

const GalleryInfo = ({openRegisterModal, setOpenRegisterModal}) => {
    const [ref] = useClickOutside(() => setOpenRegisterModal(false))
    document.body.style.overflow = "hidden";
    const id = localStorage.getItem('id')
    const { isLoading, response } = useFetch(base + galeryUrl + `/photo/${id}/`);
    const swiperRef = useRef();
    const {i18n} = useTranslation()

    const onClose = () => {
        setOpenRegisterModal(false)
        document.body.style.overflow = "";
    }

    return (
        <div>
            <Modal open={openRegisterModal}>
                <div className='w-[1236px] bg-white rounded-[12px] px-8 shadow-org'>
                    { isLoading &&
                        <div role="status" className='flex justify-center my-28 pb-24'>
                            <ClipLoader
                                color="#1985A1"
                                size={300}
                            />
                        </div>
                    }
                    <div className="flex justify-end mt-[37px] mb-[27px] cursor-pointer" >
                         <img src={close} alt="close icon" onClick={onClose} />
                    </div>
                    <div ref={ref}>
                        { response &&
                                    <div>
                                        <Swiper
                                            hashNavigation={{
                                                watchState: true,
                                            }}
                                            spaceBetween={0}
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
                                        {response.gallery.map(i => (
                                            <SwiperSlide key={i.id} >
                                                <div className="h-[555px] w-[100%] overflow-hidden">
                                                    <img src={uri + i.image} alt='img' className="w-[100%] h-[100%]" />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                        </Swiper>
                                        { response.gallery.length > 1 &&
                                        <div className="flex justify-center mt-8 mb-3">
                                            <div
                                                className="info-prev"
                                                onClick={() => swiperRef.current.slidePrev()}
                                            ></div>
                                            <div
                                                className="info-next"
                                                onClick={() => swiperRef.current.slideNext()}
                                            ></div>
                                        </div>}
                                        { i18n.language === "ky" &&
                                        <>
                                        <div className='block text-base text-blue font-medium mb-2'>{response.title_ky}</div>
                                        <div className="flex items-center mb-[26px]">
                                            <p className="font-normal text-base">
                                                <Sanitized html={response.desc_ky}/></p>
                                        </div>
                                        </>}
                                        { i18n.language === "ru" &&
                                            <>
                                                <div className='block text-base text-blue font-medium mb-2'>{response.title_ru}</div>
                                                <div className="flex items-center mb-[26px]">
                                                    <p className="font-normal text-base">
                                                        <Sanitized html={response.desc_ru}/></p>
                                                </div>
                                            </>}
                                        { i18n.language === "en" &&
                                            <>
                                                <div className='block text-base text-blue font-medium mb-2'>{response.title_en}</div>
                                                <div className="flex items-center mb-[26px]">
                                                    <p className="font-normal text-base">
                                                        <Sanitized html={response.desc_en}/></p>
                                                </div>
                                            </>}
                                        <p className="font-medium text-sm text-grey">{response.date}</p>
                                    </div>
                           }
                    </div>
                </div>
            </Modal>

        </div>
    );
};

export default GalleryInfo;