import React, {useState} from 'react';
import close from "../../../assets/image/about/close.png"
import Popup from "./popup";
import {useClickOutside} from "../../../hooks/useOutside";
import {aboutUrl, base, uri} from "../../../api/const";
import {useFetch} from "../../../api/useFetch";
import {ClipLoader} from "react-spinners";
import {createMarkup} from "../../../components/general/dompurify";
import {useTranslation} from "react-i18next";

const InfoProject = ({openRegisterModal, setOpenRegisterModal }) => {
    const [ref] = useClickOutside(() => setOpenRegisterModal(true))
    const id = localStorage.getItem('project')
    const { isLoading, response } = useFetch(base + aboutUrl + `/project/${id}/`)
    const {i18n} = useTranslation()
    document.body.style.overflow = "hidden";

    const onClose = () => {
        setOpenRegisterModal(false)
        document.body.style.overflow = "";
    }

    return (
        <div>
            <Popup open={openRegisterModal}>
                <div className='w-[1236px] h-auto bg-white rounded-[12px] p-[37px]' ref={ref}>
                    { isLoading &&
                        <div role="status" className='flex justify-center my-28 pb-24'>
                            <ClipLoader
                                color="#1985A1"
                                size={300}
                            />
                        </div>
                    }
                    <div className="flex justify-end cursor-pointer">
                        <img src={close} alt="close icon" onClick={onClose}/>
                    </div>
                    {response &&
                        <div className="flex" key={response.id}>
                            <div className='w-[332px] h-[276px] rounded shadow-partner flex justify-start items-center mb-[10px] p-8 shadow-xl'>
                                <div className="flex items-center w-[245px] h-[250px]">
                                <img src={uri + response.proj_image} alt='img' className="h-auto w-[100%]"/>
                                </div>
                            </div>
                            {i18n.language === "ky" &&
                                <div className='ml-[26px] w-[808px]'>
                                    <p className='text-blue text-base font-semibold my-4 text-justify'>
                                        {response.title_ky}
                                    </p>
                                    <p className=" text-base font-normal leading-[19.3px] text-justify">
                                        <div dangerouslySetInnerHTML={createMarkup(response.desc_ky)}></div>
                                    </p>
                                </div>}
                            {i18n.language === "ru" &&
                                <div className='ml-[76px]'>
                                    <p className='text-blue text-base font-semibold my-4'>
                                        {response.title_ru}
                                    </p>
                                    <p className="w-[800px] text-base font-normal leading-[19.3px] text-justify">
                                        <div dangerouslySetInnerHTML={createMarkup(response.desc_ru)}></div>
                                    </p>
                                </div>}
                            {i18n.language === "en" &&
                                <div className='ml-[76px]'>
                                    <p className='text-blue text-base font-semibold my-4'>
                                        {response.title_en}
                                    </p>
                                    <p className="w-[800px] text-base font-normal leading-[19.3px] text-justify">
                                        <div dangerouslySetInnerHTML={createMarkup(response.desc_en)}></div>
                                    </p>
                                </div>}
                        </div>
                    }
                </div>
            </Popup>
        </div>
    );
};

export default InfoProject;