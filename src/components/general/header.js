import {React} from 'react';
import logo from "../../assets/image/main/logotip.png"
import {project} from "../statiic/data";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Quotes from "./Quotes";

const Header = () => {
    const {t} = useTranslation();

    return (
        <div className='bg-white font-inter'>
        <div className='wrapper flex justify-between items-center sm:relative'>
            <div className='flex'>
                <NavLink to='/'><img className="w-[54px] h-[54px] my-[8px] mr-3 cursor-pointer md:w-[46px] md:h-[46px] mr-1 sm:ml-2" src={logo} alt='logo'/></NavLink>
                <div className="mt-2.5 pt-1">
                    <p className="text-[11px] font-monserrat w-[284px] flex-wrap leading-[13px]">{t("main")}</p>
                    <p className="text-sm text-blue font-semibold mt-1 text-blue leading-[14px]">{t("name")}</p>
                </div>
            </div>
            <div className="max-w-[400px] justify-center flex flex-wrap xl:max-w-[300px] 2lg:max-w-[250px] lg:hidden">
                {project.map( item => (
                    <div key={item.id} className="text-sm font-bold mx-[16px] underline cursor-pointer xl:mx-[14px] lg:mx-[8px]"
                         onClick={() => window.open(item.url,'_blank')}>
                        {item.title}
                    </div>
                ))}
            </div>
            {/*<div className="md:w-full h-[65px]">*/}
            <div className="max-w-[340px] sm:hidden">
                {/*absolute top-[55px] right-0 mr-2*/}
            <Quotes/>
            </div>
            {/*</div>*/}
        </div>
        </div>
    );
};

export default Header;