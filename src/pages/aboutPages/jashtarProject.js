import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, eventsUrl, uri} from "../../api/const";
import {useTranslation} from "react-i18next";
import {ClipLoader} from "react-spinners";
import {createTemplate} from "../../components/general/purifydom";
import {ImagesSlider} from "../../components/general/photoSlider";
import {Sanitized} from "../../components/general/sanitize";
import dots from "../../assets/image/main/Ellipse 1.png";
import {PolicySlider} from "./policySlider";

export const JashtarProject = () => {
  const { isLoading, response } = useFetch(base + aboutUrl + '/youthpolicy/');
  const {i18n} = useTranslation()

    if (isLoading) {
        return (
            <div role="status" className='flex justify-center my-28 pb-24'>
                <ClipLoader
                    color="#1985A1"
                    size={300}
                />
            </div>
        )
    }

  return (
    <div className="w-full relative pb-[63px] font-inter text-justify">
      <div className="wrapper text-[16px] font-normal leading-5 ">
        <div className="">
          <BreadCrumb />
        </div>
        {response && response.map( item => (
            <div key={item.id}>
                {i18n.language === "ky" &&
                    <div className='mb-8'>
                        <div className="w-[432px] h-auto mr-[32px] mb-2 z-10 overflow-hidden float-left ">
                            <PolicySlider images={item.youth_slider}/>
                        </div>
                        <Sanitized html={item.desc_ky}/>
                    </div>
                }
                {i18n.language === "ru" &&
                    <div className='mb-8'>
                        <div className="w-[432px] h-auto mr-[32px] mb-2 z-10 overflow-hidden float-left">
                            <PolicySlider images={item.youth_slider}/>
                        </div>
                        <Sanitized html={item.desc_ru}/>
                    </div>
                }
                {i18n.language === "en" &&
                    <div className='mb-8'>
                        <div className="w-[432px] h-auto mr-[32px] mb-2 z-10 overflow-hidden float-left">
                            <PolicySlider images={item.youth_slider}/>
                        </div>
                        <Sanitized html={item.desc_en}/>
                    </div>
                }
            </div>
            ))}
      </div>
    </div>
  );
};

