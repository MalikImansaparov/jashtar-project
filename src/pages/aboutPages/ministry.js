import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import bg from "../../assets/image/about/jashtar-bg.png";
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, lead} from "../../api/const";

const Ministry = () => {
    const { isLoading, response } = useFetch(base + aboutUrl + '/about_us_ministry/');

    const bgImageStyle = {
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover'
    }

    return (
        <div className="w-full h-[604px] relative z-0 pb-8" style={bgImageStyle}>
            <div className="absolute top-0 left-0 bg-gradient-ministry w-full h-[624px]" ></div>
            {response && response.map( item => (
                <div className='container w-[1196px] m-auto text-white text-base font-normal' key={item.id}>
                    <div className="text-white ">
                        <BreadCrumb/>
                    </div>
                    <p className="my-8 leading-[19.3px]">
                        {item.desk_ky}
                    </p>
                    {/*<div onClick={() => window.open('https://minculture.gov.kg/', '_blank')} className='text-blue cursor-pointer z-100 absolute '>https://minculture.gov.kg/</div>*/}
                </div>
            ))}
        </div>
    );
};

export default Ministry;