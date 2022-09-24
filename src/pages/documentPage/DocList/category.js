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
    const {response} = useFetch(base + docsUrl + `/category/${id}`);
    const {i18n ,t} = useTranslation()

    return (
        <div className="flex">
            <DocSidebar/>
            <div className="pl-[67px] min-h-screen mb-[62px]">
                <div className="container mb-8">
                    <BreadCrumb />
                </div>
                {response &&
                    response.category.map( item => (
                        <div className='flex flex-wrap w-[853px] items-center mt-4' key={item.id}>
                             <img src={arrow} alt='arrow' className='w-[3.5px] h-[7px]'/>
                            {i18n.language === "ky" &&
                                <NavLink to={`/document/${item.id}`}
                                         className='ml-[11px] font-medium text-base text-blue'>{item.title_ky}</NavLink>
                            }
                            {i18n.language === "ru" &&
                                <NavLink to={`/document/${item.id}`}
                                         className='ml-[11px] font-medium text-base text-blue'>{item.title_ru}</NavLink>
                            }
                            {i18n.language === "en" &&
                                <NavLink to={`/document/${item.id}`}
                                         className='ml-[11px] font-medium text-base text-blue'>{item.title_en}</NavLink>
                            }
                        </div>
                    ))}
            </div>

        </div>
    );
};

export default CategoryList;