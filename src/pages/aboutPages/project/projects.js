import React, {useState} from 'react';
import {BreadCrumb} from "../../../components/general/breadcrumb";
import {useFetch} from "../../../api/useFetch";
import {aboutUrl, base, uri, url} from "../../../api/const";
import InfoProject from "./infoProject";
import {useTranslation} from "react-i18next";
import InfoPartners from "../../cordinationPages/infoPartners";
import {ClipLoader} from "react-spinners";

const Projects = () => {
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const { isLoading, response } = useFetch(base + aboutUrl + '/project/');
    const {i18n} = useTranslation()

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

    const openModal = (id) => {
        setOpenRegisterModal(true)
        localStorage.setItem('project', id)
    }

    return (
      <div className="wrapper w-full h-[100%] pb-40 font-inter">
        <div className="container max-w-[1196px] mb-0">
          <BreadCrumb />
        </div>
        <div className="w-full flex flex-row flex-wrap 1sm:justify-center">
          {response &&
            response.map((item) => (
              <div key={item.id}>
                <div
                  className="w-[192px] h-[192px] m-auto py-2 mb-8 cursor-pointer shadow-lg transition-all hover:scale-125 even: mx-[26px]"
                  onClick={() => openModal(item.id)}
                >
                  <div className="h-[120px] w-[140px] overflow-hidden m-auto flex mb-2 p-2.5">
                    <img
                      src={uri + item.proj_image}
                      alt="img"
                      className="h-auto w-[100%] self-center"
                    />
                  </div>
                  {i18n.language === 'ky' && (
                    <p className="text-[13px] font-medium leading-[16px] text-blue text-center w-[182px]">
                      {item.title_ky.length > 70
                        ? item.title_ky.slice(0, 70) + '...'
                        : item.title_ky}
                    </p>
                  )}
                  {i18n.language === 'ru' && (
                    <p className="text-[13px] font-medium leading-[16px] text-blue text-center w-[182px]">
                      {item.title_ru.length > 70
                        ? item.title_ru.slice(0, 70) + '...'
                        : item.title_ru}
                    </p>
                  )}
                  {i18n.language === 'en' && (
                    <p className="text-[13px] font-medium leading-[16px] text-blue text-center w-[182px]">
                      {item.title_en.length > 70
                        ? item.title_en.slice(0, 70) + '...'
                        : item.title_en}
                    </p>
                  )}
                </div>
              </div>
            ))}
          {openRegisterModal && openRegisterModal && (
            <InfoProject
              openRegisterModal={openRegisterModal}
              setOpenRegisterModal={() => setOpenRegisterModal(false)}
            />
          )}
        </div>
      </div>
    );
};

export default Projects;