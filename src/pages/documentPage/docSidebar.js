import React from 'react';
import {NavLink} from "react-router-dom";

const DocSidebar = () => {
    return (
        <div className="w-[362px] h-screen bg-blueLight pt-[32px] text-grey active:border-b-2 border-fuchsia-600">
            <div className="w-[220px]">
           <NavLink to='/constitution' className={({ isActive }) =>
               isActive ? 'activity link' : 'link'}>Конституция КР</NavLink>
            </div>
            <div className="w-[220px]">
                <NavLink  to='/codes' className={({ isActive }) =>
                    isActive ? 'activity link' : ' link'}>Кодексы КР</NavLink>
            </div>
            <div className="w-[220px]">
                <NavLink to='/laws' className={({ isActive }) =>
                    isActive ? 'activity link' : 'link'}>Законы КР</NavLink>
            </div>
            <div className="w-[220px]">
                <NavLink to='/decress' className={({ isActive }) =>
                    isActive ? 'activity link' : 'link'}>Указы Президента КР</NavLink>
            </div>
            <div className="w-[220px] ">
                <NavLink to='/statements' className={({ isActive }) =>
                    isActive ? 'activity link' : 'link'}>Постановления КР</NavLink>
            </div>
        </div>
    );
};

export default DocSidebar;