import React, {useEffect, useState} from 'react';
import {BreadCrumb} from "../components/general/breadcrumb";
import {SwiperSlide} from "swiper/react";
import {useFetch} from "../api/useFetch";
import {newsUrl, url} from "../api/const";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

const NewsPage = () => {
    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const { isLoading, response } = useFetch(newsUrl);

    const handlePageClick = async (data) => {
    //     console.log(data.selected);
    //     let currentPage = data.selected + 1;
    //     const commentsFormServer = await fetchComments(currentPage);
    //     setItems(commentsFormServer);
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
        <div className='wrapper'>
            <div className="container">
                <BreadCrumb />
            </div>
                <div className="wrapper flex justify-around flex-wrap m-auto">
                    {response &&
                        response.map((item) => (
                                <Link to={`${item.id}`} className="max-w-[384px] m-auto shadow-md rounded bg-white pb-4 mb-[62px] leading-5 cursor-pointer" key={item.id}>
                                    <img
                                        src={item.path}
                                        alt="cart-img"
                                        className="mb-3 h-[247px] w-[384px] rounded-t"
                                    />
                                    <div className="px-2.5">
                                        <p className="text-base mb-3 font-extrabold h-[38px] w-[324px] leading-[19px]">
                                            Стипендиальная программа для иностранных студентов
                                        </p>
                                        <p className="text-base font-normal w-[324px] h-[38px] grey overflow-y-hidden leading-[19px]">
                                            Программа разработана для талантливых иностранных студентов, желающих обу...
                                        </p>
                                        <div className="flex justify-between w-[324px] mt-4">
                                            <p className="text-sm font-medium text-grey">{item.date}</p>
                                            <Link to={`${item.id}`} className="text-blue underline cursor-pointer text-sm">
                                                Подробнее
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                        ))}
                </div>
            <div className="paginate">
            <ReactPaginate
                nextLabel="❯"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={5}
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