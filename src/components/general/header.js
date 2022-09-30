import {React, useRef} from 'react';
import logo from "../../assets/image/main/logotip.png"
import {project} from "../statiic/data";
import {Link, NavLink} from "react-router-dom";
import {useFetch} from "../../api/useFetch";
import {base, mainUrl, uri} from "../../api/const";
import {useTranslation} from "react-i18next";
import {Autoplay, Navigation, Pagination, } from "swiper";
import {SwiperSlide, Swiper} from "swiper/react";
import Quotes from "./Quotes";

const Header = () => {
    const { response } = useFetch(base + mainUrl + '/quote/');
    const { t, i18n} = useTranslation();
    const swiperRef = useRef();

    return (
        <div className='bg-white'>
        <div className='wrapper flex justify-between items-center'>
            <div className='flex'>
                <NavLink to='/'><img className="w-[54px] h-[54px] my-[8px] mr-3 cursor-pointer" src={logo} alt='logo'/></NavLink>
                <div className="mt-2.5 pt-1">
                    <p className="text-[11px] font-monserrat w-[284px] flex-wrap leading-[13px]">{t("main")}</p>
                    <p className="text-sm text-blue font-semibold mt-1 text-blue leading-[14px]">{t("name")}</p>
                </div>
            </div>
            <div className="flex w-379 h-[78px] items-center">
                {project.map( item => (
                    <div key={item.id} className="text-sm font-bold mx-[16px] underline cursor-pointer" onClick={() => window.open(item.url, '_blank')}>
                        {item.title}
                    </div>
                ))}
            </div>
            <div className="w-[350px]">
            <Quotes/>
            </div>
        </div>
        </div>
    );
};

export default Header;