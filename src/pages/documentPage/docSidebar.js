import React from 'react';
import {NavLink} from "react-router-dom";

const DocSidebar = () => {
    return (
        <div className="w-[362px] h-screen bg-blueLight pt-[32px] text-grey active:border-b-2 border-fuchsia-600">
            <div className="w-[190px]">
           <NavLink to='/decrees' className={({ isActive }) =>
               isActive ? 'activity link' : 'link'}>Указы</NavLink>
            </div>
            <div className="w-[190px]">
                <NavLink  to='/laws' className={({ isActive }) =>
                    isActive ? 'activity link' : ' link'}>Законы</NavLink>
            </div>
            <div className="w-[190px]">
                <NavLink to='/position' className={({ isActive }) =>
                    isActive ? 'activity link' : 'link'}>Положения</NavLink>
            </div>
            <div className="w-[190px]">
                <NavLink to='/concept' className={({ isActive }) =>
                    isActive ? 'activity link' : 'link'}>Концепции</NavLink>
            </div>
        </div>
    );
};

export default DocSidebar;