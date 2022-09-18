import React, {useState} from 'react';
import dots from "../assets/image/main/Ellipse 1.png";
import {BreadCrumbs} from "../components/modules/breadcrumbs";
import {useParams} from "react-router-dom";
import {useFetch} from "../api/useFetch";
import {aboutUrl, base, eventsUrl, uri} from "../api/const";
import {useTranslation} from "react-i18next";

const DetailEvents = () => {
    window.scroll(0,0)
    const {id} = useParams()
    const { isLoading, response } = useFetch(base + eventsUrl + `/events/${id}`);
    const {t} = useTranslation()

    const [crumbs] = useState([
        t("events"),
        '❯',
        t("allEvents"),
        '❯',
    ]);

    return (
        <div className="w-full relative mb-[63px]">
            <div className='h-[232px] w-[38.7%] absolute top-[190px] left-0 rounded bg-[#3070B633] bg-gradient-jashtar'></div>
            <div className="wrapper">
                <div className="container mb-8 mt-16">
                    {response &&  response.map( res => (
                        <BreadCrumbs crumbs={crumbs} title={res.title} key={res.id}/>
                    ))}
                </div>
                {/*{response && response.map(item => ())}*/}
                <div className='flex mb-8 w-full'>
                    <img src={uri + aboutUrl + response} className='h-[287px] w-[432px] mr-[62px] z-10' alt='about'/>
                    <div></div>
                <div className="w-[324px] my-[62px] text-sm font-medium">
                    <p className="text-grey flex">
                        <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                        <span>Дата:</span><span className='text-black '>&nbsp;12.02.2018</span>
                    </p>
                    <p className="text-grey flex">
                        <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                        Место проведения: <span className='text-black'>&nbsp;отель Orion</span>
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DetailEvents;