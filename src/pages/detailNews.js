import React, {useEffect, useState} from 'react';
import about from "../assets/image/main/about.png";
import {useFetch} from "../api/useFetch";
import {aboutUrl, lead, uri, url} from "../api/const";
import {BreadCrumbs} from "../components/modules/breadcrumbs";
import {useParams} from "react-router-dom";


const DetailNews = () => {
    const {id} = useParams()
    const { isLoading, response } = useFetch(base + aboutUrl + `/staff/${id}`);
    window.scroll(0,0)

    const [crumbs] = useState([
        'Новости',
        '❯',
        'Все новости',
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
                <img src={uri + response} className='h-[287px] w-[432px] mr-[62px] z-10' alt='about'/>
                <div className="">
                </div>
            </div>
        </div>
        </div>
    );
};

export default DetailNews;