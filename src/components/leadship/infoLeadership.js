import React, {useEffect, useState} from 'react';
import about from "../../assets/image/main/news.png"
import {useParams} from "react-router-dom";
import {aboutUrl, base, lead} from "../../api/const";
import {useFetch} from "../../api/useFetch";
import {BreadCrumbs} from "../modules/breadcrumbs";
import path from "../../assets/image/partners/1031036878_0_0_6016_3400_600x0_80_0_0_413f7b1b5ff473578023e30c42c5dc0f 2.png"

const InfoLeadership = () => {
    const {id} = useParams()
    const { isLoading, response } = useFetch(base + aboutUrl + '/managment_staff/');


    const [crumbs] = useState([
        'О нас',
        '❯',
        'Руководство',
        '❯',
        'Биография'
    ]);

    return (
        <div className="w-full relative pb-[63px]">
            <div className='h-[232px] w-[38.7%] absolute top-[190px] left-0 rounded bg-[#3070B633] bg-gradient-jashtar'></div>
            <div className="wrapper ">
                <div className="container mb-8 mt-16">
                        <BreadCrumbs crumbs={crumbs} />
                </div>
                {response && response.map(item => (
                    <div key={item.id}>
                        <div className='flex mb-8 w-full'>
                            <img src={path} className='h-[287px] w-[432px] mr-[62px] z-10' alt='about'/>
                            <div className="">
                                <p className="font-base text-[18px] mb-[22px] text-blue">{item.full_name_ky}</p>
                                <p className="font-base text-grey text-base mb-8">{item.anotation_ky}
                                </p>
                                <p>
                                    {item.biography_ky}
                                </p>
                            </div>
                        </div>
                        <p className="w-full text-base font-semibold mb-[22px]">Трудовая деятелность:</p>
                        <p className='font-normal text-base w-full '>{item.emploment_ky}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoLeadership;