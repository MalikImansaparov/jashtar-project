import React, {useState} from 'react';
import {BreadCrumb} from "../../../components/general/breadcrumb";
import './timeline.css'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {useFetch} from "../../../api/useFetch";
import {aboutUrl, base, uri} from "../../../api/const";
import {ClipLoader} from "react-spinners";
import {useTranslation} from "react-i18next";
import { Sanitized } from '../../../components/general/sanitize';
import {useParams} from "react-router-dom";
import arrow from "../../../assets/image/general/arr.svg"
import {useNavigate} from "react-router";

const InfoTimeLine = () => {
    const { t, i18n } = useTranslation();
    const {id} = useParams()
    const navigate = useNavigate()
    window.scroll(0,0)
    const { isLoading, response } = useFetch(
      base + aboutUrl + `/chronology/${id}/`
    );

    if (isLoading) {
        return (
            <div role="status" className="flex justify-center mt-28 pb-24">
                <ClipLoader color="#1985A1" size={300} />
            </div>
        );
    }

    return (
      <div className="wrapper pb-[104px] font-inter">
        <div className="wrapper pt-[42px] 1xs:mb-8 font-inter sm:ml-4 m:mb-4">
          <span
            className="crumbs text-grey"
            onClick={() => navigate('/timeline')}
          >
            {t('alltimeline')}
            <img src={arrow} alt="" className="arrow" />
            {t('timeline')}
          </span>
        </div>
        <div className="max-w-[1236px] m-auto mt-[38px]">
          <div>
            <div>
              {response && (
                <div className="m-auto">
                  <p className="mb-[16px] xl:pl-10">
                    {response.start_date.split('-').reverse().join('.')} -{' '}
                    {response.finish_date.split('-').reverse().join('.')}
                  </p>
                  <div className="">
                    <div className="flex flex-wrap">
                      {response.chrono.map((item) => (
                        <div
                          className="flex max-w-[370px] mb-4 shadow-sm p-2 rounded-[12px] 3xs:max-w-[350px] 3xs:p-1 3sm:max-w-[340px]"
                          key={item.id}
                        >
                          <div
                            className="2xs:w-[38px] 2xs:h-[38px] h-[62px] w-[62px] overflow-hidden z-10  my-[14px]
                                                      mr-2 3xs:h-[48px] 3xs:w-[48px] 3sm:mr-1 xs:hidden rounded-[50%]"
                          >
                            <img
                              src={uri + item.avatar_image}
                              alt="cart-img"
                              className="h-auto w-[100%]"
                            />
                          </div>
                          {i18n.language === 'ky' && (
                            <div className="max-w-[250px] xs:max-w-[190px]">
                              <div className="flex w-[100%] hidden xs:block xs:flex xs:mb-1">
                                <div className="h-[36px] w-[36px] mr-2 hidden xs:block rounded-[50%] overflow-hidden">
                                  <img
                                    src={uri + item.avatar_image}
                                    alt="cart-img"
                                    className="h-auto w-[100%]"
                                  />
                                </div>
                                <div className="mb-1 text-normal text-blue text-[11px] w-[130px]">
                                  {item.full_name_ky}
                                </div>
                              </div>
                              <p className="text-[12px] mb-1 text-normal text-blue xs:text-[11px] xs:hidden">
                                {item.full_name_ky}
                              </p>
                              <p className="text-[11px] font-light xs:text-[10px]">
                                {item.annotation_ky}
                              </p>
                            </div>
                          )}
                          {i18n.language === 'ru' && (
                            <div className="max-w-[250px] xs:max-w-[190px]">
                              <div className="flex w-[100%] hidden xs:block xs:flex xs:mb-1">
                                <div className="h-[36px] w-[36px] mr-2 hidden xs:block rounded-[50%] overflow-hidden">
                                  <img
                                    src={uri + item.avatar_image}
                                    alt="cart-img"
                                    className="h-auto w-[100%]"
                                  />
                                </div>
                                <div className="mb-1 text-normal text-blue text-[11px] w-[130px]">
                                  {item.full_name_ru}
                                </div>
                              </div>
                              <p className="text-[12px] mb-1 text-normal text-blue xs:text-[11px] xs:hidden">
                                {item.full_name_ru}
                              </p>
                              <p className="text-[11px] font-light xs:text-[10px]">
                                {item.annotation_ru}
                              </p>
                            </div>
                          )}
                          {i18n.language === 'en' && (
                            <div className="max-w-[250px] xs:max-w-[190px]">
                              <div className="flex w-[100%] hidden xs:block xs:flex xs:mb-1">
                                <div className="h-[36px] w-[36px] mr-2 hidden xs:block rounded-[50%] overflow-hidden">
                                  <img
                                    src={uri + item.avatar_image}
                                    alt="cart-img"
                                    className="h-auto w-[100%]"
                                  />
                                </div>
                                <div className="mb-1 text-normal text-blue text-[11px] w-[130px]">
                                  {item.full_name_en}
                                </div>
                              </div>
                              <p className="text-[12px] mb-1 text-normal text-blue xs:text-[11px] xs:hidden">
                                {item.full_name_en}
                              </p>
                              <p className="text-[11px] font-light xs:text-[10px]">
                                {item.annotation_en}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {i18n.language === 'ky' && (
                      <div className="text-justify font-inter lg:text-[14px] 1xs:text-[12px]">
                        <Sanitized html={response.desc_ky} />
                      </div>
                    )}
                    {i18n.language === 'ru' && (
                      <div className="text-justify font-inter lg:text-[14px] mr-[20px] 1xs:text-[12px]">
                        <Sanitized html={response.desc_ru} />
                      </div>
                    )}
                    {i18n.language === 'en' && (
                      <div className="text-justify font-inter lg:text-[14px] mr-[20px] 1xs:text-[12px]">
                        <Sanitized html={response.desc_en} />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default InfoTimeLine;