import React, {useEffect, useState} from 'react';
import {useFetch} from "../../api/useFetch";
import {base, galeryUrl, mainUrl, uri, url} from '../../api/const'
import GalleryInfo from "./galleryInfo";
import ReactPaginate from "react-paginate";
import {useClickOutside} from "../../hooks/useOutside";
import {useTranslation} from "react-i18next";
import axios from "axios";

const PhotoPanel = () => {
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const [ref] = useClickOutside(() => setOpenRegisterModal(false))
    const { isLoading } = useFetch(base + galeryUrl + '/photo/');
    const [response, setResponse] = useState([])
    const [pageCount, setpageCount] = useState(0);
    const {t, i18n} = useTranslation()
    const limit = 6

    const getData = async () => {
        const res = await fetch(
            `${base}${galeryUrl}/photo/`
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
            `${base}${galeryUrl}/photo/?page=${count}`
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


    return (
        <div className="wrapper">
            <div className="grid grid-cols-3 gap-[32px] px-8 mt-8">
            {response.results && response.results.map((item) => (
                <div key={item.id} className="relative top-0 left-0 right-0 bottom-0 w-[379px] cursor-pointer" onClick={() =>  openModal(item.id)}>
                    <div className="w-[100%] inline-block relative">
                        <div className="cursor-pointer w-[100%] h-[269px] inline-block pointer-events-none overflow-hidden">
                            <img src={uri + item.gallery[0].image} alt="" className="h-[100%] w-[100%]" />
                        </div>
                            <div className="h-[52px] w-full bg-[#3b82f6] absolute bottom-1.5 left-0">
                    {i18n.language === 'ky' &&
                        <p className="p-4 font-semibold text-base text-white">{item.title_ky.length > 31 ? item.title_ky.slice(0, 31) + "..." : item.title_ky}
                            </p>
                    }
                    {i18n.language === 'ru' &&
                        <p className="p-4 font-semibold text-base text-white">{item.title_ru.length > 31 ? item.title_ru.slice(0, 31) + "..." : item.title_ru}
                        </p>
                    }
                    {i18n.language === 'en' &&
                        <p className="p-4 font-semibold text-base text-white">{item.title_en.length > 31 ? item.title_en.slice(0, 31) + "..."  : item.title_en}
                         </p>
                    }
                </div>
                </div>
                </div>
            ))}
                {openRegisterModal && (
                    <GalleryInfo
                        openRegisterModal={openRegisterModal}
                        setOpenRegisterModal={() => setOpenRegisterModal(false)}
                    />
                )}
            </div>
            <div className="paginate">
                {response.results && response.results.length >= 6 && (
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

export default PhotoPanel;