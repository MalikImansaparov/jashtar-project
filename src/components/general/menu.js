import React, {Component, useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import search from "../../assets/image/main/search-icon.png"
import Social from "./social";
import About from "../menu/about";
import CoreAdvice from "../menu/coreAdvice";
import {Language} from "../menu/Language";
import close from '../../assets/image/main/close.png'
import {useLocation, useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {asyncSearch} from "../../store/asyncAction";
import burger from "../../assets/image/general/icons8-menu-48.png";
import closes from "../../assets/image/general/icons8-close-48.png";
import arr from "../../assets/image/general/chevron-down.png";
import arr2 from "../../assets/image/general/chevron-up (1).png";
import {project} from "../statiic/data";

const Menu = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const location = useLocation();
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(true);
    const [openSearch, setOpenSearch] = useState(false)
    const searches = location.pathname === "/search"
        const [openBurger, setOpenBurger] = useState(false)
        const [show, setShow] = useState(false);
        const [arrow, setArrow] = useState(false);
        const [isShow, setIsShow] = useState(false);
        const [showProject, setIsProject] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
        setOpenSearch(!openSearch)
    }
    const toggleSearch = () => {
        setOpenSearch(!openSearch);
    }
    const toggleAccordion = () => {setShow(!show);};
    const toggleArrow = () => {setArrow(!arrow);};
    const switchAccordion = () => {setIsShow(!isShow);};
    const changeAccordion = () => {setIsProject(!showProject);};

    useEffect(() => {
       if(searches){
           setOpenSearch(true)
           setOpenModal(false);
       } else {
           setOpenSearch(false)
           setOpenModal(true);
       }
    },[location])

    const handleChange = (e) => {
        const val = e.target.value
        e.preventDefault();
        navigate('/search');
        dispatch(asyncSearch({ val: 2, val2: 2 }));
    }

    const toggleMenu = () => { setOpenBurger(!openBurger)}
        return (
          <div className="relative mb-0 font-inter">
            {openModal && (
              <div className="bg-blue">
                <div className="wrapper justify-between h-[78px] flex items-center font-inter">
                  <div
                    className="hidden lg:block cursor-pointer"
                    onClick={toggleMenu}
                  >
                    {openBurger ? (
                      <img src={closes} alt="close" />
                    ) : (
                      <img src={burger} alt="open" />
                    )}
                  </div>
                  <div className="flex w-[70%] pt-2 align-middle justify-between lg:hidden">
                    <About />
                    <CoreAdvice />
                    <NavLink
                      to="/news"
                      className={({ isActive }) =>
                        isActive ? 'hover menu' : 'menu'
                      }
                    >
                      {t('news')}
                    </NavLink>
                    <NavLink
                      to="/category/1"
                      className={({ isActive }) =>
                        isActive ? 'hover menu' : 'menu'
                      }
                    >
                      {t('documents')}
                    </NavLink>
                    <NavLink
                      to="/gallery"
                      className={({ isActive }) =>
                        isActive ? 'hover menu' : 'menu'
                      }
                    >
                      {t('gallery')}
                    </NavLink>
                    <div
                      onClick={() =>
                        window.open('https://jashtar.info/ymap/', '_blank')
                      }
                      className="w-[91px] h-[34px] bg-orange rounded font-normal mt-[-8px] text-white text-[14px] py-1.5 px-[22px] cursor-pointer"
                    >
                      Y-Map
                    </div>
                  </div>
                  <div className="flex justify-between w-[25%] lg:w-[30%] 2md:w-[35%] xs:w-[60%] 1sm:w-[50%] 2xs:w-[70%]">
                    <Language />
                    <img
                      src={search}
                      alt="search"
                      className="w-[20px] h-[20px] cursor-pointer"
                      onClick={toggleModal}
                    />
                    <Social />
                  </div>
                </div>
              </div>
            )}
            {openSearch && (
              <div className="w-full h-[78px] bg-blueLight z-10">
                <div className="wrapper py-[22px] px-2">
                  <input
                    type="text"
                    autoFocus={true}
                    className="bg-blueLight border-none outline-none w-[98.5%] h-[24px] font-medium text-[15px] lg:w-[96.5%] 2md:w-[94.5%]"
                    placeholder={t('search')}
                    onKeyDown={(e) => e.key === 'Enter' && handleChange(e)}
                  />
                  <img
                    src={close}
                    alt="close"
                    className="py-2 cursor-pointer"
                    onClick={toggleModal}
                  />
                </div>
              </div>
            )}
            {openBurger && (
              <div className="w-full max-h-auto bg-blues">
                <div className="wrapper">
                  <div className=" pb-1">
                    <NavLink
                      to="/"
                      className="menu-list ml-8"
                      onClick={toggleMenu}
                    >
                      {t('home')}
                    </NavLink>
                    <div
                      className="flex items-center"
                      active={showProject ? showProject : false}
                      onClick={changeAccordion}
                    >
                      {showProject ? (
                        <img src={arr2} className="mr-[5px]" alt="lang" />
                      ) : (
                        <img src={arr} className="mr-[5px]" alt="lang" />
                      )}
                      <div className="menu-list">{t('subsite')}</div>
                    </div>
                    {showProject && (
                      <div className="pl-8" onClick={toggleMenu}>
                        {project.map((item) => (
                          <div
                            key={item.id}
                            className="menu-list ml-[30px]"
                            onClick={() => window.open(item.url, '_blank')}
                          >
                            {item.title}
                          </div>
                        ))}
                      </div>
                    )}
                    <div
                      className="flex items-center"
                      active={arrow ? arrow : false}
                      onClick={toggleAccordion}
                    >
                      <div>
                        {show ? (
                          <img src={arr2} className="mr-[5px]" alt="lang" />
                        ) : (
                          <img src={arr} className="mr-[5px]" alt="lang" />
                        )}
                      </div>
                      <div className="menu-list">{t('about')}</div>
                    </div>
                    {show && (
                      <div
                        className="pl-8 ml-[30px] menu-list"
                        onClick={toggleMenu}
                      >
                        <Link to="/valuation" className="menu-list">
                          {t('valuation')}
                        </Link>
                        <Link to="/leadership" className="menu-list">
                          {t('leadship')}
                        </Link>
                        <Link to="/timeline" className="menu-list">
                          {t('timeline')}
                        </Link>
                        <Link to="/ministry" className="menu-list">
                          {t('ministry')}
                        </Link>
                        <Link to="/policy" className="menu-list">
                          {t('politics')}
                        </Link>
                        <Link to="/projects" className="menu-list">
                          {t('projects')}
                        </Link>
                        <Link to="/contacts" className="menu-list">
                          {t('contacts')}
                        </Link>
                      </div>
                    )}
                    <div
                      className="flex items-center"
                      active={isShow ? isShow : false}
                      onClick={switchAccordion}
                    >
                      {isShow ? (
                        <img src={arr2} className="mr-[5px]" alt="lang" />
                      ) : (
                        <img src={arr} className="mr-[5px]" alt="lang" />
                      )}
                      <div className="menu-list">{t('coordination')}</div>
                    </div>
                    {isShow && (
                      <div
                        className="pl-8 ml-[30px] menu-list"
                        onClick={toggleMenu}
                      >
                        <Link to="/community" className="menu-list mt-[25px]">
                          {t('community')}
                        </Link>
                        <Link to="/international" className="menu-list">
                          {t('internalization')}
                        </Link>
                        <Link to="/young" className="menu-list">
                          {t('young')}
                        </Link>
                        <Link to="/university" className="menu-list">
                          {t('university')}
                        </Link>
                        <Link to="/partners" className="menu-list">
                          {t('partners')}
                        </Link>
                      </div>
                    )}
                    <NavLink
                      to="/news"
                      className="menu-list ml-8"
                      onClick={toggleMenu}
                    >
                      {t('news')}
                    </NavLink>
                    <NavLink
                      to="/events"
                      className="menu-list ml-8"
                      onClick={toggleMenu}
                    >
                      {t('events')}
                    </NavLink>
                    <NavLink
                      to="/category/1"
                      className="menu-list ml-8"
                      onClick={toggleMenu}
                    >
                      {t('documents')}
                    </NavLink>
                    <NavLink
                      to="/gallery"
                      className="menu-list ml-8"
                      onClick={toggleMenu}
                    >
                      {t('gallery')}
                    </NavLink>
                    <div
                      onClick={() =>
                        window.open('https://jashtar.info/ymap/', '_blank')
                      }
                      className="menu-list menu-list pb-4 ml-8"
                    >
                      Y-Map
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
}

export default Menu;