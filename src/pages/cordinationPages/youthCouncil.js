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
                    <div className="container max-w-[1196px]">
                        <BreadCrumb/>
                    </div>
                    {i18n.language === "ky" && <div className="text-justify ">
                        <div className='text-blue text-base font-semibold mb-8 '>
                            {item.title_ky}
                        </div>
                        <div className="flex w-full text-justify">
                            <div dangerouslySetInnerHTML={createMarkup(item.desc_ky)}></div>
                        </div>
                    </div>
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
            <div className="mt-[32px] mb-[62px] ">
                {response && response.map(i => (
                    <div className="flex flex-wrap w-[760px] md:w-[378px] xs:w-[340px]" key={i.id}>
                        {i.yorganizationpart.map( item => (
                            <div key={item.id} className="flex w-[371px] shadow-sm p-3 rounded-[12px] mb-4 2xs:w-[350px] xs:p-1">
                                <div className="h-[62px] w-[62px] overflow-hidden z-10 m-auto rounded-[50%] my-[14px] xs:my-[8px]">
                                    <img
                                        src={uri + item.avatar_image}
                                        alt="cart-img"
                                        className="h-auto w-[100%] mr-4"
                                    />
                                </div>
                                <div className="max-w-[243px] 2xs:max-w-[220px] m-auto">
                                    <p className="text-[12px] mb-1 font-normal text-blue">
                                        {item.full_name_ky}
                                    </p>
                                    <p className="text-[11px] font-light mr-0">
                                        {item.annotation_ky}
                                    </p>
                                </div>
                            </div>))}
                    </div>
                ))}
            </div>
            <div>
                <div className='block text-base font-semibold mb-[36px] xs:ml-2'>{t("listCoordination")}</div>
                <div className=" mb-[62px]">
                    {response && response.map(i => (
                        <div key={i.id} className="flex flex-wrap w-full">
                            {i.yorganizationmemb.map( item => (
                                <div className="flex items-center shadow-enroll py-[10px] px-[30px] my-4 align-middle rounded-[12px] w-full cursor-pointer hover:shadow-2xl sm:px-[10px]"
                                     onClick={() => openModal(item.id)}>
                                        <img src={emblem} alt='organization' className='w-[40px] h-[40px] self-center mr-[12px] xs:pr-0'/>
                                    {i18n.language === "ky" &&
                                        <span className="font-normal text-base 1sm:text-sm xs:text-[12px] max-w-[1100px]">{item.annotation_ky}</span>
                                    }
                                    {i18n.language === "ru" &&
                                        <p className="font-normal text-base 1sm:text-sm xs:text-[12px]">{item.annotation_ru}</p>
                                    }
                                    {i18n.language === "en" &&
                                        <p className="font-normal text-base 1sm:text-sm xs:text-[12px]">{item.annotation_en}</p>
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

