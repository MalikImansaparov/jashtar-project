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


const InfoPartners = ({openRegisterModal, setOpenRegisterModal}) => {
    const {t, i18n} = useTranslation()
    const [ref] = useClickOutside(() => setOpenRegisterModal(false))
    document.body.style.overflow = "hidden";
    const id = localStorage.getItem('id')

    const { isLoading, response } = useFetch(base + councilUrl + `/partner/${id}/`);
    const { res } = useFetches(base + aboutUrl + '/project/');

    const onClose = () => {
        setOpenRegisterModal(false)
        document.body.style.overflow = "";
    }

        return (
            <div className="text-justify font-inter">
                <Popover open={openRegisterModal}>
                    <div className='w-[1236px] h-[1059px] bg-white rounded-[12px] p-[62px] shadow-org' ref={ref} >
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
                            <div>
                        <div className="flex" key={response.id}>
                            <div className='w-[312px] h-[266px] rounded shadow-2xl flex justify-center items-center mb-[15px]'>
                                <img src={uri + response.org_image} alt='img' className="w-[245px]"/>
                            </div>
                            {i18n.language === "ky" &&
                            <div className='ml-[45px]'>
                                <p className='text-blue text-base font-semibold mb-8'>
                                    {response.title_ky}
                                </p>
                                <p className="w-[750px] text-base font-normal leading-[19.3px]">
                                    <div dangerouslySetInnerHTML={createMarkup(response.desc_ky)}></div>
                                </p>
                            </div>}
                            {i18n.language === "ru" &&
                                <div className='ml-[45px]'>
                                    <p className='text-blue text-base font-semibold mb-8'>
                                        {response.title_ru}
                                    </p>
                                    <p className="w-[750px] text-base font-normal leading-[19.3px]">
                                        <div dangerouslySetInnerHTML={createMarkup(response.desc_ru)}></div>
                                    </p>
                                </div>}
                            {i18n.language === "en" &&
                                <div className='ml-[25px]'>
                                    <p className='text-blue text-base font-semibold mb-8'>
                                        {response.title_en}
                                    </p>
                                    <p className="w-[770px] text-base font-normal leading-[19.3px]">
                                        <div dangerouslySetInnerHTML={createMarkup(response.desc_en)}></div>
                                    </p>
                                </div>}
                        </div>
                                <p className="bt-4 text-blue text-right cursor-pointer" onClick={() => window.open(response.url)}>{t('url')}</p>
                            </div>
                            }

                        <div className="mt-[62px]">
                            <div className='block text-base font-semibold mb-[36px]'>{t("listProject")}</div>
                            <div className="flex items-center mb-[62px] flex-wrap">
                                {response && response.joint_project.map(item => (
                                    <div key={item.id} className="flex items-center w-[100%] cursor-pointer" >
                                        <img src={uri + item.proj_image} alt='organization' className='shadow-org py-[13px] px-[30px] rounded-[12px] w-[130px] h-[86px] mr-[62px]'/>
                                        {i18n.language === "ky" && <p className="font-normal text-base">{item.title_ky}</p>}
                                        {i18n.language === "ru" && <p className="font-normal text-base">{item.title_ru}</p>}
                                        {i18n.language === "en" && <p className="font-normal text-base">{item.title_en}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Popover>
                    </div>
    );
};

export default InfoPartners;