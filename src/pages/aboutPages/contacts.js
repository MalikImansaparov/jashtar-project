import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import bg from "../../assets/image/about/contacts-bg.png";
import pattern from "../../assets/image/main/Looper-1.png"
import {aboutUrl, base} from "../../api/const";
import {useFetch} from "../../api/useFetch";
import {useTranslation} from "react-i18next";

export const Contacts = () => {
    const { isLoading, response } = useFetch(base + aboutUrl + '/contacts/');
    const {t} = useTranslation()

    const bgImageStyle = {
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover'
    }

    return (
        <div className="w-full h-[655px]  mb-[62px] relative" style={bgImageStyle}>
            <div className='h-[232px] w-[60%] absolute top-[170px] left-0 rounded bg-[#3070B633] bg-gradient-jashtar z-10'></div>
        <div className='wrapper'>
            <div className="container w-[1196px] m-auto">
                <BreadCrumb/>
            </div>
            <div className='flex'>
                <div className="flex justify-center items-center w-[443px]">
                    <p className="font-semibold text-[18px] text-white leading-[23px]">
                        {t("main")}
                    </p>
                </div>
                <div className="relative rounded w-[532px] h-[322px] bg-white flex justify-center items-center ml-[261px]">
                    <img src={pattern} alt="pattern" className="absolute top-0 right-[20px] w-[200px] h-[200px]"/>
                    { response && response.map( item => (
                        <div key={item.id}>
                            <p className="text-base font-medium mb-[22px]">Адрес:<span className="text-blue"> Пушкина 78, 720040 Бишкек, Кыргызстан</span></p>
                            <p className="text-base font-medium">Телефон: <span className="text-blue">{item.phone}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

