import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import leader1 from '../../assets/image/about/akdn1.png'
import leader2 from '../../assets/image/about/akdn2.png'
import CordinationList from "./cordinationList";
import jashtar from "../../assets/image/general/Jashtar-logo.png"


export const UniversitySoviet = () => {
    return (
        <div>
            <div className='wrapper'>
                <div className="container w-[1196px]">
                    <BreadCrumb/>
                </div>
                <div className='text-blue text-base font-semibold mb-8'>
                    Студенческий совет КГЮА
                </div>
                <div className="flex justify-between w-full">
                    <div><img src={jashtar} alt='' className='w-[132px] h-[130px]'/></div>
                    <div className='flex items-center'>
                        <p className="w-[1024px] text-base font-normal leading-[19.3px]">
                            С 2001 года, АКДН поддерживает создание проектов и программ, которые помогают развивать экономически активный, социально благополучный, интеллектуально и культурно динамичный Кыргызстан. Соглашение о сотрудничестве, подписанное в 2001 году между Кыргызстаном и АКДН, и вскоре после этого, ратифицированное Жогорку Кенешом (Парламентом) формирует правовую основу для деятельности АКДН в Кыргызстане.
                        </p>
                    </div>
                </div>
                <div className="w-full text-base font-normal leading-[19.3px] my-8">Функционируя во всех 7 областях Кыргызстана в поддержку национальных приоритетов развития, агентства АКДН работают ради достижения общей цели повышения доступа к высококачественному образованию, создания экономических возможностей и финансовой инклюзивности, развития человеческого потенциала и инфраструктуры, а также укрепления гражданского общества и местного управления. В Кыргызстане агентства АКДН обеспечивают занятость более 1500 человек, большинство из которых являются местными гражданами.</div>
                <div className="flex w-full justify-between mb-[62px]">
                    <div className="flex w-[291px] shadow-sm p-3 rounded-[12px]">
                        <img
                            src={leader1}
                            alt="cart-img"
                            className="my-[14px] h-[62px] w-[62px] m-auto rounded-[50%]"
                        />
                        <div className="w-[193px] m-auto ">
                            <p className="text-[12px] mb-1 font-normal text-blue">
                                Баркат Фазал
                            </p>
                            <p className="text-[11px] font-light">
                                Глава Организации Ага Хана по развитию в Кыргызской Республике (АКДН)
                            </p>
                        </div>
                    </div>
                    <div className="flex w-[291px] shadow-sm p-3 rounded-[12px]">
                        <img
                            src={leader2}
                            alt="cart-img"
                            className="my-[14px] h-[62px] w-[62px] m-auto rounded-[50%]"
                        />
                        <div className="w-[193px] m-auto">
                            <p className="text-[12px] mb-1 font-normal text-blue">
                                Алтааф Хашам
                            </p>
                            <p className="text-[11px] font-light ">
                                Руководитель по вопросам программ и менеджмента представительства АКДН в КР
                            </p>
                        </div>
                    </div>
                    <div className="flex w-[291px] shadow-sm p-3 rounded-[12px]">
                        <img
                            src={leader2}
                            alt="cart-img"
                            className="my-[14px] h-[62px] w-[62px] m-auto rounded-[50%]"
                        />
                        <div className="w-[193px] m-auto">
                            <p className="text-[12px] mb-1 font-normal text-blue">
                                Алтааф Хашам
                            </p>
                            <p className="text-[11px] font-light ">
                                Руководитель по вопросам программ и менеджмента представительства АКДН в КР
                            </p>
                        </div>
                    </div>
                    <div className="flex w-[291px] shadow-sm p-3 rounded-[12px]">
                        <img
                            src={leader2}
                            alt="cart-img"
                            className="my-[14px] h-[62px] w-[62px] m-auto rounded-[50%]"
                        />
                        <div className="w-[193px] m-auto">
                            <p className="text-[12px] mb-1 font-normal text-blue">
                                Алтааф Хашам
                            </p>
                            <p className="text-[11px] font-light ">
                                Руководитель по вопросам программ и менеджмента представительства АКДН в КР
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <CordinationList/>
        </div>
    );
};

