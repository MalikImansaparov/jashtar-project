import React, {useState} from 'react';
import close from "../../assets/image/about/close.png"
import Popover from "../galeryPage/popover";
import {useClickOutside} from "../../hooks/useOutside";
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, councilUrl, newsUrl, uri, url} from "../../api/const";
import {useTranslation} from "react-i18next";
import {createMarkup} from "../../components/general/dompurify";
import {ClipLoader} from "react-spinners";
import {useFetches} from "../../api/getFetch";
import {useParams} from "react-router-dom";
import Modal from "./imagePopup";


const InfoImage = ({openRegisterModal, setOpenRegisterModal}) => {
    const [ref] = useClickOutside(() => setOpenRegisterModal(false))
    const img = localStorage.getItem('image')

    const onClose = () => {
        setOpenRegisterModal(false)
    }

        return (
            <div className="text-justify font-inter cursor-pointer" >
                <Modal open={openRegisterModal}>
                            <div className="flex items-center flex-wrap" ref={ref}>
                                    <div className="flex items-center w-[836px] h-[500px] overflow-hidden"
                                         onClick={onClose}>
                                        <img src={uri + img} alt='organization' className='shadow-org w-[100%] h-auto'/>
                                    </div>
                            </div>
                </Modal>
            </div>
    );
};

export default InfoImage;