import React from 'react';
import logo from "../../assets/image/main/logotip.png"
import avatar from "../../assets/image/main/logo.png"
import {project} from "../statiic/data";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='bg-white'>
        <div className='wrapper flex justify-between items-center'>
            <div className='flex'>
                <NavLink to='/'><img className="w-[54px] h-[54px] my-[8px] mr-3 cursor-pointer" src={logo} alt='logo'/></NavLink>
                <div className="mt-2.5 pt-1">
                    <p className="text-[11px] font-monserrat w-[284px] flex-wrap leading-[13px]">Министерство культуры, информации, спорта и молодежной политики Кыргызской Республики</p>
                    <p className="text-sm text-blue font-semibold mt-1 text-blue leading-[14px]">Жаштар саясаты</p>
                </div>
            </div>
            <div className="flex w-379 h-[78px] items-center">
                {project.map( item => (
                    <Link to={item.url} key={item.id} className="text-sm font-bold mx-[16px] underline">
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className='flex'>
                <div className=" mt-3.5 pt-1">
                    <p className=" text-[11px] w-[284px] font-medium flex-wrap text-blue leading-[13px]">“Молодежь должна стать основным локомотивом развития нашего Кыргызстана.”</p>
                    <div className="text-[10px] text-right font-normal mt-[10px] text-grey">Жапаров С.Н., Президент КР</div>
                </div>
                <img className="w-[62px] h-[62px] my-[8px] ml-[6px]" src={avatar} alt='logo' />
            </div>

        </div>
        </div>
    );
};

export default Header;