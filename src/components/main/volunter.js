import React from 'react';
import {useFetch} from "../../api/useFetch";
import {base, mainUrl, uri} from "../../api/const";
import SanitizedHTML from "react-sanitized-html";
import {useNavigate} from "react-router";

const Volunter = () => {
    const { isLoading, response } = useFetch(base + mainUrl + '/subprojects/');
    const navigate = useNavigate()

    return (
        <div className="mt-[62px]">
            {response && response.map( item => (
                item.id % 2 ?
                <div className=" flex w-full min-h-[302px] justify-center  bg-white shadow-vol" key={item.id}>
                    <img src={uri + item.corresponding_image} alt='volunter' className='w-[50%]'/>
                    <div className="m-auto text-center bg-gradient-volunter">
                        <img src={uri + item.logo_image} alt='icon' className='w-[60px] h-[60px] mb-4 m-auto' />
                        <p className='text-[22px] font-semibold mb-3'>{item.title_ky}</p>
                        <div className="font-normal text-base max-w-[422px] leading-5 text-grey">{item.desc_ky}</div>
                        <button className='button' onClick={() => window.open(item.apply_link)}>
                           Стать волонтером
                        </button>
                    </div>
                </div>
                    :
                    <div className=" flex w-full min-h-[302px] justify-center  bg-white shadow-vol" key={item.id}>
                        <div className="m-auto text-center bg-gradient-volunter">
                            <img src={uri + item.logo_image} alt='icon' className='w-[60px] h-[60px] mb-4 m-auto' />
                            <p className='text-[22px] font-semibold mb-3'>{item.title_ky}</p>
                            <div className="font-normal text-base max-w-[422px] leading-5 text-grey">{item.desc_ky}</div>
                        </div>
                        <img src={uri + item.corresponding_image} alt='volunter' className='w-[50%]'/>
                    </div>

            ))}
        </div>
    );
};

export default Volunter;