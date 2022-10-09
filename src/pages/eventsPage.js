import React, {useEffect, useState} from 'react';
import dots from "../assets/image/main/Ellipse 1.png";
import {ClipLoader} from "react-spinners";
import {useFetch} from "../api/useFetch";
import {base, docsUrl, eventsUrl, mainUrl, newsUrl, uri, url} from "../api/const";
import {BreadCrumb} from "../components/general/breadcrumb";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../components/general/sanitize";

const EventsPage = () => {
    const { isLoading} = useFetch(base + eventsUrl + `/events/`);
    window.scroll(0,0)
    const [response, setResponse] = useState([])
    const [pageCount, setpageCount] = useState(0);
    const {t, i18n} = useTranslation()
    const limit = 9

    const getData = async () => {
        const res = await fetch(
            `${base}${eventsUrl}/events/`
        );
        const data = await res.json();
        setpageCount(Math.ceil(data.count / limit));
        setResponse(data);
    }

    useEffect(() => {
        getData()
    },[limit])

    const paginateData = async (count) => {
        const res = await fetch(
            `${base}${eventsUrl}/events/?page=${count}`
        );
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {
        if( data.selected > 0 ){
            let currentPage = data.selected + 1;
            const paginateServer = await paginateData(currentPage);
            setResponse(paginateServer);
        } else {
            paginateData()
        }
    };


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
        <div className="wrapper font-inter">
            <div className="container w-[1196px]">
                <BreadCrumb />
            </div>
            <div className="flex justify-around flex-wrap text-justify">
                {response.results &&
                    response.results.map((item) => (
                            <Link to={`${item.id}`} className="max-w-[484px] max-h-[419px] shadow-lg rounded bg-white pb-4 leading-5 mb-[62px] cursor-pointer hover:shadow-2xl" key={item.id}>
                                <div className="mb-3 h-[247px] w-[384px] overflow-hidden rounded-t">
                                    <img
                                        src={uri + item.preview_image}
                                        alt="cart-img"
                                        className="h-auto w-[100%] rounded-t"
                                    />
                                </div>
                                {i18n.language === "ky" &&
                                    <div className="px-2.5">
                                        <p className="text-base mb-3 font-extrabold max-h-[38px] w-[324px] overflow-y-hidden leading-[19px]">
                                            {item.title_ky.length > 60 ? item.title_ky.slice(0, 60) + "..." : item.title_ky}
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
                                                {t('location')}<span className='text-black'>&nbsp;{item.location_ky.length > 20
                                                ? item.location_ky.slice(0, 20) + "..." : item.location_ky}}</span>
                                            </p>
                                        </div>
                                    </div>
                                }
                                {i18n.language === "ru" &&
                                    <div className="px-2.5">
                                        <p className="text-base mb-3 font-extrabold max-h-[38px] w-[324px] overflow-y-hidden leading-[19px]">
                                            {item.title_ru.length > 60 ? item.title_ru.slice(0, 60) + "..." : item.title_ru}
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
                                                {t('location')}<span className='text-black'>&nbsp;{item.location_ru.length > 20
                                                ? item.location_ru.slice(0, 20) + "..." : item.location_ru}}</span>
                                            </p>
                                        </div>
                                    </div>
                                }
                                {i18n.language === "en" &&
                                    <div className="px-2.5">
                                        <p className="text-base mb-3 font-extrabold max-h-[38px] w-[324px] overflow-y-hidden leading-[19px]">
                                            {item.title_en.length > 60 ? item.title_en.slice(0, 60) + "..." : item.title_en}
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
                                                {t('location')}<span className='text-black'>&nbsp;{item.location_en.length > 20
                                                ? item.location_en.slice(0, 20) + "..." : item.location_en}}</span>
                                            </p>
                                        </div>
                                    </div>
                                }
                            </Link>
                    ))}
            </div>
            <div className="paginate">
                {response.results && response.results.length >= 9 && (
                <ReactPaginate
                    nextLabel="❯"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
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
                    )}
            </div>
        </div>
    );
};

export default EventsPage;