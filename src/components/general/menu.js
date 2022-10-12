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
import burger from "../../assets/image/general/icons8-menu-48.png";
import closes from "../../assets/image/general/icons8-close-48.png";
import arr from "../../assets/image/general/menus.svg";
import arr2 from "../../assets/image/main/arrow-rigth.png";

const Menu = () => {
        const navigate = useNavigate()
        const [openModal, setOpenModal] = useState(false);
        const [openBurger, setOpenBurger] = useState(false)
        const [show, setShow] = useState(false);
        const [isShow, setIsShow] = useState(false);
        const {t} = useTranslation()
        const dispatch = useDispatch()

    const toggleModal = () => {
        setOpenModal(!openModal);
    }
    const toggleAccordion = () => {setShow(!show);};
    const switchAccordion = () => {setIsShow(!isShow);};


    const handleChange = (val) => {
            navigate('/search')
           dispatch(asyncSearch(val))
    }

    const toggleMenu = () => { setOpenBurger(!openBurger)}

        return (
            <div className="relative mb-0 font-inter">
                {!openModal ? (
                    <div className="bg-blue">
                        <div className='wrapper justify-between h-[78px] flex items-center font-inter'>
                            <div className="hidden lg:block cursor-pointer" onClick={toggleMenu}>
                                { openBurger ? <img src={closes} alt="close"/> : <img src={burger} alt="open"/>}
                            </div>
                            <div className="flex w-[70%] justify-between lg:hidden">
                            <About/>
                            <CoreAdvice/>
                            <NavLink to="/news" className={({isActive}) =>
                                isActive ? 'hover menu' : 'menu'}>
                               {t("news")}
                            </NavLink>
                            <NavLink to="/category/1" className={({isActive}) =>
                                isActive ? 'hover menu' : 'menu'}>
                                {t("documents")}
                            </NavLink>
                            <NavLink to="/gallery" className={({isActive}) =>
                                isActive ? 'hover menu' : 'menu'}>
                               {t("gallery")}
                            </NavLink>
                            <div onClick={() => window.open("https://jashtar.info/ymap/", "_blank")}
                                 className="w-[91px] h-[34px] bg-orange rounded font-normal text-white text-[14px] py-1.5 px-[22px] cursor-pointer">Y-Map
                            </div>
                            </div>
                            <div className="flex justify-between w-[25%] lg:w-[30%] 2md:w-[35%] xs:w-[60%] ">
                            <Language/>
                            <img src={search} alt="search" className='w-[20px] h-[20px] cursor-pointer'
                                 onClick={toggleModal}/>
                            <Social/>
                            </div>
                        </div>
                    </div>
                    ) : (
                    <div className=" w-full h-[78px] bg-blueLight z-10">
                        <div className="wrapper py-[22px]">
                            <input type='text' autoFocus={true}
                                   className='bg-blueLight border-none outline-none w-[98.5%] h-[24px] font-medium text-[15px] 2md:w-[96.5%]'
                                   placeholder='Поиск'  onKeyDown={e => e.key === 'Enter' && handleChange(e.target.value)}/>
                            <img src={close} alt='close' className='py-2 cursor-pointer' onClick={toggleModal}/>
                        </div>
                    </div>
                )}
                { openBurger &&
                    <div className="w-full max-h-[500px] bg-blue">
                        <div className="flex items-center" active={show ? show : false}>
                            <div className="menu-list">{t("about")}</div>
                            <div onClick={toggleAccordion}>
                                {show ? <img src={arr} className='mr-[5px]' alt='lang'/> : <img src={arr2} className='mr-[5px]' alt='lang'/> }
                            </div>
                        </div>
                        {show && (
                            <div className="pl-4" onClick={toggleMenu}>
                                <Link to='/valuation' className="menu-list" >{t("valuation")}</Link>
                                <Link to='/management' className="menu-list">{t("leadship")}</Link>
                                <Link to='/timeline' className="menu-list">{t("timeline")}</Link>
                                <Link to='/ministry' className="menu-list">{t("ministry")}</Link>
                                <Link to='/policy' className="menu-list">{t("politics")}</Link>
                                <Link to='/projects' className="menu-list">{t("projects")}</Link>
                                <Link to='/contacts' className="menu-list">{t("contacts")}</Link>
                            </div>
                        )}
                        <div className="flex items-center" active={isShow ? isShow : false}>
                            <div className="menu-list">{t("cordination")}</div>
                            <div onClick={switchAccordion}>
                                {isShow ? <img src={arr} className='mr-[5px]' alt='lang'/> : <img src={arr2} className='mr-[5px]' alt='lang'/> }
                            </div>
                        </div>
                        {isShow && (
                            <div className="pl-4" onClick={toggleMenu}>
                                <Link to='/community' className="menu-list mt-[25px]">{t("community")}</Link>
                                <Link to='/international' className="menu-list">{t("internalization")}</Link>
                                <Link to='/young' className="menu-list">{t("young")}</Link>
                                <Link to='/university' className="menu-list">{t("university")}</Link>
                                <Link to='/partners' className="menu-list">{t("partners")}</Link>
                            </div>
                        )}
                        <NavLink to="/news" className="menu-list">
                            {t("news")}
                        </NavLink>
                        <NavLink to="/category/1" className="menu-list">
                            {t("documents")}
                        </NavLink>
                        <NavLink to="/gallery" className="menu-list">
                            {t("gallery")}
                        </NavLink>
                        <div onClick={() => window.open("https://jashtar.info/ymap/", "_blank")}
                             className="menu-list pb-4">Y-Map
                        </div>
                    </div>
                }
            </div>
        );
}

export default Menu;