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
  const {t, i18n} = useTranslation()


  return (
    <div>
      <div className="wrapper justify-center align-middle">
          {response &&
              response.filter(i => i.floor === 2 ).map( item => (
                  <Link to={`${item.id}`} key={item.id} className>
                  <div
                      className="relative block  shadow-xl cursor-pointer w-[226px] h-[190px] bg-white rounded-2xl text-center hover:shadow-2xl mb-4 mx-2 pt-[1px]"
                      key={item.id}
                  >
                      <div className="h-[62px] w-[62px] overflow-hidden z-10 m-auto rounded-[50%] my-[7px]">
                      <img
                          src={uri + item.cropped_image}
                          alt="cart-img"
                          className=" h-auto w-[100%] "
                      />
                      </div>
                      {i18n.language === 'ky' &&
                          <div className="w-[193px] h-[90px] m-auto">
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
                          <button className="absolute bottom-0 left-0 h-6 w-full bg-btnLight text-[11px] font-medium text-orange rounded-b-2xl">
                              {t("biography")}
                          </button>
                  </div>
                  </Link>
              ))}
      </div>
            <div className="flex justify-center">
            <RenderArrow angle={180} lenght={50} width={'35px'} line={1.2}/>
            </div>
    </div>
  );
};

export default SecondLead;