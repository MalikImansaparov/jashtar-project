import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, eventsUrl, uri} from "../../api/const";
import {useTranslation} from "react-i18next";
import {ClipLoader} from "react-spinners";
import {Sanitized} from "../../components/general/sanitize";
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
        <div className='h-[210px] max-w-[47%] absolute top-[140px] left-[-100px] rounded bg-[#3070B633] bg-gradient-jashtar shadow-2xl'></div>
      <div className="wrapper text-[16px] font-normal leading-5">
        <div>
          <BreadCrumb />
        </div>
        {response && response.map( item => (
            <div key={item.id}>
                {i18n.language === "ky" &&
                    <div className='mb-8'>
                        <div className="max-w-[432px] h-auto mr-[32px] mb-2 z-10 overflow-hidden float-left sm:float-none sm:max-w-[432px] sm:m-auto 1xs:max-w-[320px] ">
                            <PolicySlider images={item.youth_slider}/>
                        </div>
                        <Sanitized html={item.desc_ky}/>
                    </div>
                }
                {i18n.language === "ru" &&
                    <div className='mb-8'>
                        <div className="w-[432px] h-auto mr-[72px] mb-2 z-10 overflow-hidden float-left">
                            <PolicySlider images={item.youth_slider}/>
                        </div>
                        <Sanitized html={item.desc_ru}/>
                    </div>
                }
                {i18n.language === "en" &&
                    <div className='mb-8'>
                        <div className="w-[432px] h-auto mr-[72px] mb-2 z-10 overflow-hidden float-left">
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

