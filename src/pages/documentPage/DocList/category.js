import React from 'react';
import {BreadCrumb} from "../../../components/general/breadcrumb";
import DocSidebar from "../docSidebar";
import arrow from "../../../assets/image/general/docArrow.png";
import {NavLink, useParams} from "react-router-dom";
import {useFetch} from "../../../api/useFetch";
import {base, docsUrl, url} from "../../../api/const";

const CategoryList = () => {
    const {id} = useParams()
    const {response} = useFetch(base + docsUrl + `/category/${id}`);

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
                            <NavLink to={`/document/${item.id}`} className='ml-[11px] font-medium text-base text-blue'>{item.title_ky}</NavLink>
                        </div>
                    ))}
            </div>

        </div>
    );
};

export default CategoryList;