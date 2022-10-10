import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, lead, uri} from "../../api/const";
import {Sanitized} from "../../components/general/sanitize";
import {useTranslation} from "react-i18next";
import {ClipLoader} from "react-spinners";

const Ministry = () => {
    const {i18n} = useTranslation()
    const { isLoading, response } = useFetch(base + aboutUrl + '/ministry/');


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
        <>
            {response && response.map(item => (
        <div className="w-full h-[604px] relative z-0 pb-8 font-inter" key={item.id} style={{backgroundImage:`url(${uri}${item.background_image})`}}>
            <div className="absolute top-0 left-0 bg-gradient-ministry w-full h-[624px] z-0" ></div>
                <div className='container w-[1196px] m-auto text-white text-base font-normal' key={item.id}>
                    <div className="text-white">
                        <BreadCrumb/>
                    </div>
                    <p className="my-16 leading-[19.3px] relative z-10 text-justify">
                        {i18n.language === "ky" &&
                            <Sanitized html={item.desc_ky}/>
                        }
                        {i18n.language === "ru" &&
                            <Sanitized html={item.desc_ru}/>
                        }
                        {i18n.language === "en" &&
                            <Sanitized html={item.desc_en}/>
                        }
                    </p>
                </div>
        </div>
            ))}
            </>
    );
};

export default Ministry;