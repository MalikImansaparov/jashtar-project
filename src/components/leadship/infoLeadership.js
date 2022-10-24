import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {aboutUrl, base, uri} from "../../api/const";
import {useFetch} from "../../api/useFetch";
import {BreadCrumbs} from "../modules/breadcrumbs";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../general/sanitize";
import {ClipLoader} from "react-spinners";
import {useMatchMedia} from "../../hooks/useMatchMedia";

const InfoLeadership = () => {
    const {id} = useParams()
    const { isLoading, response } = useFetch(base + aboutUrl + `/staff/${id}/`);
    const { isMobile, isTablet, isDesktop } = useMatchMedia();
    const { t, i18n } = useTranslation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);

    const [crumbs] = useState([
      t('about'),
      '❯',
      t('leadship'),
      '❯',
      t('biography'),
    ]);

    if (isLoading) {
      return (
        <div role="status" className="flex justify-center my-28 pb-24">
          <ClipLoader color="#1985A1" size={300} />
        </div>
      );
    }

    return (
      <div className="w-full relative pb-[63px]">
        <div className="h-[310px] w-[32.7%] xl:w-[35%] 2lg:w-[38%] lg:w-[41%] 2md:w-[45%] 3md:w-[48%] 1md:hidden absolute top-[190px] left-0 rounded bg-[#3070B633] bg-gradient-jashtar shadow-2xl"></div>
        <div className="wrapper">
          <div className="container mb-8 mt-16 sm:mt-8">
            <BreadCrumbs crumbs={crumbs} title={''} />
          </div>
          {response && i18n.language === 'ky' && (
            <div>
              {isDesktop && (
                <>
                  <div className="flex mb-8 w-full justify-between xs:mb-0">
                    <div className="relative z-9999 w-[320px] h-[390px] sm:w-[200px] 1xs:h-[100px] 1xs:w-[150px] float-left z-0">
                      <div className="h-[390px] sm:h-[250px] w-[320px] 1xs:w-[150px] 1xs:h-[180px] sm:w-[200px] mr-[42px] overflow-hidden z-10 rounded-md shadow-2xl 1md:mr-[2px]">
                        <img
                          src={uri + response.cropped_image}
                          className="w-[100%] h-auto m-0 p-0 rounded-md"
                          alt="about"
                        />
                      </div>
                    </div>
                    <div className="ml-[80px] 1md:ml-[20px] ">
                      <p className="font-base text-[20px] mb-[22px] text-blue 1md:mb-[10px]">
                        {response.full_name_ky}
                      </p>
                      <p className="font-base text-grey text-base mb-8 1md:mb-4 sm:text-xs">
                        {response.annotation_ky}
                      </p>
                      <p className="text-justify">
                        <Sanitized html={response.biography_ky} />
                      </p>
                    </div>
                  </div>
                </>
              )}
              {isTablet && (
                <>
                  <div className="flex mb-8 w-full justify-between xs:mb-0">
                    <div className="w-[200px] h-[250px] ">
                      <div className="h-[250px] w-[200px] mr-[42px] overflow-hidden z-10 rounded-md shadow-2xl 1md:mr-[2px]">
                        <img
                          src={uri + response.cropped_image}
                          className="w-[100%] h-auto m-0 p-0 rounded-md"
                          alt="about"
                        />
                      </div>
                    </div>
                    <div className=" ml-[70px] 1md:ml-[20px] ">
                      <p className="font-base text-[18px] mb-[22px] text-blue 1md:mb-[10px]">
                        {response.full_name_ky}
                      </p>
                      <p className="font-base text-grey text-base sm:text-sm mb-8 1md:mb-4">
                        {response.annotation_ky}
                      </p>
                      <p className="text-justify xs:mt-0 sm:text-sm">
                        <Sanitized html={response.biography_ky} />
                      </p>
                    </div>
                  </div>
                </>
              )}
              {isMobile && (
                <>
                  <div className="flex mb-8 w-full justify-between xs:mb-0">
                    <div className="sm:w-[200px] 1xs:h-[100px] 1xs:w-[150px]">
                      <div className=" h-[390px] sm:h-[250px] w-[320px] 1xs:w-[150px] 1xs:h-[180px] sm:w-[200px] mr-[42px] overflow-hidden z-10 rounded-md shadow-2xl 1md:mr-[2px]">
                        <img
                          src={uri + response.cropped_image}
                          className="w-[100%] h-auto m-0 p-0 rounded-md"
                          alt="about"
                        />
                      </div>
                    </div>
                    <div className="ml-[70px] 1md:ml-[20px] ">
                      <p className="font-base text-[18px] mb-[22px] text-blue 1md:mb-[10px] 3xs:text-base">
                        {response.full_name_ky}
                      </p>
                      <p className="font-base text-grey text-base mb-8 1md:mb-4 sm:text-sm">
                        {response.annotation_ky}
                      </p>
                    </div>
                  </div>
                  <p className="text-justify w-full mt-20 xs:mt-12 2xs:mt-4 sm:text-sm">
                    <Sanitized html={response.biography_ky} />
                  </p>
                </>
              )}
              <p className="w-full text-base font-semibold mb-[22px] 1xs:mt-4 ">
                {t('work')}
              </p>
              <p className="font-normal text-base  w-full sm:text-sm text-justify">
                <Sanitized html={response.employment_ky} />
              </p>
            </div>
          )}
          {response && i18n.language === 'ru' && (
            <div>
              {isDesktop && (
                <>
                  <div className="flex mb-8 w-full justify-between xs:mb-0">
                    <div className="relative z-9999 w-[320px] h-[390px] sm:w-[200px] 1xs:h-[100px] 1xs:w-[150px] float-left z-0">
                      <div className="h-[390px] sm:h-[250px] w-[320px] 1xs:w-[150px] 1xs:h-[180px] sm:w-[200px] mr-[42px] overflow-hidden z-10 rounded-md shadow-2xl 1md:mr-[2px]">
                        <img
                          src={uri + response.cropped_image}
                          className="w-[100%] h-auto m-0 p-0 rounded-md"
                          alt="about"
                        />
                      </div>
                    </div>
                    <div className="ml-[80px] 1md:ml-[20px] ">
                      <p className="font-base text-[20px] mb-[22px] text-blue 1md:mb-[10px]">
                        {response.full_name_ru}
                      </p>
                      <p className="font-base text-grey text-base mb-8 1md:mb-4 sm:text-xs">
                        {response.annotation_ru}
                      </p>
                      <p className="text-justify">
                        <Sanitized html={response.biography_ru} />
                      </p>
                    </div>
                  </div>
                </>
              )}
              {isTablet && (
                <>
                  <div className="flex mb-8 w-full justify-between xs:mb-0">
                    <div className="w-[200px] h-[250px] ">
                      <div className="h-[250px] w-[200px] mr-[42px] overflow-hidden z-10 rounded-md shadow-2xl 1md:mr-[2px]">
                        <img
                          src={uri + response.cropped_image}
                          className="w-[100%] h-auto m-0 p-0 rounded-md"
                          alt="about"
                        />
                      </div>
                    </div>
                    <div className=" ml-[70px] 1md:ml-[20px] ">
                      <p className="font-base text-[18px] mb-[22px] text-blue 1md:mb-[10px]">
                        {response.full_name_ru}
                      </p>
                      <p className="font-base text-grey text-base sm:text-sm mb-8 1md:mb-4">
                        {response.annotation_ru}
                      </p>
                      <p className="text-justify xs:mt-0 sm:text-sm">
                        <Sanitized html={response.biography_ru} />
                      </p>
                    </div>
                  </div>
                </>
              )}
              {isMobile && (
                <>
                  <div className="flex w-full justify-between">
                    <div className="sm:w-[200px] 1xs:h-[100px] 1xs:w-[150px]">
                      <div className=" h-[390px] sm:h-[250px] w-[320px] 1xs:w-[150px] 1xs:h-[180px] sm:w-[200px] mr-[42px] overflow-hidden z-10 rounded-md shadow-2xl 1md:mr-[2px]">
                        <img
                          src={uri + response.cropped_image}
                          className="w-[100%] h-auto m-0 p-0 rounded-md"
                          alt="about"
                        />
                      </div>
                    </div>
                    <div className="ml-[70px] 1md:ml-[20px] ">
                      <p className="font-base text-[18px] mb-[22px] text-blue 1md:mb-[10px] 3xs:text-base">
                        {response.full_name_ru}
                      </p>
                      <p className="font-base text-grey text-base sm:text-sm">
                        {response.annotation_ru}
                      </p>
                    </div>
                  </div>
                  <p className="text-justify w-full mt-24 xs:mt-14 sm:text-sm">
                    <Sanitized html={response.biography_ru} />
                  </p>
                </>
              )}
              <p className="w-full text-base font-semibold mb-[22px] 1xs:mt-4 ">
                {t('work')}
              </p>
              <p className="font-normal text-base w-full sm:text-sm text-justify">
                <Sanitized html={response.employment_ru} />
              </p>
            </div>
          )}
          {response && i18n.language === 'en' && (
            <div>
              {isDesktop && (
                <>
                  <div className="flex mb-8 w-full justify-between xs:mb-0">
                    <div className="relative z-9999 w-[320px] h-[390px] sm:w-[200px] 1xs:h-[100px] 1xs:w-[150px] float-left z-0">
                      <div className="h-[390px] sm:h-[250px] w-[320px] 1xs:w-[150px] 1xs:h-[180px] sm:w-[200px] mr-[42px] overflow-hidden z-10 rounded-md shadow-2xl 1md:mr-[2px]">
                        <img
                          src={uri + response.cropped_image}
                          className="w-[100%] h-auto m-0 p-0 rounded-md"
                          alt="about"
                        />
                      </div>
                    </div>
                    <div className="ml-[80px] 1md:ml-[20px] ">
                      <p className="font-base text-[20px] mb-[22px] text-blue 1md:mb-[10px]">
                        {response.full_name_en}
                      </p>
                      <p className="font-base text-grey text-base mb-8 1md:mb-4 sm:text-xs">
                        {response.annotation_en}
                      </p>
                      <p className="text-justify">
                        <Sanitized html={response.biography_en} />
                      </p>
                    </div>
                  </div>
                </>
              )}
              {isTablet && (
                <>
                  <div className="flex mb-8 w-full justify-between xs:mb-0">
                    <div className="w-[200px] h-[250px] ">
                      <div className="h-[250px] w-[200px] mr-[42px] overflow-hidden z-10 rounded-md shadow-2xl 1md:mr-[2px]">
                        <img
                          src={uri + response.cropped_image}
                          className="w-[100%] h-auto m-0 p-0 rounded-md"
                          alt="about"
                        />
                      </div>
                    </div>
                    <div className=" ml-[70px] 1md:ml-[20px] ">
                      <p className="font-base text-[18px] mb-[22px] text-blue 1md:mb-[10px]">
                        {response.full_name_en}
                      </p>
                      <p className="font-base text-grey text-base sm:text-sm mb-8 1md:mb-4">
                        {response.annotation_en}
                      </p>
                      <p className="text-justify xs:mt-0 sm:text-sm">
                        <Sanitized html={response.biography_en} />
                      </p>
                    </div>
                  </div>
                </>
              )}
              {isMobile && (
                <>
                  <div className="flex mb-8 w-full justify-between xs:mb-0">
                    <div className="sm:w-[200px] 1xs:h-[100px] 1xs:w-[150px]">
                      <div className=" h-[390px] sm:h-[250px] w-[320px] 1xs:w-[150px] 1xs:h-[180px] sm:w-[200px] mr-[42px] overflow-hidden z-10 rounded-md shadow-2xl 1md:mr-[2px]">
                        <img
                          src={uri + response.cropped_image}
                          className="w-[100%] h-auto m-0 p-0 rounded-md"
                          alt="about"
                        />
                      </div>
                    </div>
                    <div className="ml-[70px] 1md:ml-[20px] ">
                      <p className="font-base text-[18px] mb-[22px] text-blue 1md:mb-[10px] 3xs:text-base">
                        {response.full_name_en}
                      </p>
                      <p className="font-base text-grey text-base mb-8 1md:mb-4 sm:text-sm">
                        {response.annotation_en}
                      </p>
                    </div>
                  </div>
                  <p className="text-justify w-full mt-20 xs:mt-12 2xs:mt-4 sm:text-sm">
                    <Sanitized html={response.biography_en} />
                  </p>
                </>
              )}
              <p className="w-full text-base font-semibold mb-[22px] 1xs:mt-4 ">
                {t('work')}
              </p>
              <p className="font-normal text-base w-full sm:text-sm text-justify">
                <Sanitized html={response.employment_en} />
              </p>
            </div>
          )}
        </div>
      </div>
    );
};

export default InfoLeadership;