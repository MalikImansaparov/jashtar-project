import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import leader1 from '../../assets/image/about/akdn1.png'
import leader2 from '../../assets/image/about/akdn2.png'
import CordinationList from "./cordinationList";
import jashtar from "../../assets/image/general/Jashtar-logo.png"
import {useFetch} from "../../api/useFetch";
import {base, councilUrl, mainUrl, uri} from "../../api/const";
import {useTranslation} from "react-i18next";


export const UniversitySoviet = () => {
    const { isLoading, response } = useFetch(base + councilUrl + '/council_uniparticipant/');
    const {i18n} = useTranslation()
    return (

        <div>
            {response &&  response.map( item => (
            <div className='wrapper' key={item.id}>
                <div className="container w-[1196px]">
                    <BreadCrumb/>
                </div>
                {i18n.language === "ky" &&  <div>
                <div className='text-blue text-base font-semibold mb-8'>

                </div>
                <div className="flex justify-between w-full">
                    <div><img src={jashtar} alt='' className='w-[132px] h-[130px]'/></div>
                    <div className='flex items-center'>
                        <p className="w-[1024px] text-base font-normal leading-[19.3px]">
                            С 2001 года, АКДН поддерживает создание проектов и программ,
                        </p>
                    </div>
                </div>
                <div className="w-full text-base font-normal leading-[19.3px] my-8">Функционируя во всех 7 областях Кыргызстана</div>
                <div className="flex w-full justify-between mb-[62px]">
                    {/*{response && response(item => (*/}
                    {/*    <div className="flex w-[291px] shadow-sm p-3 rounded-[12px]" key={item.id}>*/}
                    {/*        <img*/}
                    {/*            src={uri + item.avatar_image}*/}
                    {/*            alt="cart-img"*/}
                    {/*            className="my-[14px] h-[62px] w-[62px] m-auto rounded-[50%]"*/}
                    {/*        />*/}
                    {/*        <div className="w-[193px] m-auto">*/}
                    {/*            <p className="text-[12px] mb-1 font-normal text-blue">*/}
                    {/*                {item.full_name_ky}*/}
                    {/*            </p>*/}
                    {/*            <p className="text-[11px] font-light ">*/}
                    {/*                {item.anotation_ky}*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*))}*/}
                </div>
                </div>
                }
            </div>
                ))}
            <CordinationList/>
        </div>
    );
};

