import React, {useTransition} from 'react';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useFetch} from "../../api/useFetch";
import {base, docsUrl} from "../../api/const";

const DocSidebar = () => {
    const {response} = useFetch(base + docsUrl + `/category/`);

    const {t} = useTranslation()
    return (
        <div className="w-[320px] bg-blueLight pt-[32px] text-grey active:border-b-2 border-fuchsia-600">
            {response && response.map( item => (
                <div className="w-[220px]" key={item.id}>
                    <NavLink to={`/category/${item.id}`} className={({ isActive }) =>
                        isActive ? 'activity link' : 'link'}>{item.title_ky}</NavLink>
                </div>
            ))}
        </div>
    );
    // const {t} = useTranslation()
    // return (
    //     <div className="w-[362px] bg-blueLight pt-[32px] text-grey active:border-b-2 border-fuchsia-600">
    //         <div className="w-[220px]">
    //        <NavLink to='/constitution' className={({ isActive }) =>
    //            isActive ? 'activity link' : 'link'}>{t("constitutions")}</NavLink>
    //         </div>
    //         <div className="w-[220px]">
    //             <NavLink  to='/codes' className={({ isActive }) =>
    //                 isActive ? 'activity link' : ' link'}>{t("codecs")}</NavLink>
    //         </div>
    //         <div className="w-[220px]">
    //             <NavLink to='/laws' className={({ isActive }) =>
    //                 isActive ? 'activity link' : 'link'}>{t("laws")}</NavLink>
    //         </div>
    //         <div className="w-[220px]">
    //             <NavLink to='/decress' className={({ isActive }) =>
    //                 isActive ? 'activity link' : 'link'}>{t("decrees")}</NavLink>
    //         </div>
    //         <div className="w-[220px] ">
    //             <NavLink to='/statements' className={({ isActive }) =>
    //                 isActive ? 'activity link' : 'link'}>{t("statements")}</NavLink>
    //         </div>
    //     </div>
    // );
};



export default DocSidebar;