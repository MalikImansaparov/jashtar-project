import React, {useEffect, useRef, useState} from 'react';
import about from "../../assets/image/main/news.png"
import {useParams} from "react-router-dom";
import {aboutUrl, base, lead, uri} from "../../api/const";
import {useFetch} from "../../api/useFetch";
import {BreadCrumbs} from "../modules/breadcrumbs";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../general/sanitize";
import {ClipLoader} from "react-spinners";

const InfoLeadership = () => {
    const {id} = useParams()
    const { isLoading, response } = useFetch(base + aboutUrl + `/staff/${id}/`);
    const {t, i18n} = useTranslation()
    const topRef = useRef(null);


    useEffect(() => {
        window.scrollTo(0,0)
    }, [id]);

    const [crumbs] = useState([
        t("about"),
        '❯',
        t("leadship"),
        '❯',
        t("biography")
    ]);

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
        <div className="w-full relative pb-[63px]">
            <div className='h-[310px] w-[32.7%] absolute top-[190px] left-0 rounded bg-[#3070B633] bg-gradient-jashtar shadow-2xl'></div>
            <div className="wrapper text-justify">
                <div className="container mb-8 mt-16">
                        <BreadCrumbs crumbs={crumbs} title={""}/>
                </div>
                {response &&
                    i18n.language === 'ky' &&
                    <div>
                        <div className='flex mb-8 w-full justify-between '>
                            <div className="h-[390px] w-[320px] mr-[42px] overflow-y-hidden z-10 rounded-md shadow-2xl">
                            <img src={uri + response.cropped_image} className='w-[100%] h-auto m-0 p-0 rounded-md' alt='about'/>
                            </div>
                                <div className="w-[800px]">
                                <p className="font-base text-[18px] mb-[22px] text-blue">{response.full_name_ky}</p>
                                <p className="font-base text-grey text-base mb-8 w-[500px]">{response.annotation_ky}
                                </p>
                                <p>
                                  <Sanitized html={response.biography_ky}/>
                                </p>
                            </div>
                        </div>
                        <p className="w-full text-base font-semibold mb-[22px]">{t('work')}</p>
                        <p className='font-normal text-base w-full '>
                            <Sanitized html={response.employment_ky}/>
                        </p>
                    </div>
                }
                {response &&
                    i18n.language === 'ru' &&
                    <div>
                        <div className='flex mb-8 w-full justify-between '>
                            <div className="h-[390px] w-[320px] mr-[42px] overflow-y-hidden z-10 rounded-md shadow-2xl">
                                <img src={uri + response.cropped_image} className='w-[100%] h-auto m-0 p-0 rounded-md' alt='about'/>
                            </div>
                            <div className="w-[800px]">
                                <p className="font-base text-[18px] mb-[22px] text-blue">{response.full_name_ru}</p>
                                <p className="font-base text-grey text-base mb-8 w-[500px]">{response.annotation_ru}
                                </p>
                                <p>
                                    <Sanitized html={response.biography_ru}/>
                                </p>
                            </div>
                        </div>
                        <p className="w-full text-base font-semibold mb-[22px]">{t('work')}</p>
                        <p className='font-normal text-base w-full '>
                            <Sanitized html={response.employment_ru}/>
                        </p>
                    </div>
                }
                {response &&
                    i18n.language === 'en' &&
                    <div>
                        <div className='flex mb-8 w-full justify-between'>
                            <div className="h-[390px] w-[320px] mr-[42px] overflow-y-hidden z-10 rounded-md shadow-2xl">
                                <img src={uri + response.cropped_image} className='w-[100%] h-auto m-0 p-0 rounded-md' alt='about'/>
                            </div>
                            <div className="w-[800px] ml-[70px]">
                                <p className="font-base text-[18px] mb-[22px] text-blue">{response.full_name_en}</p>
                                <p className="font-base text-grey text-base mb-8 w-[500px]">{response.annotation_en}
                                </p>
                                <p>
                                    <Sanitized html={response.biography_en}/>
                                </p>
                            </div>
                        </div>
                        <p className="w-full text-base font-semibold mb-[22px]">{t('work')}</p>
                        <p className='font-normal text-base w-full'>
                            <Sanitized html={response.employment_en}/>
                        </p>
                    </div>
                }
            </div>
        </div>
    );
};

export default InfoLeadership;