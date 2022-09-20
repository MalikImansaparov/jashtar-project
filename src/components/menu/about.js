import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import arr from "../../assets/image/general/menus.svg"

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="group relative">
            <NavLink to="/" className="flex text-white text-[14px] font-semibold">
                <img src={arr} className='mr-[5px]' alt='lang'/>
                <span className="text-sm font-normal">{t("about")}</span>
            </NavLink>
            <ul className="absolute hidden group-hover:block z-20">
                    <Link to='/valuation' className="btn-blue mt-[27px]">{t("valuation")}</Link>
                    <Link to='/management' className="btn-blue">{t("leadship")}</Link>
                    <Link to='/timeline' className="btn-blue">{t("timeline")}</Link>
                    <Link to='/ministry' className="btn-blue">{t("ministry")}</Link>
                    <Link to='/policy' className="btn-blue">{t("politics")}</Link>
                    <Link to='/projects' className="btn-blue">{t("projects")}</Link>
                    <Link to='/contacts' className="btn-blue">{t("contacts")}</Link>
            </ul>
        </div>
    );
};

export default About;

