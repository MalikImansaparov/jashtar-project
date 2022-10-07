import React, {useState} from 'react';
import close from "../../assets/image/about/close.png"
import Popover from "../galeryPage/popover";
import {useClickOutside} from "../../hooks/useOutside";
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, councilUrl, uri, url} from "../../api/const";
import {useTranslation} from "react-i18next";
import {createMarkup} from "../../components/general/dompurify";
import {ClipLoader} from "react-spinners";
import {useFetches} from "../../api/getFetch";


const InfoImage = ({openRegisterModal, setOpenRegisterModal}) => {
    const {t} = useTranslation()
    const [ref] = useClickOutside(() => setOpenRegisterModal(false))
    document.body.style.overflow = "hidden";
    const id = localStorage.getItem('image')

    const { isLoading, response } = useFetch(base + councilUrl + `/news/${id}/`);

    const onClose = () => {
        setOpenRegisterModal(false)
        document.body.style.overflow = "";
    }

        return (
            <div className="text-justify font-inter">
                <Popover open={openRegisterModal}>
                    <div className='w-[1236px] h-[1059px] bg-white rounded-[12px] p-[62px] shadow-org' ref={ref}>
                            <div className="flex items-center mb-[62px] flex-wrap">
                                {response && response.news_slider.map(item => (
                                    <div key={item.id} className="flex items-center h-[100%] w-[100%] cursor-pointer"
                                         onClick={onClose}>
                                        <img src={uri + item.image} alt='organization' className='shadow-org py-[13px] px-[30px] rounded-[12px] w-[130px] h-[86px] mr-[62px]'/>
                                    </div>
                                ))}
                            </div>
                    </div>
                </Popover>
            </div>
    );
};

export default InfoImage;