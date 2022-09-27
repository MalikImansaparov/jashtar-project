import React, {useState} from 'react';
import {BreadCrumb} from "../../../components/general/breadcrumb";
import {useFetch} from "../../../api/useFetch";
import {aboutUrl, base, uri, url} from "../../../api/const";
import InfoProject from "./infoProject";
import {useTranslation} from "react-i18next";
import InfoPartners from "../../cordinationPages/infoPartners";

const Projects = () => {
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const { isLoading, response } = useFetch(base + aboutUrl + '/project/');
    const {i18n} = useTranslation()

    return (
        <div className='wrapper w-full pb-16'>
            <div className="container w-[1196px]">
                <BreadCrumb/>
            </div>
            <div className='w-full flex flex-row flex-wrap'>
                {response && response.map(item => (
                    <div key={item.id}>
                        <div className="w-[192px] h-[218px] mb-8 cursor-pointer transition-all hover:scale-125 even: mx-[26px] " onClick={() => setOpenRegisterModal(true)}
                        >
                            <div className='w-full h-[160px] rounded shadow-partner flex justify-center items-center mb-[10px] cursor-pointer' key={item.id} >
                                <img src={uri + item.proj_image} alt='img' className="h-[120px]"/>
                            </div>
                            {i18n.language === "ky" &&
                                <p className='text-[13px] font-medium leading-[16px] text-blue text-center w-[182px]'>{item.title_ky.length > 70 ? item.title_ky.slice(0, 70) + "..." : item.title_ky}</p>
                            }
                            {i18n.language === "ru" &&
                                <p className='text-[13px] font-medium leading-[16px] text-blue text-center w-[182px]'>{item.title_ru.length > 70 ? item.title_ru.slice(0, 70) + "..." : item.title_ru}</p>
                            }
                            {i18n.language === "en" &&
                                <p className='text-[13px] font-medium leading-[16px] text-blue text-center w-[182px]'>{item.title_en.length > 70 ? item.title_en.slice(0, 70) + "..." : item.title_en}</p>
                            }
                        </div>
                        {openRegisterModal && openRegisterModal && (
                            <InfoProject
                                id={item.id}
                                openRegisterModal={openRegisterModal}
                                setOpenRegisterModal={() => setOpenRegisterModal(false)}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;