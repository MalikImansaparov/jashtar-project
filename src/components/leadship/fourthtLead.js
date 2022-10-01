import React from 'react';
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, uri, url} from "../../api/const";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const FourthLead = () => {
    const { isLoading, response } = useFetch(base + aboutUrl + '/staff/');
    const {t, i18n} = useTranslation()

    return (
        <div className='mb-[92px] '>
            <div className="wrapper justify-between align-middle">
                {/*md: jc*/}
                {response &&
                    response.filter(i => i.floor === 4 ).map( item => (
                        <div
                            className="relative block shadow-sm w-[234px] h-[196px] bg-white rounded-2xl text-center shadow-2xl"
                            key={item.id}
                        >
                            <div className="h-[62px] w-[62px] overflow-hidden z-10 m-auto rounded-[50%] my-[14px] ">
                                <img
                                    src={uri + item.cropped_image}
                                    alt="cart-img"
                                    className=" h-auto w-[100%] "
                                />
                            </div>
                            {i18n.language === 'ky' &&
                                <div className="w-[193px] m-auto">
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
                                <button className="absolute bottom-0 left-0 h-6 w-full bg-btnLight text-[11px] font-medium text-orange rounded-b-2xl">
                                    {t("biography")}
                                </button>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};
