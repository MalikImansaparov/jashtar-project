import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import bg from "../../assets/image/about/contacts-bg.png";
import pattern from "../../assets/image/main/Looper-1.png"
import {aboutUrl, base, uri} from "../../api/const";
import {useFetch} from "../../api/useFetch";
import {useTranslation} from "react-i18next";
import {ClipLoader} from "react-spinners";

export const Contacts = () => {
    const { isLoading, response } = useFetch(base + aboutUrl + '/contacts/');
    const {t, i18n} = useTranslation()

    const bgImageStyle = {
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover'
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

    // backgroundImage: `url('${uri + response.map(i => i.background_image)}')`,

    return (
        <>
            {response && response.map(item => (
        <div className="w-full h-[655px]  mb-[62px] relative" style={bgImageStyle} key={item.id}>
            <div className='h-[232px] w-[70%] absolute top-[170px] left-0 rounded bg-[#3070B633] bg-gradient-jashtar z-0'></div>
        <div className='wrapper'>
            <div className="container w-[1196px] m-auto">
                <BreadCrumb/>
            </div>
            <div className='flex'>
                <div className="flex justify-center items-center w-[443px]">
                    {i18n.language === "ky" &&
                        <p className="font-semibold text-[18px] text-white leading-[23px]">
                            {item.title_ky}
                        </p>
                    }
                    {i18n.language === "ru" &&
                        <p className="font-semibold text-[18px] text-white leading-[23px]">
                            {item.title_ru}
                        </p>
                    }
                    {i18n.language === "en" &&
                        <p className="font-semibold text-[18px] text-white leading-[23px]">
                            {item.title_en}
                        </p>
                    }
                </div>
                <div className="relative rounded w-[532px] h-[322px] bg-white flex justify-center items-center ml-[261px]">
                    <img src={pattern} alt="pattern" className="absolute top-0 right-[20px] w-[200px] h-[200px]"/>
                    <div className="">
                    { response && response.map( item => (
                        <div key={item.id} className="text-white">
                            {i18n.language === "ky" &&
                                <p className="text-base font-medium mb-[22px]">{t('address')}<span
                                    className="text-blue">{item.address_ky}</span></p>
                            }
                            {i18n.language === "ru" &&
                                <p className="text-base font-medium mb-[22px]">{t('address')}<span
                                    className="text-blue">{item.address_ru}</span></p>
                            }
                            {i18n.language === "en" &&
                                <p className="text-base font-medium mb-[22px]">{t('address')}<span
                                    className="text-blue">{item.address_en}</span></p>
                            }
                        </div>
                    ))}
                    { item.contact.map( i => (
                        <div key={i.id}>
                            <p className="text-base font-medium">{t('phone')}<span className="text-blue">{i.phone}</span></p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
            ))}
        </>
    );
};

