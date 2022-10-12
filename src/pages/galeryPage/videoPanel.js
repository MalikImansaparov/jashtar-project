import React, {useEffect, useState} from 'react';
import {useFetch} from "../../api/useFetch";
import {base, galeryUrl, uri, url} from "../../api/const";
import point from '../../assets/image/general/point.png'
import VideoInfo from "./videoInfo";
import ReactPaginate from "react-paginate";
import {useTranslation} from "react-i18next";
import {ClipLoader} from "react-spinners";

const VideoPanel = () => {
    window.scroll(0,0)
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const { isLoading} = useFetch(base + galeryUrl + '/video/');
    const [response, setResponse] = useState([])
    const [pageCount, setpageCount] = useState(0);
    const {t, i18n} = useTranslation()
    const limit = 6

    const getData = async () => {
            const res = await fetch(
                `${base}${galeryUrl}/video/`
            );
            const data = await res.json();
            const total = data.count
            setpageCount(Math.ceil(total / limit));
            setResponse(data);
    }

    useEffect(() => {
        getData()
    },[limit])

    const paginateData = async (count) => {
        const res = await fetch(
            `${base}${galeryUrl}/video/?page=${count}`
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

    const openModal = (id) => {
        setOpenRegisterModal(true)
        localStorage.setItem('id', id)
    }

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
        <div className="wrapper text-justify">
        <div className='flex flex-wrap justify-between mt-[62px]'>
            {response.results && response.results.map((item) => (
                <div className='mb-[62px] shadow-md rounded-md w-[580px]' onClick={() => openModal(item.id)} key={item.id}>
                    <iframe
                        width="580"
                        height="326"
                        src={item.video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                    <div className="p-4 cursor-pointer">
                        {i18n.language === "ky" &&
                            <p className='text-[18px] font-normal'>{item.title_ky}</p>
                        }
                        {i18n.language === "ru" &&
                            <p className='text-[18px] font-normal'>{item.title_ru}</p>
                        }
                        {i18n.language === "en" &&
                            <p className='text-[18px] font-normal'>{item.title_en}</p>
                        }
                    <div className="flex items-center mt-2">
                        <img src={point} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                        <span>{t('date')}</span><span className='text-black '>&nbsp;{item.date.split('-').reverse().join('-')}</span>
                    </div>
                    </div>
                </div>
                ))}
            {openRegisterModal && openRegisterModal && (
                <VideoInfo
                    openRegisterModal={openRegisterModal}
                    setOpenRegisterModal={() => setOpenRegisterModal(false)}
                />
            )}
        </div>
            <div className="paginate">
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
            </div>
        </div>
    );
};

export default VideoPanel;