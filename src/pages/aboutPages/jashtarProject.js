import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import about from "../../assets/image/main/about.png"
import about2 from "../../assets/image/about/about2.png"
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, uri} from "../../api/const";

export const JashtarProject = () => {
    const { isLoading, response } = useFetch(base + aboutUrl + '/about_us_youthpolicy/');

    return (
        <div className="w-full relative pb-[63px]">
            <div className='h-[232px] w-[38.7%] absolute top-[150px] left-0 rounded bg-[#3070B633]'></div>
        <div className='wrapper text-[16px] font-normal leading-5'>
            <div className="">
                <BreadCrumb/>
            </div>
            <div className='flex mb-8 w-full flex-wrap'>
                <img src={about} className='h-[287px] w-[about432px] mr-[62px] z-10' alt='about'/>
                <div className="flex flex-wrap">
                    { response && response.map( item => (
                        <p key={item.id}>
                            {item.desc_ky}
                        </p>
                    ))}
                </div>
                <img src={about2} className='h-[287px] w-[432px] mr-[62px] mt-[32px] pl-[62px] z-10 bg' alt='about'/>
            </div>
           </div>
            <div className='h-[232px] w-[39%] absolute top-[560px] right-0 rounded bg-[#3070B633] bg-gradient-jashtar'></div>
        </div>
    );
};

