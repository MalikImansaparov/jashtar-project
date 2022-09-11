import React, {useState} from 'react';
import {useFetch} from "../../api/useFetch";
import {url} from "../../api/const";
import point from '../../assets/image/general/point.png'
import GalleryInfo from "./galleryInfo";
import VideoInfo from "./videoInfo";
import ReactPaginate from "react-paginate";

const VideoPanel = () => {
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const { response } = useFetch(url);

    return (
        <div className="wrapper">
        <div className='flex flex-wrap justify-between mt-[62px]'>
            {response && response.map((item) => (
                <div className='mb-[62px] shadow-md rounded-md' onClick={() => setOpenRegisterModal(true)}>
                    <iframe
                        width="580"
                        height="326"
                        src={`https://www.youtube.com/embed/vQzb34h7mtY`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                    <div className="p-4 cursor-pointer">
                   <p className='text-[18px] font-normal'>Learn Adobe Illustrator | Free Course</p>
                    <div className="flex items-center">
                    <span className="mt-2 mb-3">30K views</span>
                    <img src={point} alt="" className="mx-4 border-[50%] w-[5px] h-[5px]"/>
                    <span className="text-sm font-normal ">3 days ago</span>
                    </div>
                    <div className="flex">
                        <img src={item.path} alt=""className="w-8 h-8 rounded-[50%]"/>
                        <p className="text-[18px] font-base pl-2">David White</p>
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

export default VideoPanel;