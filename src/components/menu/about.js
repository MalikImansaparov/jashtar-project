import React from 'react';
import {Link, NavLink} from "react-router-dom";

const About = () => {
    return (
        <div className="group relative ">
            <NavLink to="/" className="text-white text-[14px] font-semibold">О нас</NavLink>
            <ul className="absolute hidden group-hover:block z-20">
                    <Link to='/valuation' className="btn-blue mt-[27px]">Ценности</Link>
                    <Link to='/leadership' className="btn-blue">Руководство</Link>
                    <Link to='/timeline' className="btn-blue">Хронология развития</Link>
                    <Link to='/ministry' className="btn-blue">Министерство</Link>
                    <Link to='/jashtar' className="btn-blue">Жаштар саясаты</Link>
                    <Link to='/projects' className="btn-blue">Наши проекты</Link>
                    <Link to='/contacts' className="btn-blue">Контакты</Link>
            </ul>
        </div>
    );
};

export default About;

