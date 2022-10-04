import React, {useEffect, useState} from 'react';
import {useFetch} from "../../api/useFetch";
import {base, galeryUrl, uri, url} from "../../api/const";
import point from '../../assets/image/general/point.png'
import GalleryInfo from "./galleryInfo";
import VideoInfo from "./videoInfo";
import ReactPaginate from "react-paginate";
import {useClickOutside} from "../../hooks/useOutside";
import axios from "axios";
import {useTranslation} from "react-i18next";
import {ClipLoader} from "react-spinners";


const VideoPanel = () => {
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    // const { isLoading, response} = useFetch(base + galeryUrl + '/video/');
    const [response, setResponse] = useState([])
    const [pageCount, setpageCount] = useState(0);
    const {t, i18n} = useTranslation()
    const limit = 3

    const getData = async () => {
            const res = await fetch(
             'https://jashtar.prosoft.kg/ce387d5e0a2972dea9e5129a52ac3b8d58a4d180fc9eece5946d926643a3d2c0/video/'
            );
            const data = await res.json();
            const total = res.headers.get('x-total-count');
            setpageCount(Math.ceil(total / limit));
            setResponse(data);
    }

    useEffect(() => {
        getData()
    },[limit])

    const fetchComments = async (count) => {
        const res = await fetch(
            `https://jashtar.prosoft.kg/ce387d5e0a2972dea9e5129a52ac3b8d58a4d180fc9eece5946d926643a3d2c0/video/?page=${count}`
        );
        const data = await res.json();
        return data.results;
    };

    const handlePageClick = async (data) => {
            let currentPage = data.selected + 1;
            const commentsFormServer = await fetchComments(currentPage);
            setResponse(commentsFormServer);

    };

    const openModal = (id) => {
        setOpenRegisterModal(true)
        localStorage.setItem('id', id)
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
                   <p className='text-[18px] font-normal'>{item.title_ky}</p>
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

export default VideoPanel;