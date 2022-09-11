import React, {useEffect, useState} from 'react';
import about from "../../assets/image/main/news.png"
import {useParams} from "react-router-dom";
import {lead} from "../../api/const";
import {useFetch} from "../../api/useFetch";
import {BreadCrumbs} from "../modules/breadcrumbs";
import path from "../../assets/image/partners/1031036878_0_0_6016_3400_600x0_80_0_0_413f7b1b5ff473578023e30c42c5dc0f 2.png"

const InfoLeadership = () => {
    const {id} = useParams()
    const { response } = useFetch(lead);

    const [crumbs] = useState([
        'О нас',
        '❯',
        'Руководство',
        '❯',
        'Биография'
    ]);

    return (
        <div className="w-full relative pb-[63px]">
            <div className='h-[232px] w-[38.7%] absolute top-[190px] left-0 rounded bg-[#3070B633] bg-gradient-jashtar'></div>
            <div className="wrapper ">
                <div className="container mb-8 mt-16">
                        <BreadCrumbs crumbs={crumbs} />
                </div>
                {/*{response && response.map(item => ())}*/}
                <div className='flex mb-8 w-full'>
                    <img src={path} className='h-[287px] w-[432px] mr-[62px] z-10' alt='about'/>
                    <div className="">
                        <p className="font-base text-[18px] mb-[22px] text-blue">Жаманкулов Азамат Капарович</p>
                        <p className="font-base text-grey text-base mb-8">Министр культуры, информации, спорта и молодежной политики Кыргызской Республики
                        </p>
                        <p>
                            После выводов исследования, указывающего на то, что молодые люди в Кыргызстане сталкиваются со множеством проблем,
                            ЮНИСЕФ запустил специальную молодёжную программу в 2010 году. Её цель в улучшении жизни молодёжи через развитие
                            их жизненных навыков и гражданской компетенции, а также через расширение прав и возможностей женщин и молодёжи
                            для участия в решении проблем, которые для них важны.
                        </p>
                    </div>
                </div>
                <p className="w-full text-base font-semibold mb-[22px]">Трудовая деятелность:</p>
                <p className='font-normal text-base w-full '>2011-2013 гг. - исполнительный директор ОсОО «Риэлт Партнер»;
                </p>
                <p className='font-normal text-base w-full my-8'>2011-2013 гг. - исполнительный директор ОсОО «Риэлт Партнер»;
                </p>
                <p className='font-normal text-base w-full'>2011-2013 гг. - исполнительный директор ОсОО «Риэлт Партнер»;
                </p>
                <p className='font-normal text-base w-full my-8'>2011-2013 гг. - исполнительный директор ОсОО «Риэлт Партнер»;
                </p>
                <p className='font-normal text-base w-full'>2011-2013 гг. - исполнительный директор ОсОО «Риэлт Партнер»;
                </p>

            </div>
        </div>
    );
};

export default InfoLeadership;