import React from 'react';
import dots from "../assets/image/main/Ellipse 1.png";
import {ClipLoader} from "react-spinners";
import {useFetch} from "../api/useFetch";
import {url} from "../api/const";
import {BreadCrumb} from "../components/general/breadcrumb";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

const EventsPage = () => {
    const { isLoading, response } = useFetch(url);
    window.scroll(0,0)

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
                    response.map((item) => (
                            <Link to={`${item.id}`} className="max-w-[384px] max-h-[419px] m-auto shadow-md rounded bg-white pb-4 leading-5 mb-[62px] cursor-pointer" key={item.id}>
                                <img
                                    src={item.path}
                                    alt="cart-img"
                                    className="mb-3 h-[247px] w-[384px] rounded-t"
                                />
                                <div className="px-2.5">
                                    <p className="text-base mb-3 font-extrabold max-h-[38px] w-[324px] leading-[19px]">
                                        Стипендиальная программа для иностранных студентов
                                    </p>
                                    <p className="text-base font-normal w-[324px] max-h-[38px] grey overflow-y-hidden leading-[19px]">
                                        Программа разработана для талантливых иностранных студентов, желающих обу...</p>
                                    <div className="w-[324px] my-4 text-sm font-medium">
                                        <p className="text-grey flex">
                                            <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                                            <span>Дата:</span><span className='text-black '>&nbsp;{item.date}</span>
                                        </p>
                                        <p className="text-grey flex">
                                            <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                                            Место проведения: <span className='text-black'>&nbsp;отель Orion</span>
                                        </p>
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

export default EventsPage;