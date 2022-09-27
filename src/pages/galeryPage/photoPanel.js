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

    return (
        <div className="wrapper">
            <div className="grid grid-cols-3 gap-[32px] px-8 mt-8">
            {response && response.results.map((item) => (
                <div key={item.id} className="relative top-0 left-0 right-0 bottom-0 w-[379px] cursor-pointer" onClick={() =>  setOpenRegisterModal(true)}>
                    <div className="w-[100%] inline-block relative">
                    <img src={uri + item.gallery[0].image} alt="" className=" cursor-pointer w-[100%] inline-block pointer-events-none" />
                <div className="h-[52px] w-full bg-[#3070B688] absolute bottom-0 left-0">
                    {i18n.language === 'ky' &&
                        <p className="p-4 font-semibold text-base text-white">{item.title_ky.length > 25 ? item.title_ky.split('').splice(0, 25) : item.title_ky}
                            <span> ( {item.gallery.length} {t("photo")} )</span></p>
                    }
                    {i18n.language === 'ru' &&
                        <p className="p-4 font-semibold text-base text-white">{item.title_ru.length > 25 ? item.title_ru.split('').splice(0, 25) : item.title_ru}
                            <span> ( {item.gallery.length} {t("photo")} )</span></p>
                    }
                    {i18n.language === 'en' &&
                        <p className="p-4 font-semibold text-base text-white">{item.title_en.length > 25 ? item.title_en.split('').splice(0, 25) : item.title_en}
                            <span> ( {item.gallery.length} {t("photo")} )</span></p>
                    }
                </div>
                </div>
                    {openRegisterModal && (
                        <GalleryInfo
                            id={item.id}
                            openRegisterModal={openRegisterModal}
                            setOpenRegisterModal={() => setOpenRegisterModal(false)}
                        />
                    )}
                </div>
            ))}

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