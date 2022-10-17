import React from 'react';
import logo from "../../assets/image/main/logotip.png";
import {NavLink} from "react-router-dom";
import FooterSocial from "./footerSocial";
import {useTranslation} from "react-i18next";
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base} from "../../api/const";


const Footer = () => {
    const {t, i18n} = useTranslation()
    const { response } = useFetch(base + aboutUrl + '/contacts/');

    return (
        <div className=" bg-blueLight relative bottom-0 font-inter">
        <div className='wrapper py-[16px] justify-between relative'>
            <div className='flex md:ml-2 xs:block'>
                <div className="flex 1sm:hidden">
                <NavLink to='/'><img className="w-[46px] h-[54px] my-[8px] mr-3 cursor-pointer md:w-[46px] h-[46px] mr-1" src={logo} alt='logo'/></NavLink>
                <div className="mt-3 mr-[102px] lg:mr-[60px] md:mr-[10px]">
                    <p className="text-[11px] font-monserrat w-[284px] flex-wrap leading-[13px]">{t('main')}</p>
                    <p className="text-sm text-blue font-semibold mt-1 text-blue leading-[14px]">{t('name')}</p>
                </div>
                </div>
                { response && response.map( item => (
                    <div className='pt-[8px]  md:ml-2' key={item.id}>
                        {i18n.language === "ky" &&
                    <div className="font-medium text-xs mb-1.5">{item.address_ky}</div>}
                        {i18n.language === "ru" &&
                            <div className="font-medium text-xs mb-1.5">{item.address_ru}</div>}
                        {i18n.language === "en" &&
                            <div className="font-medium text-xs mb-1.5">{item.address_en}</div>}

                            {item.contact.map(i => (
                            <div key={i.id} className="xs:block">
                                <div className="font-medium text-xs mb-1.5 mr-2">{i.phone}</div>
                            </div>
                        ))}
                </div>
                ))}
            </div>
            <div className="absolute right-0 bottom-5 md:mr-2"><FooterSocial/></div>
        </div>
        </div>
    );
};

export default Footer;