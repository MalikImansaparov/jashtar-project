import React, {useState} from 'react';
import close from "../../assets/image/about/close.png"
import kfw from "../../assets/image/about/orgonization/kfw-group.png"
import Popover from "../galeryPage/popover";
import {useClickOutside} from "../../hooks/useOutside";
import {useFetch} from "../../api/useFetch";
import {base, councilUrl, uri, url} from "../../api/const";
import {useTranslation} from "react-i18next";
import {createMarkup} from "../../components/general/dompurify";
import {ClipLoader} from "react-spinners";

const InfoPartners = ({openRegisterModal, setOpenRegisterModal, id}) => {
    const {t, i18n} = useTranslation()
    const [ref] = useClickOutside(() => setOpenRegisterModal(false))
    document.body.style.overflow = "hidden";

    const { isLoading, response } = useFetch(base + councilUrl + `/partner/${id}`);

    const onClose = () => {
        setOpenRegisterModal(false)
        document.body.style.overflow = "";
    }

        return (
            <div>
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
                        <div className="flex" key={response.id}>

                            <div className='w-[332px] h-[276px] rounded shadow-partner flex justify-center items-center mb-[10px]'>
                                <img src={uri + response.org_image} alt='img' className="w-[245px]"/>
                            </div>
                            {i18n.language === "ky" &&
                            <div className='ml-[106px]'>
                                <p className='text-blue text-base font-semibold mb-8'>
                                    {response.title_ky}
                                </p>
                                <p className="w-[718px] text-base font-normal leading-[19.3px]">
                                    <div dangerouslySetInnerHTML={createMarkup(response.desc_ky)}></div>
                                </p>
                            </div>}
                            {i18n.language === "ru" &&
                                <div className='ml-[106px]'>
                                    <p className='text-blue text-base font-semibold mb-8'>
                                        {response.title_ru}
                                    </p>
                                    <p className="w-[718px] text-base font-normal leading-[19.3px]">
                                        <div dangerouslySetInnerHTML={createMarkup(response.desc_ru)}></div>
                                    </p>
                                </div>}
                            {i18n.language === "en" &&
                                <div className='ml-[106px]'>
                                    <p className='text-blue text-base font-semibold mb-8'>
                                        {response.title_en}
                                    </p>
                                    <p className="w-[718px] text-base font-normal leading-[19.3px]">
                                        <div dangerouslySetInnerHTML={createMarkup(item.desc_en)}></div>
                                    </p>
                                </div>}
                        </div>
                            }
                        <div className="mt-[62px]">
                            <div className='block text-base font-semibold mb-[36px]'>{t("listProject")}</div>
                            <div className="flex items-center mb-[62px] flex-wrap">
                                {/*{response?.map(item => (*/}
                                {/*    <div key={item.id} className="flex items-center w-[100%] cursor-pointer" onClick={() => window.open(link, '_blank')}>*/}
                                {/*        <div className="flex justify-center items-center shadow-org py-[13px] px-[30px] rounded-[12px] w-[291px] h-[86px] mr-[62px]">*/}
                                {/*            <img src={kfw} alt='organization' className=''/>*/}
                                {/*        </div>*/}
                                {/*        <p className="font-normal text-base">1. Deutsche Gesellschaft fur Internationale Zusammenarbeit (GIZ) GmbH</p>*/}
                                {/*    </div>*/}
                                {/*))}*/}
                            </div>
                        </div>
                    </div>
                </Popover>
                    </div>
    );
};

export default InfoPartners;