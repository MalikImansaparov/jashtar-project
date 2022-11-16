import React, {useRef} from 'react';
import close from "../../assets/image/about/close.png";
import Modal from './modal'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper';
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
                <div className='max-w-[1236px] bg-white rounded-[12px] px-8 text-justify xl:max-w-[1090px] 2lg:max-w-[900px]
                2md:max-w-[750px] md:max-w-[600px] 1sm:max-w-[500px] 1xs:max-w-[450px] xs:max-w-[380px]'>
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
                                            autoplay={{
                                                delay: 6000,
                                                disableOnInteraction: false,
                                            }}
                                            hashNavigation={{
                                                watchState: true,
                                            }}
                                            navigation={true}
                                            grabCursor={true}
                                            speed={700}
                                            loop={true}
                                            spaceBetween={10}
                                            slidesPerView={1}
                                            // onSwiper={(swiper) => {
                                            //     swiperRef.current = swiper;
                                            // }}
                                            modules={[Autoplay, Pagination, Navigation]}
                                        >
                                        {response.gallery.map(i => (
                                            <SwiperSlide key={i.id}>
                                                <div className="w-full max-h-[600px] overflow-hidden shadow-2xl">
                                                    <img src={uri + i.image} alt='img' className="w-[100%] h-auto shadow-2xl" />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                        </Swiper>
                                        { i18n.language === "ky" &&
                                        <div>
                                        <div className='block text-base text-blue font-medium mb-2 mt-4 '>{response.title_ky}</div>
                                        <div className="flex items-center mb-[26px]">
                                            <p className="font-normal text-base">
                                                <Sanitized html={response.desc_ky}/></p>
                                        </div>
                                        </div>}
                                        { i18n.language === "ru" &&
                                            <>
                                                <div className='block text-base text-blue font-medium mb-2 mt-4'>{response.title_ru}</div>
                                                <div className="flex items-center mb-[26px]">
                                                    <p className="font-normal text-base">
                                                        <Sanitized html={response.desc_ru}/></p>
                                                </div>
                                            </>}
                                        { i18n.language === "en" &&
                                            <>
                                                <div className='block text-base text-blue font-medium mb-2 mt-4'>{response.title_en}</div>
                                                <div className="flex items-center mb-[26px]">
                                                    <p className="font-normal text-base">
                                                        <Sanitized html={response.desc_en}/>
                                                    </p>
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