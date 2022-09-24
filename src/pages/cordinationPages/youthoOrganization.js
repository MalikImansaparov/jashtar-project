import React, {useEffect, useState} from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import {useFetch} from "../../api/useFetch";
import {base, councilUrl, uri} from "../../api/const";
import {useTranslation} from "react-i18next";
import DOMPurify from "dompurify";

export const YoungOrganization = () => {
    const { isLoading, response } = useFetch(base + councilUrl + '/yorganization/');
    const {t, i18n} = useTranslation()

    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        };
    };

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
                        <div dangerouslySetInnerHTML={createMarkup(item.desc_ky)}></div>
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
            <div className=" mb-[62px]">
                {response && response.map(i => (
                    <div key={i.id} className="flex flex-wrap items-center">
                        {i.yorganizationmemb.map( item => (
                        <div className="flex flex-wrap shadow-org py-[13px] px-[30px] my-[10px] rounded-[12px]">
                            {i18n.language === "ky" &&
                                <p className="font-normal text-base w-[1180px]">{item.annotation_ky}</p>
                            }
                            {i18n.language === "ru" &&
                                <p className="font-normal text-base w-[1180px]">{item.annotation_ru}</p>
                            }
                            {i18n.language === "en" &&
                                <p className="font-normal text-base w-[1180px]">{item.annotation_en}</p>
                            }
                        </div>
                            ))}
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

