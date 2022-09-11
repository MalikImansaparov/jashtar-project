import React from 'react';
import logo from "../../assets/image/main/logotip.png";
import Social from "./social";
import {NavLink} from "react-router-dom";
import FooterSocial from "./footerSocial";

const Footer = () => {
    return (
        <div className="w-full bg-blueLight">
        <div className='wrapper py-[16px] justify-between relative'>
            <div className='flex'>
                <NavLink to='/'><img className="w-[54px] h-[54px] my-[8px] mr-3 cursor-pointer" src={logo} alt='logo'/></NavLink>
                <div className="mt-3 mr-[102px]">
                    <p className="text-[11px] font-monserrat w-[284px] flex-wrap leading-[13px]">Министерство культуры, информации, спорта и молодежной политики Кыргызской Республики</p>
                    <p className="text-sm text-blue font-semibold mt-1 text-blue leading-[14px]">Жаштар саясаты</p>
                </div>
                <div className='pt-[8px]'>
                    <div className="font-medium text-xs mb-1.5">Пушкина 78, 720040 Бишкек, Кыргызстан</div>
                    <div className="font-medium text-xs mb-1.5">+996 312 621194</div>
                    <div className="font-medium text-xs ">+996 312 660952</div>
                </div>
            </div>
            <div className="absolute right-0 bottom-5"><FooterSocial/></div>
        </div>
        </div>
    );
};

export default Footer;