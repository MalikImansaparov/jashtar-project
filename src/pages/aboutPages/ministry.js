import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import bg from "../../assets/image/about/jashtar-bg.png";
import {useFetch} from "../../api/useFetch";
import {lead} from "../../api/const";

const Ministry = () => {
    const { isLoading, response } = useFetch(lead);

    const bgImageStyle = {
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover'
    }

    return (
        <div className="w-full h-[604px] relative z-0 pb-8" style={bgImageStyle}>
            <div className="absolute top-0 left-0 bg-gradient-ministry w-full h-[624px]" ></div>
            <div className='container w-[1196px] m-auto text-white text-base font-normal'>
            <div className="text-white ">
                <BreadCrumb/>
            </div>
            <p className="my-8 leading-[19.3px]">Министерство культуры, информации, спорта и молодежной политики Кыргызской Республики является государственным органом
                исполнительной власти, осуществляющим функции по разработке и реализации государственной политики в сфере культуры, информации, молодежи,
                спорта, физической культуры, туризма и межэтнических отношений.
            </p>
            <p className="leading-[19.3px]">Министерство в своей деятельности руководствуется Конституцией Кыргызской Республики, законами и иными нормативными правовыми актами Кыргызской Республики,
                международными договорами, участницей которых является Кыргызская Республика.
            </p>
            <p className="mt-[162px] mb-4 leading-[19.3px]">
                Для более подробной информации по поводу работы и деятельности, советуем посетить сайт Министерства культуры, информации, спорта и молодежной политики Кыргызской Республики:
            </p>
            <div onClick={() => window.open('https://minculture.gov.kg/', '_blank')} className='text-blue cursor-pointer z-100 absolute '>https://minculture.gov.kg/</div>
            </div>
        </div>
    );
};

export default Ministry;