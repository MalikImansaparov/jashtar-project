import React from 'react';
import {RenderArrow} from "../../utils/arrow";
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, lead, uri} from "../../api/const";
import line from "../../assets/image/about/Line 1.png"
import line2 from "../../assets/image/about/Line 2.png"
import path from "../../assets/image/partners/Ellipse 2.png"
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const ThirdLead = () => {
    const { isLoading, response } = useFetch(base + aboutUrl + '/staff/');
    const {t, i18n} = useTranslation()

    return (
        <div>
            <div className="wrapper justify-center align-middle relative">
                <img src={line} alt='' className='absolute left-[-23px] top-[93px]'/>
                <img src={line2} alt='' className='absolute left-[-23px] top-[95px]'/>
                <div className="mt-[70px] absolute top-[10%] left-[10.5%]">
                    <RenderArrow angle={239} lenght={800} width={'355px'} line={4} />
                </div>
                {response &&
                    response.filter(i => i.floor === 3 ).map( item => (
                        <div
                            className="block shadow-sm w-[234px] h-[186px] bg-white rounded-2xl text-center"
                            key={item.id}
                        >
                            <img
                                src={uri + item.avatar_image}
                                alt="cart-img"
                                className="my-[14px] h-[62px] w-[62px] m-auto rounded-[50%]"
                            />
                            {i18n.language === 'ky' &&
                                <div className="w-[193px]  m-auto">
                                    <p className="text-xs mb-1 font-normal text-blue">
                                        {item.full_name_ky}
                                    </p>
                                    <p className="description">
                                        {item.annotation_ky}
                                    </p>
                                </div>}
                            {i18n.language === 'ru' &&
                                <div className="w-[193px] m-auto">
                                    <p className="text-xs mb-1 font-normal text-blue">
                                        {item.full_name_ru}
                                    </p>
                                    <p className="description">
                                        {item.annotation_ru}
                                    </p>
                                </div>}
                            {i18n.language === 'en' &&
                                <div className="w-[193px] m-auto">
                                    <p className="text-xs mb-1 font-normal text-blue">
                                        {item.full_name_en}
                                    </p>
                                    <p className="description">
                                        {item.annotation_en}
                                    </p>
                                </div>}
                            <Link to={`${item.id}`}>
                                <button className="h-6 w-full bg-btnLight text-[11px] font-medium text-orange rounded-b-2xl">
                                    {t("biography")}
                                </button>
                            </Link>
                        </div>
                    ))}
                <div className="mt-[70px] absolute top-[10%] right-[11.0%]">
                    <RenderArrow angle={121.5} lenght={800} width={'350px'} line={4} />
                </div>
            </div>
            <div className="wrapper justify-center">
                <RenderArrow angle={230} lenght={130} width={'120px'} line={2} />
                <div className="flex justify-center w-[232px] pt-2">
                    <RenderArrow angle={180} lenght={50} width={'35px'} line={1.2}/>
                </div>
                <RenderArrow angle={129} lenght={130} width={'120px'} line={2} />
            </div>
        </div>
    );
};
