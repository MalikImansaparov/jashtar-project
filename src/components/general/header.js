import React from 'react';
import logo from "../../assets/image/main/logotip.png"
import {project} from "../statiic/data";
import {Link, NavLink} from "react-router-dom";
import {useFetch} from "../../api/useFetch";
import {base, mainUrl, uri} from "../../api/const";
import {useTranslation} from "react-i18next";


const Header = () => {
    const { isLoading, response } = useFetch(base + mainUrl + '/quote/');
    const { t } = useTranslation();

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
                    <Link to={item.url} key={item.id} className="text-sm font-bold mx-[16px] underline">
                        {item.title}
                    </Link>
                ))}
            </div>
            {response && response.map( item => (
                <div className='flex' key={item.id}>
                    <div className=" mt-3.5 pt-1">
                        <p className=" text-[11px] w-[284px] font-medium flex-wrap text-blue leading-[13px]">{item.quote_ky}</p>
                        <div className="text-[10px] text-right font-normal mt-[10px] text-grey">{item.annotation_ky}</div>
                    </div>
                    <img className="w-[62px] h-[62px] my-[8px] ml-[6px]" src={uri + item.avatar_image} alt='logo' />
                </div>
            ))}
        </div>
        </div>
    );
};

export default Header;