import React, {useState} from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import lotte from "../../assets/image/about/partners/롯데.png";
import p2 from "../../assets/image/partners/모드=정상 1 (1).png";
import p3 from "../../assets/image/partners/모드=정상 (1).png";
import p4 from "../../assets/image/partners/모드=정상-8 (1).png";
import {useFetch} from "../../api/useFetch";
import {base, councilUrl, url} from '../../api/const'
import InfoPartners from "./infoPartners";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

export const PartnersList = () => {
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const {response} = useFetch(base + councilUrl + `/partner/`);
    const {t, i18n} = useTranslation()
    return (
        <div className="w-[362px] bg-blueLight pt-[32px] text-grey active:border-b-2 border-fuchsia-600">
            {response && response.map( item => (
                <div className="w-[220px]" key={item.id}>
                    <NavLink to={`/category/${item.id}`} className={({ isActive }) =>
                        isActive ? 'activity link' : 'link'}>{item.title_ky}</NavLink>
                </div>
            ))}
        </div>
    );

    return (
        <div className='wrapper w-full pb-16'>
            <div className="container w-[1196px]">
                <BreadCrumb/>
            </div>
            <div className='w-full flex justify-around flex-row flex-wrap'>
                    {response && response.map(item => (
                            <div className="w-[192px] h-[218px] mb-8 cursor-pointer transition-all hover:scale-125 " onClick={() => setOpenRegisterModal(true)}
                              >
                                <div className='w-full h-[160px] rounded shadow-partner flex justify-center items-center mb-[10px] cursor-pointer' key={item.id} >
                                    <img src={lotte} alt='img' className=""/>
                                </div>
                                <p className='text-[13px] font-medium leading-[16px] text-blue text-center w-[162px]'>Международная финансовая корпорация (IFC)</p>
                            </div>
                    ))}
                {openRegisterModal && openRegisterModal && (
                    <InfoPartners
                        openRegisterModal={openRegisterModal}
                        setOpenRegisterModal={() => setOpenRegisterModal(false)}
                    />
                )}
            </div>
        </div>
    );
};

