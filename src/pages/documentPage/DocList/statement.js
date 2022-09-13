import React from 'react';
import {BreadCrumb} from "../../../components/general/breadcrumb";
import pdf from "../../../assets/image/general/pdf.png";
import doc from "../../../assets/image/general/doc.png";
import download from "../../../assets/image/general/download.png";
import DocSidebar from "../docSidebar";
import arrow from "../../../assets/image/general/docArrow.png";
import {NavLink} from "react-router-dom";
import {useFetch} from "../../../api/useFetch";
import {url} from "../../../api/const";

const Statement = () => {
    const { isLoading, response } = useFetch(url);

    return (
        <div className="flex">
            <DocSidebar/>
        <div className="pl-[67px] ">
            <div className="container mb-8">
                <BreadCrumb />
            </div>

            {response && response.map( item => (
                <div className='flex items-center mt-4'>
                    <img src={arrow} alt='arrow' className='w-[3.5px] h-[7px]'/>
                    <NavLink to={`/statement/${item.id}`} className='ml-[11px] font-medium text-base text-blue'>О местной государственной администрации и органах местного самоуправления</NavLink>
                </div>
            )) }
            </div>

        </div>
    );
};

export default Statement;