import React, {useRef} from 'react';
import close from "../../assets/image/about/close.png";
import Modal from './modal'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {useFetch} from "../../api/useFetch";
import {base, galeryUrl, lead, url} from "../../api/const";
import {useClickOutside} from "../../hooks/useOutside";
import {Sanitized} from "../../components/general/sanitize";
import {useTranslation} from "react-i18next";
import {ClipLoader} from "react-spinners";

const VideoInfo = ({openRegisterModal, setOpenRegisterModal, id}) => {

    const [ref] = useClickOutside(() => setOpenRegisterModal(false))
    const { isLoading, response } = useFetch(base + galeryUrl + `/video/${id}`);
    document.body.style.overflow = "hidden";
    const {i18n} = useTranslation()

    const onClose = () => {
        setOpenRegisterModal(false)
        document.body.style.overflow = "";
    }

    return (
        <div>
            <Modal open={openRegisterModal}>
                <div className='w-[1236px] bg-white rounded-[12px] px-8' ref={ref}>
                    { isLoading &&
                        <div role="status" className='flex justify-center my-28 pb-24'>
                            <ClipLoader
                                color="#1985A1"
                                size={300}
                            />
                        </div>
                    }
                        {response &&
                                    <div className="">
                                        <div className="flex justify-end mt-[37px] mb-[27px] cursor-pointer">
                                            <img src={close} alt="close icon" onClick={onClose}/>
                                        </div>
                                        <iframe
                                            width="1178"
                                            height="555"
                                            src={response.video}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="Embedded youtube"
                                        />
                                        {i18n.language === "ky" &&
                                            <>
                                        <div className='block text-base text-blue font-medium mb-3 mt-[32px]'>{response.title_ky}</div>
                                        <div className="flex items-center mb-[26px]">
                                            <p className="font-normal text-base">
                                                <Sanitized html={response.desc_ky}/></p>
                                        </div>
                                            </> }
                                        {i18n.language === "ru" &&
                                            <>
                                                <div className='block text-base text-blue font-medium mb-3 mt-[32px]'>{response.title_ru}</div>
                                                <div className="flex items-center mb-[26px]">
                                                    <p className="font-normal text-base">
                                                        <Sanitized html={response.desc_ru}/></p>
                                                </div>
                                            </> }
                                        {i18n.language === "en" &&
                                            <>
                                                <div className='block text-base text-blue font-medium mb-3 mt-[32px]'>{response.title_en}</div>
                                                <div className="flex items-center mb-[26px]">
                                                    <p className="font-normal text-base">
                                                        <Sanitized html={response.desc_en}/></p>
                                                </div>
                                            </> }
                                        <p className="font-medium text-sm text-grey">{response.date}</p>
                                    </div>
                           }
                </div>
            </Modal>
        </div>
    );
};

export default VideoInfo;