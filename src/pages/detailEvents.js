import React, {useState} from 'react';
import dots from "../assets/image/main/Ellipse 1.png";
import {BreadCrumbs} from "../components/modules/breadcrumbs";
import {useParams} from "react-router-dom";
import {useFetch} from "../api/useFetch";
import {aboutUrl, base, eventsUrl, uri} from "../api/const";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../components/general/sanitize";
import {ClipLoader} from "react-spinners";

const DetailEvents = () => {
    window.scroll(0,0)
    const {id} = useParams()
    const { isLoading, response } = useFetch(base + eventsUrl + `/events/${id}/`);
    const {t, i18n} = useTranslation()

    const [crumbs] = useState([
        t("events"),
        '❯',
        t("allEvents"),
        '❯',
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
        <div className="w-full relative mb-[63px]">
            <div className='h-[232px] w-[39.7%] absolute top-[190px] left-0 rounded bg-[#3070B633] bg-gradient-jashtar shadow-2xl'></div>
                {response && <>
                {i18n.language === "ky" &&
            <div className="wrapper">
                <div className="container mb-8 mt-16">
                        <BreadCrumbs crumbs={crumbs} title={response.title_ky} />
                </div>
                <div className='flex mb-8 w-full'>
                    <div className="h-[287px] w-[432px] mr-[62px] z-10 shadow-2xl overflow-hidden">
                        <img
                            src={uri + response.preview_image}
                            alt="cart-img"
                            className="h-auto w-[100%] rounded-t"
                        />
                    </div>
                <div className="w-[742px] mb-[62px] text-sm font-medium">
                    <p className="mb-6 font-semibold text-[18px]">{response.title_ky}</p>
                    <Sanitized html={response.desc_ky}/>
                    <p className="text-grey mt-8 flex">
                        <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                        <span>{t('date')}</span><span className='text-black '>&nbsp;{response.event_date}</span>
                    </p>
                    <p className="text-grey flex">
                        <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                        {t('location')}<span className='text-black'>&nbsp;{response.location_ky}</span>
                    </p>
                </div>
            </div>
            </div>}
                    {i18n.language === "ru" &&
                        <div className="wrapper">
                            <div className="container mb-8 mt-16">
                                <BreadCrumbs crumbs={crumbs} title={response.title_ru} />
                            </div>
                            <div className='flex mb-8 w-full'>
                                <img src={uri + response.preview_image} className='h-[287px] w-[432px] mr-[62px] z-10' alt='about'/>
                                <div className="w-[742px] mb-[62px] text-sm font-medium">
                                    <p className="mb-6 font-semibold text-[18px]">{response.title_ru}</p>
                                    <Sanitized html={response.desc_ru}/>
                                    <p className="text-grey mt-8 flex">
                                        <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                                        <span>{t('date')}</span><span className='text-black'>&nbsp;{response.event_date}</span>
                                    </p>
                                    <p className="text-grey flex">
                                        <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                                        {t('location')}<span className='text-black'>&nbsp;{response.location_ru}</span>
                                    </p>
                                </div>
                            </div>
                        </div>}
                    {i18n.language === "en" &&
                        <div className="wrapper">
                            <div className="container mb-8 mt-16">
                                <BreadCrumbs crumbs={crumbs} title={response.title_en} />
                            </div>
                            <div className='flex mb-8 w-full'>
                                <img src={uri + response.preview_image} className='h-[287px] w-[432px] mr-[62px] z-10' alt='about'/>
                                <div className="w-[742px] mb-[62px] text-sm font-medium">
                                    <p className="mb-6 font-semibold text-[18px]">{response.title_en}</p>
                                    <Sanitized html={response.desc_en}/>
                                    <p className="text-grey mt-8 flex">
                                        <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                                        <span>{t('date')}</span><span className='text-black '>&nbsp;{response.event_date}</span>
                                    </p>
                                    <p className="text-grey flex">
                                        <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                                        {t('location')}<span className='text-black'>&nbsp;{response.location_en}</span>
                                    </p>
                                </div>
                            </div>
                        </div>}
            </>}
        </div>
    );
};

export default DetailEvents;