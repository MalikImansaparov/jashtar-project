import React, {useEffect, useState} from 'react';
import {BreadCrumb} from "../../../components/general/breadcrumb";
import DocSidebar from "../docSidebar";
import arrow from "../../../assets/image/general/docArrow.png";
import {NavLink, useParams} from "react-router-dom";
import {base, docsUrl} from "../../../api/const";
import {useTranslation} from "react-i18next";
import axios from "axios";


const Constitution = () => {
    const {id} = useParams()
    // const {response} = useFetch(base + docsUrl + `/category/${id}`);
    // console.log(response)

    const [response, setResponse] = useState([])
    console.log(response)
    const {i18n} = useTranslation()

    const getSliders = async () => {
        const res = await axios.get(base + docsUrl + `/category/${id}`)
        setResponse(res.data.category)

    }

    useEffect(() => {
        getSliders()
    },[])


    return (
        <div className="flex">
            <DocSidebar/>
        <div className="pl-[67px] h-auto">
            <div className="container mb-8">
                <BreadCrumb />
            </div>
            {response &&
                response.map( item => (
                <div className='flex items-center mt-4'>
                    <img src={arrow} alt='arrow' className='w-[3.5px] h-[7px]'/>
                    <NavLink to={`/constitution/${item.id}`} className='ml-[11px] font-medium text-base text-blue'>{item.title_ky}</NavLink>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Constitution;