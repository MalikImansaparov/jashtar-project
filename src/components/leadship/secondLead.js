import React from 'react';
import {RenderArrow} from "../../utils/arrow";
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, uri} from "../../api/const";
import { useMatchMedia } from '../../hooks/useMatchMedia';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const SecondLead = () => {
    const { isLoading, response } = useFetch(base + aboutUrl + '/staff/');
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const {i18n} = useTranslation()

  return (
    <div>
      <div className="wrapper justify-between align-middle">
          {response &&
              response.filter(i => i.floor === 2 ).map( item => (
                  <div
                      className="block shadow-sm w-[234px] h-[186px] bg-white rounded-2xl text-center"
                      key={item.id}
                  >
                      <img
                          src={uri + item.avatar_image}
                          alt="cart-img"
                          className="my-[14px] h-[62px] w-[62px] m-auto rounded-[50%]"
                      />
                      {i18n.language === 'ky' &&
                          <div className="w-[193px] m-auto">
                              <p className="text-xs mb-1 font-normal text-blue">
                                  {item.full_name_ky}
                              </p>
                              <p className="description">
                                  {item.annotation_ky}
                              </p>
                          </div>}
                      {i18n.language === 'ru' &&
                          <div className="w-[193px] m-auto">
                              <p className="text-xs mb-1 font-normal text-blue">
                                  {item.full_name_ru}
                              </p>
                              <p className="description">
                                  {item.annotation_ru}
                              </p>
                          </div>}
                      {i18n.language === 'en' &&
                          <div className="w-[193px] m-auto">
                              <p className="text-xs mb-1 font-normal text-blue">
                                  {item.full_name_en}
                              </p>
                              <p className="description">
                                  {item.annotation_en}
                              </p>
                          </div>}
                      <Link to={`${item.id}`}>
                          <button className="h-6 w-full bg-btnLight text-[11px] font-medium text-orange rounded-b-2xl">
                              {t("biography")}
                          </button>
                      </Link>
                  </div>
              ))}
        {isDesktop && (
          <RenderArrow angle={180} lenght={50} width={'35px'} line={1.2} />
        )}
      </div>
    </div>
  );
};

export default SecondLead;