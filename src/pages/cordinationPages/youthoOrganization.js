import React, {useEffect, useState} from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import leader1 from '../../assets/image/about/akdn1.png'
import leader2 from '../../assets/image/about/akdn2.png'
import CordinationList from "./cordinationList";
import jashtar from "../../assets/image/general/Jashtar-logo.png"
import {useFetch} from "../../api/useFetch";
import {base, councilUrl, uri} from "../../api/const";
import {useTranslation} from "react-i18next";
import Sanitized from "react-sanitized-html";


export const YoungOrganization = () => {
    const { isLoading, response } = useFetch(base + councilUrl + '/yorganization/');
    const {t, i18n} = useTranslation()

    return (
        <div className='wrapper'>
            {response && response.map((item) => (
                <div>
                    <div className="container w-[1196px]">
                        <BreadCrumb/>
                    </div>
                    {i18n.language === "ky" &&
                        <div className='text-blue text-base font-semibold mb-8'>
                            {item.title_ky}
                        </div>
                    }
                    {i18n.language === "ru" &&
                        <div className='text-blue text-base font-semibold mb-8'>
                            {item.title_ru}
                        </div>
                    }
                    {i18n.language === "en" &&
                        <div className='text-blue text-base font-semibold mb-8'>
                            {item.title_en}
                        </div>
                    }
                    <div className="flex w-full">
                        <Sanitized html={item.desc_ky}/>
                    </div>
                </div>
            ))}
        <div className="mt-[32px] mb-[62px]">
        {response && response.map(i => (
            <div className="flex" key={i.id}>
                {i.yorganizationpart.map( item => (
                    <div key={item.id} className="flex w-[371px] shadow-sm p-3 rounded-[12px]">
                <img
                    src={uri + item.avatar_image}
                    alt="cart-img"
                    className="block my-[14px] h-[62px] w-[62px] m-auto rounded-[50%]"
                />
                <div className="w-[243px] m-auto">
                    <p className="text-[12px] mb-1 font-normal text-blue">
                        {item.full_name_ky}
                    </p>
                    <p className="text-[11px] font-light">
                        {item.annotation_ky}
                    </p>
                </div>
                    </div>))}
            </div>
        ))}
           </div>
            <div>
            <div className='block text-base font-semibold mb-[36px]'>{t("listCoordination")}</div>
            <div className="flex items-center mb-[62px] flex-wrap">
                {response.map(i => (
                    <div key={i.id} className="flex items-center w-[100%]">
                        {i.yorganizationpart.map( item => (
                            <div>
                        <div className="flex justify-center items-center shadow-org py-[13px] px-[30px] rounded-[12px] w-[291px] h-[86px] mr-[62px]">
                            <img src={uri + item.id} alt='organization' className=''/>
                        </div>
                        <p className="font-normal text-base">1. Deutsche Gesellschaft fur Internationale Zusammenarbeit (GIZ) GmbH</p>
                            </div>
                            ))}
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

