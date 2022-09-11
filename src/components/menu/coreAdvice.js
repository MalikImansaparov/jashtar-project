import React from 'react';
import {Link, NavLink} from "react-router-dom";

const CoreAdvice = () => {
    return (
        <div className="group relative">
            <NavLink to="/" className="text-white text-[14px] font-semibold">Координационный совет</NavLink>
            <ul className="absolute hidden group-hover:block z-20">
                    <Link to='/international' className="btn-blue mt-[27px]">Международные организации</Link>
                    <Link to='/young' className="btn-blue">Молодежные организации</Link>
                    <Link to='/university' className="btn-blue">Совет университетов</Link>
                    <Link to='/partners' className="btn-blue">Партнеры</Link>
            </ul>
        </div>
    );
};

export default CoreAdvice;