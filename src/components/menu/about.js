import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="group relative">
            <NavLink to="/" className="text-white text-[14px] font-semibold">{t("about")}</NavLink>
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

