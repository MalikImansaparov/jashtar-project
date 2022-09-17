import React, {useState} from 'react';
import close from "../../assets/image/about/close.png"
import kfw from "../../assets/image/about/orgonization/kfw-group.png"
import Popover from "../galeryPage/popover";
import {useClickOutside} from "../../hooks/useOutside";
import {useFetch} from "../../api/useFetch";
import {base, councilUrl, uri, url} from "../../api/const";
import {useTranslation} from "react-i18next";

const InfoPartners = ({openRegisterModal, setOpenRegisterModal}) => {
    const {t} = useTranslation()
    const [ref] = useClickOutside(() => setOpenRegisterModal(false))
    document.body.style.overflow = "hidden";
    const link = "https://bischkek.diplo.de/kg-ru/themen/weitere-themen/gtz/1256134"

    const { isLoading, response } = useFetch(base + councilUrl + '/partner/${id}');
    console.log(response)

    const onClose = () => {
        setOpenRegisterModal(false)
        document.body.style.overflow = "";
    }

        return (
            <div>
                <Popover open={openRegisterModal}>
                    <div className='w-[1236px] h-[1059px] bg-white rounded-[12px] p-[62px] shadow-org' ref={ref} >
                        <div className="flex justify-end cursor-pointer">
                            <img src={close} alt="close icon" onClick={onClose}/>
                        </div>
                        {response && response(item => (
                        <div className="flex" key={item.id}>
                            <div className='w-[332px] h-[277px] rounded shadow-partner flex justify-center items-center mb-[10px]'>
                                <img src={uri + item.org_image} alt='img' className="w-[245px] h-[48px]"/>
                            </div>
                            <div className='ml-[106px]'>
                                <p className='text-blue text-base font-semibold mb-8'>
                                    {response.title_ky}
                                </p>
                                <p className="w-[718px] text-base font-normal leading-[19.3px]">
                                    {response.desk_ky}
                                </p>
                            </div>
                        </div>
                            ))}
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