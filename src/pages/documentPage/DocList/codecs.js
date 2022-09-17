import React from 'react';
import {BreadCrumb} from "../../../components/general/breadcrumb";
import pdf from "../../../assets/image/general/pdf.png";
import doc from "../../../assets/image/general/doc.png";
import download from "../../../assets/image/general/download.png";
import DocSidebar from "../docSidebar";
import arrow from "../../../assets/image/general/docArrow.png";
import {NavLink} from "react-router-dom";
import {useFetch} from "../../../api/useFetch";
import {base, docsUrl, url} from "../../../api/const";

const Codecs = () => {
    const {response} = useFetch(base + docsUrl + `/category/`);

    return (
        <div className="flex">
            <DocSidebar/>
        <div className="pl-[67px] h-auto">
            <div className="container mb-8">
                <BreadCrumb />
            </div>

            {/*{response &&*/}
            {/*    response.filter(i => i.id === 1 && i.category.map( item => (*/}
            {/*    <div className='flex items-center mt-4' key={item.id}>*/}
            {/*        <img src={arrow} alt='arrow' className='w-[3.5px] h-[7px]'/>*/}
            {/*        <NavLink to={`/codes/${item.id}`} className='ml-[11px] font-medium text-base text-blue'>{item.title_ky}</NavLink>*/}
            {/*    </div>*/}
            {/*)) )}*/}
            </div>
        </div>
    );
};

export default Codecs;