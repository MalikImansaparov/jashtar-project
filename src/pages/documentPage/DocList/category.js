import React from 'react';
import {BreadCrumb} from "../../../components/general/breadcrumb";
import DocSidebar from "../docSidebar";
import arrow from "../../../assets/image/general/docArrow.png";
import {NavLink, useParams} from "react-router-dom";
import {useFetch} from "../../../api/useFetch";
import {base, docsUrl, url} from "../../../api/const";
import {useTranslation} from "react-i18next";

const CategoryList = () => {
    const {id} = useParams()
    const {response} = useFetch(base + docsUrl + `/category/${id}/`);
    const {i18n ,t} = useTranslation();

    return (
        <div className="flex max-w-[1440px] m-auto">
            <DocSidebar/>
            <div className="pl-[37px] min-h-screen mb-[62px] font-inter 3lg:pl-[17px] mt-[32px] 1md:pl-[7px] sm:pl-[5px] sm:pr-[5px]">
                {response &&
                    response.category.map( item => (
                        <div className='flex flex-wrap max-w-[873px] items-center mt-4 3lg:mt-2' key={item.id}>

                            {i18n.language === "ky" &&
                                <NavLink to={`/document/${item.id}`}
                                         className='flex ml-[11px] font-medium text-base text-blue 2md:font-normal 2md:text-sm'>
                                    <img src={arrow} alt='arrow' className='w-[5px] h-[10px] self-start mr-3 mt-2'/>
                                    {item.title_ky}
                                </NavLink>
                            }
                            {i18n.language === "ru" &&
                                <NavLink to={`/document/${item.id}`}
                                         className='flex ml-[11px] font-medium text-base text-blue 2md:font-normal 2md:text-sm'>
                                    <img src={arrow} alt='arrow' className='w-[5px] h-[10px] self-start mr-3 mt-2'/>
                                    {item.title_ru}
                                </NavLink>
                            }
                            {i18n.language === "en" &&
                                <NavLink to={`/document/${item.id}`}
                                         className='flex ml-[11px] font-medium text-base text-blue 2md:font-normal 2md:text-sm'>
                                    <img src={arrow} alt='arrow' className='w-[5px] h-[10px] self-start mr-3 mt-2'/>
                                    {item.title_en}
                                </NavLink>
                            }
                        </div>
                    ))}
            </div>

        </div>
    );
};

export default CategoryList;