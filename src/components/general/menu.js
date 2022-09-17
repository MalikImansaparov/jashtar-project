import React, {Component, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import search from "../../assets/image/main/search-icon.png"
import Social from "./social";
import About from "../menu/about";
import CoreAdvice from "../menu/coreAdvice";
import {Language} from "../menu/Language";
import close from '../../assets/image/main/close.png'
import SearchPage from "../SearchPage";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";

const Menu = () => {
        const navigate = useNavigate()
        const [openModal, setOpenModal] = useState(false);
        const {t} = useTranslation()

    const toggleModal = () => {
        setOpenModal(!openModal);
    }

    function handle(val){
        navigate('/search'),
        <SearchPage value={val}/>
    }

        return (
            <div className="relative mb-0">
                {!openModal ? (
                    <div className="bg-blue">
                        <div className='wrapper h-[78px] flex justify-between items-center font-inter'>
                            <About/>
                            <CoreAdvice/>
                            <NavLink to="/news"
                                     className="text-white text-[14px] font-semibold">{t("news")}</NavLink>
                            <NavLink to="/category/1"
                                     className="text-white text-[14px] font-semibold">{t("documents")}</NavLink>
                            <NavLink to="/gallery"
                                     className="text-white text-[14px] font-semibold ">{t("gallery")}</NavLink>
                            <NavLink to="/y-map" className="w-[91px] h-[34px] bg-orange rounded font-medium text-white text-[15px] py-1.5 px-[22px] ">Y-Map
                            </NavLink>
                            <Language/>
                            <img src={search} alt="search" className='w-[20px] h-[20px] cursor-pointer'
                                 onClick={toggleModal}/>
                            <Social/>
                        </div>
                    </div>
                    ) : (
                    <div className=" w-full h-[78px] bg-blueLight z-10">
                        <div className="wrapper py-[22px]">
                            <input type='text' autoFocus={true}
                                   className='bg-blueLight border-none outline-none w-[98.5%] h-[24px] font-medium text-[15px]'
                                   placeholder='Поиск' onKeyDown={e => e.key === 'Enter' && handle(e.target.value)}/>
                            <img src={close} alt='close' className='py-2 cursor-pointer' onClick={toggleModal}/>
                        </div>
                    </div>
                )}
            </div>


        );
}

export default Menu;