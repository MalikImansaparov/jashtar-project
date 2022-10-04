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
    const { isLoading, response } = useFetch(base + galeryUrl + '/photo/');
    // const [response, setResponse] = useState([])
    const {t, i18n} = useTranslation()

    // const getData = async () => {
    //     const res = await axios.get(base + galeryUrl + '/photo/')
    //     setResponse(res.data)
    // }
    //
    // useEffect(() => {
    //     getData()
    // },[])
    const openModal = (id) => {
        setOpenRegisterModal(true)
        localStorage.setItem('id', id)
    }


    return (
        <div className="wrapper text-justify">
            <div className="grid grid-cols-3 gap-[32px] px-8 mt-8">
            {response && response.results.map((item) => (
                <div key={item.id} className="relative top-0 left-0 right-0 bottom-0 w-[379px] cursor-pointer" onClick={() =>  openModal(item.id)}>
                    <div className="w-[100%] inline-block relative">
                        <div className="cursor-pointer w-[100%] h-[269px] inline-block pointer-events-none overflow-hidden">
                            <img src={uri + item.gallery[0].image} alt="" className="h-[100%] w-[100%]" />
                        </div>
                            <div className="h-[52px] w-full bg-[#3b82f6] absolute bottom-1.5 left-0">
                    {i18n.language === 'ky' &&
                        <p className="p-4 font-semibold text-base text-white">{item.title_ky.length > 30 ? item.title_ky.split('').splice(0, 35) : item.title_ky}
                            </p>
                    }
                    {i18n.language === 'ru' &&
                        <p className="p-4 font-semibold text-base text-white">{item.title_ru.length > 35 ? item.title_ru.split('').splice(0, 35)  : item.title_ru}
                        </p>
                    }
                    {i18n.language === 'en' &&
                        <p className="p-4 font-semibold text-base text-white">{item.title_en.length > 35 ? item.title_en.split('').splice(0, 35)  : item.title_en}
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

            {/*<div className="paginate">*/}
            {/*    <ReactPaginate*/}
            {/*        nextLabel="❯"*/}
            {/*        // onPageChange={handlePageClick}*/}
            {/*        pageRangeDisplayed={3}*/}
            {/*        marginPagesDisplayed={2}*/}
            {/*        pageCount={5}*/}
            {/*        previousLabel="❮"*/}
            {/*        pageClassName="page-item"*/}
            {/*        pageLinkClassName="page-link"*/}
            {/*        previousClassName="page-item"*/}
            {/*        previousLinkClassName="page-link"*/}
            {/*        nextClassName="page-item"*/}
            {/*        nextLinkClassName="page-link"*/}
            {/*        containerClassName="pagination"*/}
            {/*        activeClassName="active"*/}
            {/*        renderOnZeroPageCount={null}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    );
};

export default PhotoPanel;