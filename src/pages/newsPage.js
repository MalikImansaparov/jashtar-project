import React, {useEffect, useState} from 'react';
import {BreadCrumb} from "../components/general/breadcrumb";
import {SwiperSlide} from "swiper/react";
import {useFetch} from "../api/useFetch";
import {base, docsUrl, mainUrl, newsUrl, uri, url} from "../api/const";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {Sanitized} from "../components/general/sanitize";

const NewsPage = () => {
    const [pageCount, setpageCount] = useState(0);
    const {isLoading, response} = useFetch(base + newsUrl + `/news/`);
    const {t, i18n} = useTranslation()
    // const [response, setResponse] = useState([])
    // console.log(response)
    //
    // const getData = async () => {
    //     const res = await axios.get(base + newsUrl + '/news/')
    //     setResponse(res.data)
    // }
    //
    // useEffect(() => {
    //     getData()
    // },[])

    // const fetchComments = async (currentPage) => {
    //     const res = await fetch(
    //         `${baseURL}work?limit=${limit}&offset=${currentPage}`
    //     );
    //     const data = await res.json();
    //     return data.results;
    // };
    //
    // const handlePageClick = async (data) => {
    //     if( data.selected > 0 ){
    //         let currentPage = data.selected + 11;
    //         const commentsFormServer = await fetchComments(currentPage);
    //         setResponse(commentsFormServer);
    //     } else {
    //         getComments()
    //     }
    // };

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
        <div className='wrapper'>
            <div className="container">
                <BreadCrumb />
            </div>
                <div className="flex flex-wrap">
                    {response &&
                        response.results.map((item) => (
                                <Link to={`${item.id}`} className="max-w-[384px] m-auto shadow-lg rounded bg-white pb-4 mb-[62px] leading-5 cursor-pointer mx-3 hover:shadow-2xl" key={item.id}>
                                    <div className="mb-3 h-[247px] w-[384px] overflow-hidden rounded-t">
                                        <img
                                            src={uri + item.preview_image}
                                            alt="cart-img"
                                            className="h-auto w-[100%] rounded-t"
                                        />
                                    </div>
                                    <div className="px-2.5">
                                        {i18n.language === "ky" &&
                                        <>
                                            <p className="text-base mb-3 font-semibold w-[324px] h-[38px] text-black overflow-y-hidden leading-[19px]">
                                                {item.title_ky.length > 60 ? item.title_ky.slice(0, 60) +"..." : item.title_ky }
                                            </p>
                                            <p className="text-base font-normal w-[324px] h-[38px] grey overflow-y-hidden leading-[19px]">
                                                <Sanitized html={item.desc_ky}/>
                                            </p>
                                        </>}
                                        {i18n.language === "ru" &&
                                            <>
                                                <p className="text-base mb-3 font-semibold w-[324px] h-[38px] text-black overflow-y-hidden leading-[19px]">
                                                    {item.title_ru.length > 60 ? item.title_ru.slice(0, 60)+"..."  : item.title_ru}
                                                </p>
                                                <p className="text-base font-normal w-[324px] h-[38px] grey overflow-y-hidden leading-[19px]">
                                                    <Sanitized html={item.desc_ru}/>
                                                </p>
                                            </>}
                                        {i18n.language === "en" &&
                                            <>
                                                <p className="text-base mb-3 font-semibold w-[324px] h-[38px] text-black overflow-y-hidden leading-[19px]">
                                                    {item.title_en.length > 60 ? item.title_en.slice(0, 60)+"..." : item.title_en }
                                                </p>
                                                <p className="text-base font-normal w-[324px] h-[38px] grey overflow-y-hidden leading-[19px]">
                                                    <Sanitized html={item.desc_en}/>
                                                </p>
                                            </>}
                                        <div className="flex justify-between w-[324px] mt-4">
                                            <p className="text-sm font-medium text-grey">{item.news_date.split('-').reverse().join('-')}</p>
                                            <div className="text-blue underline cursor-pointer text-sm">
                                                {t("more")}
                                            </div>
                                        </div>
                                    </div>
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

export default NewsPage;