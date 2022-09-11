import React, {useState} from 'react';
import {BreadCrumb} from "../components/general/breadcrumb";
import about from "../assets/image/main/about.png";
import dots from "../assets/image/main/Ellipse 1.png";
import {BreadCrumbs} from "../components/modules/breadcrumbs";
import {useParams} from "react-router-dom";
import {useFetch} from "../api/useFetch";
import {lead} from "../api/const";

const DetailEvents = () => {
    window.scroll(0,0)
    const {id} = useParams()
    const { response } = useFetch(lead);

    const [crumbs] = useState([
        'Событии',
        '❯',
        'Все событии',
        '❯',
    ]);

    return (
        <div className="w-full relative mb-[63px]">
            <div className='h-[232px] w-[38.7%] absolute top-[190px] left-0 rounded bg-[#3070B633] bg-gradient-jashtar'></div>
            <div className="wrapper">
                <div className="container mb-8 mt-16">
                    {response &&  response.map( res => (
                        <BreadCrumbs crumbs={crumbs} title={res.title} key={res.id}/>
                    ))}
                </div>
                {/*{response && response.map(item => ())}*/}
                <div className='flex mb-8 w-full'>
                    <img src={about} className='h-[287px] w-[432px] mr-[62px] z-10' alt='about'/>
                    <div>
                        <p className="font-semibold text-black text-[18px] mb-8">Республиканский Конгресс Молодежи Кыргызстана</p>
                        <p className="mb-8">Больше половины населения Кыргызстана составляют люди в возрасте до 25 лет, и почти треть населения представлена
                            людьми в возрасте от 15 до 25 лет. Молодёжь в Кыргызстане проживает в среде, где распространены бедность и безработица.
                            Это негативно отражается на более чем 40 процентах молодёжи: экономические возможности очень ограничены,
                            доступ к общественным услугам недостаточный и процветает коррупция.
                        </p>
                        <p>
                            После выводов исследования, указывающего на то, что молодые люди в Кыргызстане сталкиваются со множеством проблем,
                            ЮНИСЕФ запустил специальную молодёжную программу в 2010 году. Её цель в улучшении жизни молодёжи через развитие
                            их жизненных навыков и гражданской компетенции, а также через расширение прав и возможностей женщин и молодёжи
                            для участия в решении проблем, которые для них важны.
                        </p>
                    </div>
                </div>
                <p>В рамках программы была создана сеть из 32 молодёжных центров сразу после этнического конфликта для того, чтобы предоставить площадку
                    для молодёжи из разных групп – включая маргинализированные группы и меньшинства -  для взаимодействия и получения полезных навыков,
                    которые они могут применять для улучшения своей личной жизни и для оказания помощи своему сообществу.
                </p>
                <p>В рамках программы была создана сеть из 32 молодёжных центров сразу после этнического конфликта для того, чтобы предоставить площадку
                    для молодёжи из разных групп – включая маргинализированные группы и меньшинства -  для взаимодействия и получения полезных навыков,
                    которые они могут применять для улучшения своей личной жизни и для оказания помощи своему сообществу.
                </p>
                <p>В рамках программы была создана сеть из 32 молодёжных центров сразу после этнического конфликта для того, чтобы предоставить площадку
                    для молодёжи из разных групп – включая маргинализированные группы и меньшинства -  для взаимодействия и получения полезных навыков,
                    которые они могут применять для улучшения своей личной жизни и для оказания помощи своему сообществу.
                </p>
                <div className="w-[324px] my-[62px] text-sm font-medium">
                    <p className="text-grey flex">
                        <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                        <span>Дата:</span><span className='text-black '>&nbsp;12.02.2018</span>
                    </p>
                    <p className="text-grey flex">
                        <img src={dots} className="mr-[10px] w-[8px] h-[8px] mt-1" alt='dots'/>
                        Место проведения: <span className='text-black'>&nbsp;отель Orion</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailEvents;