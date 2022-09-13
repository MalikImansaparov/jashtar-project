import React, {useState} from 'react';
import {useFetch} from "../../api/useFetch";
import {base, uri, url} from '../../api/const'
import GalleryInfo from "./galleryInfo";
import ReactPaginate from "react-paginate";
import {useClickOutside} from "../../hooks/useOutside";

const PhotoPanel = () => {
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const [ref] = useClickOutside(() => setOpenRegisterModal(false))
    const { isLoading, response } = useFetch(base + uri + '/gallery_image/');


    const onOpen = () => {
        setOpenRegisterModal(true)
        document.body.style.overflow = "";
    }

    const title = "Фестиваль молодежи 2022! (+10 фото)"

    return (
        <div className="wrapper">
            <div className="grid grid-cols-3 gap-[32px] px-8 mt-8">
            {response && response.map((item) => (
                <div key={item.id} className="relative top-0 left-0 right-0 bottom-0 w-[379px] cursor-pointer" onClick={onOpen}>
                    <div className="w-[100%] inline-block relative">
                    <img src={uri + item.image} alt="" className=" cursor-pointer w-[100%] inline-block pointer-events-none" />
                <div className="h-[52px] w-full bg-[#3070B688] absolute bottom-0 left-0">
                    <p className="p-4 font-semibold text-base text-white">{title.length > 25 ? title.split('').splice(0, 35) : title}</p>
                </div>
                </div>
                </div>
            ))}
                {openRegisterModal && (
                    <GalleryInfo
                        openRegisterModal={openRegisterModal} ref={ref}
                        setOpenRegisterModal={() => setOpenRegisterModal(false)}
                    />
                )}
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

export default PhotoPanel;