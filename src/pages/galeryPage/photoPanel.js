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
    const { isLoading } = useFetch(base + galeryUrl + '/photo/');
    const [response, setResponse] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const { t, i18n } = useTranslation();
    const limit = 6;

    const getData = async () => {
      const res = await fetch(`${base}${galeryUrl}/photo/`);
      const data = await res.json();
      const total = data.count;
      setpageCount(Math.ceil(total / limit));
      setResponse(data);
    };

    useEffect(() => {
      getData();
    }, [limit]);

    const paginateData = async (count) => {
      const res = await fetch(`${base}${galeryUrl}/photo/?page=${count}`);
      const data = await res.json();
      return data;
    };

    const handlePageClick = async (data) => {
      if (data.selected > 0) {
        let currentPage = data.selected + 1;
        const paginateServer = await paginateData(currentPage);
        setResponse(paginateServer);
      } else {
        const paginateServer = await paginateData(1);
        setResponse(paginateServer);
      }
    };

    const openModal = (id) => {
      setOpenRegisterModal(true);
      localStorage.setItem('id', id);
    };

    return (
      <div className="">
        <div className="flex flex-wrap mt-8 2lg:justify-center">
          {response.results &&
            response.results.map((item) => (
              <div
                key={item.id}
                className="relative top-0 left-0 right-0 bottom-0 max-w-[379px] xl:max-w-[329px] md:max-w-[379px] xs:max-w-[329px] cursor-pointer mb-4 mx-3"
                onClick={() => openModal(item.id)}
              >
                <div className="w-[100%] inline-block relative">
                  <div className="cursor-pointer w-[100%] h-[269px] xl:h-[219px] md:h-[269px] xs:h-[219px] inline-block pointer-events-none overflow-hidden">
                    <img
                      src={uri + item.gallery[0].image}
                      alt=""
                      className="h-[100%] w-[100%]"
                    />
                  </div>
                  <div className="h-[52px] w-full overflow-hidden bg-[#3b82f6] absolute bottom-1.5 left-0 p-3">
                    {i18n.language === 'ky' && (
                      <p className="font-semibold text-base text-white h-[32px] overflow-hidden">
                        {item.title_ky.length > 31
                          ? item.title_ky.slice(0, 31) + '...'
                          : item.title_ky}
                      </p>
                    )}
                    {i18n.language === 'ru' && (
                      <p className="font-semibold text-base text-white h-[32px] overflow-hidden">
                        {item.title_ru.length > 31
                          ? item.title_ru.slice(0, 31) + '...'
                          : item.title_ru}
                      </p>
                    )}
                    {i18n.language === 'en' && (
                      <p className="font-semibold text-base text-white h-[32px] overflow-hidden">
                        {item.title_en.length > 31
                          ? item.title_en.slice(0, 31) + '...'
                          : item.title_en}
                      </p>
                    )}
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
        <div className="paginate mt-8">
          <ReactPaginate
            nextLabel="???"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="???"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            containerClassName="paginGallery"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    );
};

export default PhotoPanel;