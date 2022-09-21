import React, {useEffect, useState} from 'react';
import about from "../assets/image/main/about.png";
import {useFetch} from "../api/useFetch";
import {aboutUrl, base, lead, newsUrl, uri, url} from "../api/const";
import {BreadCrumbs} from "../components/modules/breadcrumbs";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../components/general/sanitize";


const DetailNews = () => {
    const {id} = useParams()
    const { isLoading, response } = useFetch(base + newsUrl + `/news/${id}`);
    window.scroll(0,0)
    const {t, i18n} = useTranslation()

    const [crumbs] = useState([
        t("news"),
        '❯',
        t("allNews"),
        '❯',
    ]);

    return (
        <div className="w-full relative mb-[63px]">
            <div className='h-[232px] w-[38.7%] absolute top-[190px] left-0 rounded bg-[#3070B633] bg-gradient-jashtar'></div>
            {response && response.map( item =>  (
        <div className="wrapper">
            <div className="container mb-8 mt-16">
                    <BreadCrumbs crumbs={crumbs} title={item.title}/>
            </div>
            {/*{i18n.language === "ky" && }*/}
            <div className='flex mb-8 w-full'>
                <img src={uri + item.image} className='h-[287px] w-[432px] mr-[62px] z-10' alt='about'/>
                <div className="">
                    <Sanitized html={item.desk_ky}/>
                </div>
            </div>
        </div>
                ))}
        </div>
    );
};

export default DetailNews;