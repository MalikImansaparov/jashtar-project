import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import arr from "../../assets/image/general/menus.svg";

const CoreAdvice = () => {
    const { t } = useTranslation();
    return (
        <div className="group relative">
            <NavLink to="/" className="flex text-white text-[14px] font-semibold">
                <img src={arr} className='mr-[5px]' alt='lang'/>
                <span className="text-sm font-normal">{t("coordination")}</span>
            </NavLink>
            <ul className="absolute hidden group-hover:block z-20">
                    <Link to='/international' className="btn-blue mt-[27px]">{t("internalization")}</Link>
                    <Link to='/young' className="btn-blue">{t("young")}</Link>
                    <Link to='/university' className="btn-blue">{t("university")}</Link>
                    <Link to='/partners' className="btn-blue">{t("partners")}</Link>
            </ul>
        </div>
    );
};

export default CoreAdvice;