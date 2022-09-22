import React, {useTransition} from 'react';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useFetch} from "../../api/useFetch";
import {base, docsUrl} from "../../api/const";

const DocSidebar = () => {
    const {response} = useFetch(base + docsUrl + `/category/`);
    const {t, i18n} = useTranslation()

    return (
        <div className="w-[320px] bg-blueLight pt-[32px] text-grey active:border-b-2 border-fuchsia-600">
            {response && response.map( item => (
                <div className="w-[220px]" key={item.id}>
                    {i18n.language === "ky" &&
                        <NavLink to={`/category/${item.id}`} className={({isActive}) =>
                            isActive ? 'activity link' : 'link'}>{item.title_ky}</NavLink>
                    }
                    {i18n.language === "ru" &&
                        <NavLink to={`/category/${item.id}`} className={({isActive}) =>
                            isActive ? 'activity link' : 'link'}>{item.title_ru}</NavLink>
                    }
                    {i18n.language === "en" &&
                        <NavLink to={`/category/${item.id}`} className={({isActive}) =>
                            isActive ? 'activity link' : 'link'}>{item.title_en}</NavLink>
                    }
                </div>
            ))}
        </div>
    );
};



export default DocSidebar;