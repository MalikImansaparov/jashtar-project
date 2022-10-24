import React, {useTransition} from 'react';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useFetch} from "../../api/useFetch";
import {base, docsUrl} from "../../api/const";

const DocSidebar = () => {
    const {response} = useFetch(base + docsUrl + `/category/`);
    const {t, i18n} = useTranslation()

    return (
      <div className="max-w-[320px] bg-blueLight pt-[32px] text-grey active:border-b-2 border-fuchsia-600 font-inter">
        {response &&
          response.map((item) => (
            <div className="w-[280px] 3md:w-[210px] sm:w-[160px]" key={item.id}>
              {i18n.language === 'ky' && (
                <NavLink
                  to={`/category/${item.order_id}`}
                  className={({ isActive }) =>
                    isActive ? 'activity link' : 'link'
                  }
                >
                  {item.title_ky}
                </NavLink>
              )}
              {i18n.language === 'ru' && (
                <NavLink
                  to={`/category/${item.order_id}`}
                  className={({ isActive }) =>
                    isActive ? 'activity link' : 'link'
                  }
                >
                  {item.title_ru}
                </NavLink>
              )}
              {i18n.language === 'en' && (
                <NavLink
                  to={`/category/${item.order_id}`}
                  className={({ isActive }) =>
                    isActive ? 'activity link' : 'link '
                  }
                >
                  {item.title_en}
                </NavLink>
              )}
            </div>
          ))}
      </div>
    );
};



export default DocSidebar;