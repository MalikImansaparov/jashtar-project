import React, {useState} from 'react';
import {BreadCrumb} from "../../../components/general/breadcrumb";
import pdf from "../../../assets/image/general/pdf.png";
import doc from "../../../assets/image/general/doc.png";
import download from "../../../assets/image/general/download.png";
import DocSidebar from "../docSidebar";
import {useFetch} from "../../../api/useFetch";
import {base, docsUrl, lead, mainUrl} from "../../../api/const";
import {BreadCrumbs} from "../../../components/modules/breadcrumbs";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import {downloadFile} from "../../../components/modules/downloadFile";

const DecreesDetail = () => {
    const {id} = useParams()
    const { response } = useFetch(base + docsUrl + `/documents/${id}`);
    const {t} = useTranslation()
    const [crumbs] = useState([
        t('documents'),
        '❯',
        t('decrees'),
        '❯',
    ]);

    return (
        <div className='w-full flex'>
            <DocSidebar className='h-full'/>
            <div className="ml-[63px] mb-[62px] max-w-[885px] mt-16">
                {response &&  response.map( res => (
                    <BreadCrumbs crumbs={crumbs} title={res.title} key={res.id}/>
                ))}
                <div className="text-center">
                    <p className='font-medium text-[18px] mb-3'>Закон Кыргызской Республики</p>
                    <p className='mb-4 text-base font-medium'>г. Бишкек, от 8 августа 2012 года N 153</p>
                    <div className="text-base font-semibold">О противодействии коррупции</div>
                </div>
                <p className="my-8">Настоящий Закон устанавливает основные принципы противодействия коррупции,
                    правовые и организационные основы предупреждения коррупции и борьбы с ней, минимизации,
                    ликвидации последствий коррупционных правонарушений, а также направлен на обеспечение национальной
                    безопасности Кыргызской Республики, защиту прав и свобод граждан и общественных интересов от угроз,
                    вытекающих из проявлений коррупции.
                </p>
                <p className="my-8">Настоящий Закон устанавливает основные принципы противодействия коррупции,
                    правовые и организационные основы предупреждения коррупции и борьбы с ней, минимизации,
                    ликвидации последствий коррупционных правонарушений, а также направлен на обеспечение национальной
                    безопасности Кыргызской Республики, защиту прав и свобод граждан и общественных интересов от угроз,
                    вытекающих из проявлений коррупции.
                </p>
                <p className="my-8">Настоящий Закон устанавливает основные принципы противодействия коррупции,
                    правовые и организационные основы предупреждения коррупции и борьбы с ней, минимизации,
                    ликвидации последствий коррупционных правонарушений, а также направлен на обеспечение национальной
                    безопасности Кыргызской Республики, защиту прав и свобод граждан и общественных интересов от угроз,
                    вытекающих из проявлений коррупции.
                </p>
                <p className="my-8">Настоящий Закон устанавливает основные принципы противодействия коррупции,
                    правовые и организационные основы предупреждения коррупции и борьбы с ней, минимизации,
                    ликвидации последствий коррупционных правонарушений, а также направлен на обеспечение национальной
                    безопасности Кыргызской Республики, защиту прав и свобод граждан и общественных интересов от угроз,
                    вытекающих из проявлений коррупции.
                </p>
                <p className="text-base font-medium text-blue mb-[28px]">Скачать файл:</p>
                <div className='flex'>
                    <div className='w-[152px]'>
                        <img src={pdf} alt='pdf'/>
                        <p className="text-[13px] font-normal mb-3">О противодействии коррупции</p>
                        <img src={download} alt='pdf' onClick={() => downloadFile()}/>
                    </div>
                    <div className='w-[152px]'>
                        <img src={doc} alt='pdf'/>
                        <p className="text-[13px] font-normal mb-3">О противодействии коррупции</p>
                        <img src={download} alt='pdf'/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DecreesDetail;