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
                <div className='w-[1236px] h-auto bg-white rounded-[12px] p-[37px] font-inter xl:max-w-[1090px] 2lg:max-w-[900px]
                2md:max-w-[750px] md:max-w-[600px] 1sm:max-w-[500px] 1xs:max-w-[450px] xs:max-w-[380px]'>
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
                        <div key={response.id}>
                            {i18n.language === "ky" &&
                                <>
                            <div className='flex justify-center items-center w-[312px] h-[276px] md:w-[180px] md:h-[180px] 1sm:w-[120px] 1sm:h-auto float-left rounded mb-[10px] shadow-xl mr-6'>
                                <img src={uri + response.proj_image} alt='img' className="w-[270px] h-auto self-center 1sm:mt-4"/>
                            </div>
                                <div>
                                    <p className='text-blue text-base font-semibold my-4 3sm:text-[14px] xs:text-[12px]'>
                                        {response.title_ky}
                                    </p>
                                    <p className=" text-base font-normal leading-[19.3px] text-justify 3sm:text-[14px] xs:text-[12px]">
                                        <div dangerouslySetInnerHTML={createMarkup(response.desc_ky)}></div>
                                    </p>
                                </div>
                                </>
                            }
                            {i18n.language === "ru" &&
                                <>
                                    <div className='flex justify-center items-center w-[312px] h-[276px] md:w-[180px] md:h-[180px] 1sm:w-[120px] 1sm:h-auto float-left rounded mb-[10px] shadow-xl mr-6'>
                                        <img src={uri + response.proj_image} alt='img' className="w-[270px] h-auto self-center 1sm:mt-4"/>
                                    </div>
                                    <div>
                                        <p className='text-blue text-base font-semibold my-4 3sm:text-[14px] xs:text-[12px]'>
                                            {response.title_ru}
                                        </p>
                                        <p className=" text-base font-normal leading-[19.3px] text-justify 3sm:text-[14px] xs:text-[12px]">
                                            <div dangerouslySetInnerHTML={createMarkup(response.desc_ru)}></div>
                                        </p>
                                    </div>
                                </>
                            }
                            {i18n.language === "en" &&
                                <>
                                    <div className='flex justify-center items-center w-[312px] h-[276px] md:w-[180px] md:h-[180px] 1sm:w-[120px] 1sm:h-auto float-left rounded mb-[10px] shadow-xl mr-6'>
                                        <img src={uri + response.proj_image} alt='img' className="w-[270px] h-auto self-center 1sm:mt-4"/>
                                    </div>
                                    <div>
                                        <p className='text-blue text-base font-semibold my-4 3sm:text-[14px] xs:text-[12px]'>
                                            {response.title_en}
                                        </p>
                                        <p className=" text-base font-normal leading-[19.3px] text-justify 3sm:text-[14px] xs:text-[12px]">
                                            <div dangerouslySetInnerHTML={createMarkup(response.desc_en)}></div>
                                        </p>
                                    </div>
                                </>
                            }
                        </div>
                    }
                </div>
            </Popup>
        </div>
    );
};

export default InfoProject;