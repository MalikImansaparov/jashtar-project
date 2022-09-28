import React, {useEffect, useState} from 'react';
import dots from "../assets/image/main/Ellipse 1.png";
import {ClipLoader} from "react-spinners";
import {useFetch} from "../api/useFetch";
import {base, docsUrl, eventsUrl, mainUrl, uri, url} from "../api/const";
import {BreadCrumb} from "../components/general/breadcrumb";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {Sanitized} from "../components/general/sanitize";

const EventsPage = () => {
    const { isLoading, response } = useFetch(base + eventsUrl + `/events/`);
    window.scroll(0,0)
    // const [response, setResponse] = useState([])
    const {t, i18n} = useTranslation()
    //
    // const getData = async () => {
    //     const res = await axios.get(base + eventsUrl + '/events/')
    //     setResponse(res.data)
    // }
    //
    // useEffect(() => {
    //     getData()
    // },[])
    //
    if (isLoading) {
        return (
            <div role="status" className='flex justify-center my-28 pb-24'>
                <ClipLoader
                    color="#1985A1"
                    size={300}
                />
            </div>
        )
    }

    return (
        <div className="wrapper">
            <div className="container w-[1196px]">
                <BreadCrumb />
            </div>
            <div className="flex justify-around flex-wrap">
                {response &&
                    response.results.map((item) => (
                            <Link to={`${item.id}`} className="max-w-[484px] max-h-[419px]  shadow-md rounded bg-white pb-4 leading-5 mb-[62px] cursor-pointer" key={item.id}>
                                <img
                                    src={uri + item.preview_image}
                                    alt="cart-img"
                                    className="mb-3 h-[247px] w-[384px] rounded-t"
                                />
                                {i18n.language === "ky" &&
                                    <div className="px-2.5">
                                        <p className="text-base mb-3 font-extrabold max-h-[38px] w-[324px] leading-[19px]">
                                            {item.title_ky}
                                        </p>
                                        <p className="text-base font-normal w-[324px] max-h-[38px] grey overflow-y-hidden leading-[19px]">
                                            <Sanitized html={item.desc_ky}/>
                                        </p>
                                        <div className="w-[324px] my-4 text-sm font-medium">
                                            <p className="text-grey flex">
                                                <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                                                <span>{t('date')}</span><span className='text-black '>&nbsp;{item.event_date.split('-').reverse().join('-')}</span>
                                            </p>
                                            <p className="text-grey flex">
                                                <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                                                {t('location')}<span className='text-black'>&nbsp;{item.location_ky}</span>
                                            </p>
                                        </div>
                                    </div>
                                }
                                {i18n.language === "ru" &&
                                    <div className="px-2.5">
                                        <p className="text-base mb-3 font-extrabold max-h-[38px] w-[324px] leading-[19px]">
                                            {item.title_ru}
                                        </p>
                                        <p className="text-base font-normal w-[324px] max-h-[38px] grey overflow-y-hidden leading-[19px]">
                                            <Sanitized html={item.desc_ru}/>
                                        </p>
                                        <div className="w-[324px] my-4 text-sm font-medium">
                                            <p className="text-grey flex">
                                                <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                                                <span>{t('date')}</span><span className='text-black '>&nbsp;{item.event_date.split('-').reverse().join('-')}</span>
                                            </p>
                                            <p className="text-grey flex">
                                                <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                                                {t('location')}<span className='text-black'>&nbsp;{item.location_ru}</span>
                                            </p>
                                        </div>
                                    </div>
                                }
                                {i18n.language === "en" &&
                                    <div className="px-2.5">
                                        <p className="text-base mb-3 font-extrabold max-h-[38px] w-[324px] leading-[19px]">
                                            {item.title_en}
                                        </p>
                                        <p className="text-base font-normal w-[324px] max-h-[38px] grey overflow-y-hidden leading-[19px]">
                                            <Sanitized html={item.desc_en}/>
                                        </p>
                                        <div className="w-[324px] my-4 text-sm font-medium">
                                            <p className="text-grey flex">
                                                <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                                                <span>{t('date')}</span><span className='text-black '>&nbsp;{item.event_date.split('-').reverse().join('-')}</span>
                                            </p>
                                            <p className="text-grey flex">
                                                <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                                                {t('location')}<span className='text-black'>&nbsp;{item.location_en}</span>
                                            </p>
                                        </div>
                                    </div>
                                }
                            </Link>
                    ))}
            </div>
            <div className="paginate">
                <ReactPaginate
                    nextLabel="❯"
                    // onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={1}
                    previousLabel="❮"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
};

export default EventsPage;