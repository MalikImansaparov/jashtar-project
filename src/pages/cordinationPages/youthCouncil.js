import React, {useEffect, useState} from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import {useFetch} from "../../api/useFetch";
import {base, councilUrl, uri} from "../../api/const";
import {useTranslation} from "react-i18next";
import {createMarkup} from "../../components/general/dompurify";
import {ClipLoader} from "react-spinners";
import emblem from "../../assets/image/general/200px-Emblem_of_Kyrgyzstan 1.svg"

export const YoungCouncil = () => {
    const { isLoading, response } = useFetch(base + councilUrl + '/yorganization/');
    const {t, i18n} = useTranslation()

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
        <div className='wrapper font-inter'>
            {response && response.map((item) => (
                <div>
                    <div className="container w-[1196px]">
                        <BreadCrumb/>
                    </div>
                    {i18n.language === "ky" && <>
                        <div className='text-blue text-base font-semibold mb-8'>
                            {item.title_ky}
                        </div>
                        <div className="flex w-full text-justify">
                            <div dangerouslySetInnerHTML={createMarkup(item.desc_ky)}></div>
                        </div>
                    </>
                    }
                    {i18n.language === "ru" && <>
                        <div className='text-blue text-base font-semibold mb-8'>
                            {item.title_ru}
                        </div>
                        <div className="flex w-full text-justify">
                        <div dangerouslySetInnerHTML={createMarkup(item.desc_ru)}></div>
                        </div>
                        </>
                    }
                    {i18n.language === "en" && <>
                        <div className='text-blue text-base font-semibold mb-8'>
                            {item.title_en}
                        </div>
                        <div className="flex w-full text-justify">
                            <div dangerouslySetInnerHTML={createMarkup(item.desc_en)}></div>
                        </div>
                    </>
                    }

                </div>
            ))}
        <div className="mt-[32px] mb-[62px]">
        {response && response.map(i => (
            <div className="flex" key={i.id}>
                {i.yorganizationpart.map( item => (
                    <div key={item.id} className="flex w-[371px] shadow-sm p-2 rounded-[12px]">
                        <div className="h-[62px] w-[62px] overflow-hidden z-10 m-auto rounded-[50%] my-[14px]">
                            <img
                                src={uri + item.avatar_image}
                                alt="cart-img"
                                className=" h-auto w-[100%] "
                            />
                        </div>
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
                            <div className="flex flex-wrap items-center shadow-enroll py-[10px] px-[30px] my-[5px] rounded-[12px] mb-[23px] w-[1230px]">
                                <div className="flex justify-center shadow-org py-[13px] px-[10px] rounded-[12px]  mr-[32px] w-[64px] h-[64px]">
                                    <img src={emblem} alt='organization' className='w-[100%] h-auto'/>
                                </div>
                                {i18n.language === "ky" &&
                                    <p className="font-normal text-base w-[1000px]">
                                        {item.annotation_ky}
                                    </p>
                                }
                                {i18n.language === "ru" &&
                                    <p className="font-normal text-base w-[1000px]">
                                        {item.annotation_ru}
                                    </p>
                                }
                                {i18n.language === "en" &&
                                    <p className="font-normal text-base w-[1000px]">
                                        {item.annotation_en}
                                    </p>
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
