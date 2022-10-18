import React, {useState} from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import {useFetch} from "../../api/useFetch";
import {base, councilUrl, uri} from '../../api/const'
import InfoPartners from "./infoPartners";
import {useTranslation} from "react-i18next";
import {ClipLoader} from "react-spinners";

export const PartnersList = () => {
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const {isLoading, response} = useFetch(base + councilUrl + `/partner/`);
    const {t, i18n} = useTranslation()

    const openModal = (id) => {
        setOpenRegisterModal(true)
        localStorage.setItem('id', id)
    }

    if (isLoading) {
        return (
            <div role="status" className='flex justify-center my-28 pb-24'>
                <ClipLoader
                    color="#1985A1"
                    size={300}
                />
            </div>
        )
    }

    return (
        <div className='wrapper w-full pb-16 font-inter'>
            <div className="container w-[1196px]">
                <BreadCrumb/>
            </div>
            <div className='w-full flex flex-row flex-wrap justify-center'>
                    {response && response.map(item => (
                        <div key={item.id}>
                            <div className="w-[192px] h-[218px] mb-8 cursor-pointer transition-all hover:scale-125 mx-[22px] hover:scale-110 2lg:mx-[12px]" onClick={() =>  openModal(item.id)}
                              >
                                <div className='w-full h-[160px] rounded shadow-partner flex justify-center items-center mb-[10px] cursor-pointer shadow-lg' key={item.id} >
                                    <div className="h-auto max-w-[140px] overflow-hidden flex justify-center">
                                    <img src={uri + item.org_image} alt='img' className="w-[100%] h-auto self-center"/>
                                    </div>
                                </div>
                                {i18n.language === "ky" &&
                                    <p className='text-[13px] font-medium leading-[16px] text-blue text-center w-[182px]'>{item.title_ky}</p>
                                }
                                {i18n.language === "ru" &&
                                    <p className='text-[13px] font-medium leading-[16px] text-blue text-center w-[182px]'>{item.title_ru}</p>
                                }
                                {i18n.language === "en" &&
                                    <p className='text-[13px] font-medium leading-[16px] text-blue text-center w-[182px]'>{item.title_en}</p>
                                }
                            </div>
                        </div>
                    ))}
                {openRegisterModal && openRegisterModal && (
                    <InfoPartners
                        openRegisterModal={openRegisterModal}
                        setOpenRegisterModal={() => setOpenRegisterModal(false)}
                    />
                )}
            </div>
        </div>
    );
};

