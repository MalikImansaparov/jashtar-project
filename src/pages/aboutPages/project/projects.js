import React, {useState} from 'react';
import {BreadCrumb} from "../../../components/general/breadcrumb";
import lotte from "../../../assets/image/about/partners/롯데.png";
import {useFetch} from "../../../api/useFetch";
import {aboutUrl, base, councilUrl, uri, url} from "../../../api/const";
import InfoProject from "./infoProject";
import {useTranslation} from "react-i18next";

const Projects = () => {
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const { isLoading, response } = useFetch(base + councilUrl + '/partner/');
    const {i18n} = useTranslation()

    return (
        <div className='wrapper w-full pb-16'>
            <div className="container w-[1196px]">
                <BreadCrumb/>
            </div>
            <div className='w-full flex justify-around flex-row flex-wrap'>
                {response && response.map(item => (
                    <>
                        <div className="w-[192px] h-[218px] mb-8 cursor-pointer transition-all hover:scale-125 " onClick={() => setOpenRegisterModal(true)}
                        >
                            <div className='w-full h-[160px] rounded shadow-partner flex justify-center items-center mb-[10px] cursor-pointer' key={item.id} >
                                <img src={uri + item.org_image} alt='img'/>
                            </div>
                            {i18n.language === "ky" &&
                                <p className='text-[13px] font-medium leading-[16px] text-blue text-center w-[182px]'>{item.title_ky}</p>
                            }
                            {i18n.language === "ru" &&
                                <p className='text-[13px] font-medium leading-[16px] text-blue text-center w-[182px]'>{item.title_ru}</p>
                            }
                            {i18n.language === "en" &&
                                <p className='text-[13px] font-medium leading-[16px] text-blue text-center w-[182px]'>{item.title_en}</p>
                            }
                        </div>
                        {openRegisterModal && openRegisterModal && (
                            <InfoProject
                                id={item.id}
                                openRegisterModal={openRegisterModal}
                                setOpenRegisterModal={() => setOpenRegisterModal(false)}
                            />
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default Projects;