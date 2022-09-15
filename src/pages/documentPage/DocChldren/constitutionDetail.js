import React, {useState} from 'react';
import {BreadCrumb} from "../../../components/general/breadcrumb";
import pdf from "../../../assets/image/general/pdf.png";
import doc from "../../../assets/image/general/doc.png";
import download from "../../../assets/image/general/download.png";
import DocSidebar from "../docSidebar";
import {useFetch} from "../../../api/useFetch";
import {base, docsUrl, lead} from "../../../api/const";
import {BreadCrumbs} from "../../../components/modules/breadcrumbs";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import {downloadFile, openPDFFile} from "../../../components/modules/downloadFile";
import {Sanitized} from "../../../components/general/sanitize";
import SanitizedHTML from "react-sanitized-html";

const ConstitutionDetail = () => {
    const {id} = useParams()
    const {response} = useFetch(base + docsUrl + `/document/1`);
    const {t} = useTranslation()
    const [crumbs] = useState([
        t('documents'),
        '❯',
        t('constitution'),
        '❯',
    ]);

    return (
        <div className='w-full flex'>
            <DocSidebar className='h-full'/>
            <div className="ml-[63px] mb-[62px] max-w-[885px] mt-16">
                {/*{response &&  response.map( res => (*/}
                {/*    <BreadCrumbs crumbs={crumbs} title={res.title} key={res.id}/>*/}
                {/*))}*/}
                {/*{response && response.map(item => (*/}
                {response &&
                    response.map( item => (
                    <div >
                        <div className="text-center">
                            <SanitizedHTML  html={(item.title_ky)}/>
                        </div>}
                        <SanitizedHTML html={(item.body_ky)} allowedSchemes={[ 'data']}/>
                        <p className="text-base font-medium text-blue mb-[28px]">Скачать файл:</p>
                        <div className='flex'>
                            <div className='w-[152px] cursor-pointer'>
                                <img src={pdf} alt='pdf'/>
                                <p className="text-[13px] font-normal mb-3 ">О противодействии </p>
                                <img src={download} alt='pdf' onClick={() => downloadFile()}/>
                            </div>
                            <div className='w-[152px]'>
                                <img src={doc} alt='pdf'/>
                                <p className="text-[13px] font-normal mb-3">О противодействии коррупции</p>
                                <img src={download} alt='pdf'/>
                            </div>

                        </div>
                    </div>
                    ))}
            </div>
        </div>
    );
};

export default ConstitutionDetail;