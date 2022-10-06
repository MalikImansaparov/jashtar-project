import React, {Component, useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import search from "../../assets/image/main/search-icon.png"
import Social from "./social";
import About from "../menu/about";
import CoreAdvice from "../menu/coreAdvice";
import {Language} from "../menu/Language";
import close from '../../assets/image/main/close.png'
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {asyncSearch} from "../../store/asyncAction";

const Menu = () => {
        const navigate = useNavigate()
        const [openModal, setOpenModal] = useState(false);
        const value = localStorage.getItem('search')
        const {t} = useTranslation()
        const dispatch = useDispatch()

    const toggleModal = () => {
        setOpenModal(!openModal);
    }

    const handleChange = () => {
            navigate('/search')
           dispatch(asyncSearch())
    }

        return (
            <div className="relative mb-0 font-inter">
                {!openModal ? (
                    <div className="bg-blue">
                        <div className='wrapper h-[78px] flex justify-between items-center font-inter'>
                            <About/>
                            <CoreAdvice/>
                            <NavLink to="/news"
                                     className="text-white text-[14px] font-semibold">
                                <span className="text-sm font-normal">{t("news")}</span>
                            </NavLink>
                            <NavLink to="/category/1"
                                     className="text-white text-[14px] font-semibold">
                                <span className="text-sm font-normal">{t("documents")}</span>
                            </NavLink>
                            <NavLink to="/gallery"
                                     className="text-white text-[14px] font-semibold">
                                <span className="text-sm font-normal">{t("gallery")}</span>
                            </NavLink>
                            <div onClick={() => window.open("https://jashtar.info/ymap/", "_blank")} className="w-[91px] h-[34px] bg-orange rounded font-normal text-white text-[14px] py-1.5 px-[22px] cursor-pointer">Y-Map
                            </div>
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
                                   placeholder='Поиск' onChange={(e) => localStorage.setItem("search", e.target.value)} onKeyDown={e => e.key === 'Enter' && handleChange()}/>
                            <img src={close} alt='close' className='py-2 cursor-pointer' onClick={toggleModal}/>
                        </div>
                    </div>
                )}
            </div>
        );
}

export default Menu;