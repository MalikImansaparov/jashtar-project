import React, {useEffect, useState} from 'react';
import about from "../../assets/image/main/news.png"
import {useParams} from "react-router-dom";
import {aboutUrl, base, lead, uri} from "../../api/const";
import {useFetch} from "../../api/useFetch";
import {BreadCrumbs} from "../modules/breadcrumbs";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../general/sanitize";

const InfoLeadership = () => {
    const {id} = useParams()
    const { isLoading, response } = useFetch(base + aboutUrl + `/staff/${id}`);
    const {t, i18n} = useTranslation()

    const [crumbs] = useState([
        t("about"),
        '❯',
        t("leadship"),
        '❯',
        t("biography")
    ]);

    return (
        <div className="w-full relative pb-[63px]">
            <div className='h-[232px] w-[38.7%] absolute top-[190px] left-0 rounded bg-[#3070B633] bg-gradient-jashtar'></div>
            <div className="wrapper">
                <div className="container mb-8 mt-16">
                        <BreadCrumbs crumbs={crumbs}/>
                </div>
                {response &&
                    i18n.language === 'ky' &&
                    <div>
                        <div className='flex mb-8 w-full'>
                            <img src={uri + response.avatar_image} className='h-[287px] w-[432px] mr-[62px] z-10' alt='about'/>
                            <div className="w-[742px]">
                                <p className="font-base text-[18px] mb-[22px] text-blue">{response.full_name_ky}</p>
                                <p className="font-base text-grey text-base mb-8">{response.annotation_ky}
                                </p>
                                <p>
                                    {response.biography_ky}
                                </p>
                            </div>
                        </div>
                        <p className="w-full text-base font-semibold mb-[22px]">{t('work')}</p>
                        <p className='font-normal text-base w-full '>
                            <Sanitized html={response.full_name_ky}/>
                        </p>
                    </div>
                }
                {response &&
                    i18n.language === 'ru' &&
                    <div>
                        <div className='flex mb-8 w-full'>
                            <img src={uri + response.avatar_image} className='h-[287px] w-[432px] mr-[62px] z-10' alt='about'/>
                            <div className="w-[742px]">
                                <p className="font-base text-[18px] mb-[22px] text-blue">{response.full_name_ru}</p>
                                <p className="font-base text-grey text-base mb-8">{response.annotation_ru}
                                </p>
                                <p>
                                    {response.biography_ru}
                                </p>
                            </div>
                        </div>
                        <p className="w-full text-base font-semibold mb-[22px]">{t('work')}</p>
                        <p className='font-normal text-base w-full '>
                            <Sanitized html={response.full_name_en}/>
                        </p>
                    </div>
                }
                {response &&
                    i18n.language === 'en' &&
                    <div>
                        <div className='flex mb-8 w-full'>
                            <img src={uri + response.avatar_image} className='h-[287px] w-[432px] mr-[62px] z-10' alt='about'/>
                            <div className="w-[742px]">
                                <p className="font-base text-[18px] mb-[22px] text-blue">{response.full_name_en}</p>
                                <p className="font-base text-grey text-base mb-8">{response.annotation_en}
                                </p>
                                <p>
                                    {response.biography_en}
                                </p>
                            </div>
                        </div>
                        <p className="w-full text-base font-semibold mb-[22px]">{t('work')}</p>
                        <p className='font-normal text-base w-full '>
                            <Sanitized html={response.full_name_en}/>
                        </p>
                    </div>
                }
            </div>
        </div>
    );
};

export default InfoLeadership;