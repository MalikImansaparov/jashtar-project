import React, {useEffect, useState} from 'react';
import about from "../assets/image/main/about.png";
import {useFetch} from "../api/useFetch";
import {aboutUrl, base, lead, newsUrl, uri, url} from "../api/const";
import {BreadCrumbs} from "../components/modules/breadcrumbs";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../components/general/sanitize";
import {ClipLoader} from "react-spinners";
import ShareSocial from "../components/general/share-social";
import {ImagesSlider} from "../components/general/photoSlider";

const DetailNews = () => {
    const {id} = useParams()
    const { isLoading, response } = useFetch(base + newsUrl + `/news/${id}/`);
    window.scroll(0,0)
    const {t, i18n} = useTranslation()

    const [crumbs] = useState([
        t("news"),
        '❯',
        t("allNews"),
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
        <div className="wrapper w-full relative mb-[63px] text-justify">
            <div className='h-[212px] w-[47%] absolute top-[170px] left-[-100px] rounded bg-[#3070B633] bg-gradient-jashtar shadow-2xl'></div>
            {response && <>
            {i18n.language === "ky" &&
                <div className="wrapper">
            <div className="container mb-8 mt-16 ">
                    <BreadCrumbs crumbs={crumbs} title={response.title_ky}/>
            </div>
            <div className='mb-8 '>
                <div className="w-[432px] h-auto mr-[62px] mb-2  float-left">
                    <ImagesSlider images={response.news_slider}/>
                </div>
                    <p className="mb-4 font-semibold text-[20px]">{response.title_ky}</p>
                    <Sanitized html={response.desc_ky}/>
            </div>
        </div>}
                {i18n.language === "ru" &&
                    <div className="wrapper">
                        <div className="container mb-8 mt-16">
                            <BreadCrumbs crumbs={crumbs} title={response.title_ru}/>
                        </div>
                        <div className='mb-8'>
                            <div className="w-[432px] mr-[62px] mb-2 z-10 overflow-hidden float-left">
                                <ImagesSlider images={response.news_slider}/>
                            </div>
                                <p className="mb-8 font-semibold text-[20px]">{response.title_ru}</p>
                                <Sanitized html={response.desc_ru}/>
                        </div>
                    </div>}
            </>}
            {i18n.language === "en" &&
                <div className="wrapper">
                    <div className="container mb-8 mt-16">
                        <BreadCrumbs crumbs={crumbs} title={response.title_en}/>
                    </div>
                    <div className='mb-8'>
                        <div className="w-[432px] mr-[62px] mb-2 z-10 overflow-hidden float-left">
                            <ImagesSlider images={response.news_slider}/>
                        </div>
                            <p className="mb-8 font-semibold text-[20px]">{response.title_en}</p>
                            <Sanitized html={response.desc_en}/>
                    </div>
                </div>}
            <div className="block mb-8">
                <p className="mb-2">{t("share")}</p>
                <ShareSocial/>
            </div>
        </div>
    );
};

export default DetailNews;