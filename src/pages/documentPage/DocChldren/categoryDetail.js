import React, {useState} from 'react';
import pdf from "../../../assets/image/general/pdf.png";
import doc from "../../../assets/image/general/doc.png";
import download from "../../../assets/image/general/download.png";
import {useFetch} from "../../../api/useFetch";
import {base, docsUrl, lead} from "../../../api/const";
import {BreadCrumbs} from "../../../components/modules/breadcrumbs";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import {downloadFile, openPDFFile} from "../../../components/modules/downloadFile";
import SanitizedHTML from "react-sanitized-html";

const DocumentDetail = () => {
    const {id} = useParams()
    const {response} = useFetch(base + docsUrl + `/document/${id}`);
    const {t} = useTranslation()
    const [crumbs] = useState([
        t('documents'),
        '❯',
        t('constitutions'),
        '❯',
    ]);

    return (
        <div className='w-full flex'>
            <div className="ml-[63px] mb-[62px] max-w-[1220px] mt-16">
                {response &&
                    <div>
                        <BreadCrumbs crumbs={crumbs} title={response.title_ky} />
                        <div className="text-center">
                            <SanitizedHTML  html={response.title_ky}/>
                        </div>
                        <SanitizedHTML html={response.body_ky}  allowedAttributes={false}
                                       allowedTags={false}/>
                        <p className="text-base font-medium text-blue mb-[28px]">{t('download')}</p>
                        <div className='flex'>
                            <div className='w-[152px] cursor-pointer'>
                                <img src={pdf} alt='pdf'/>
                                <p className="text-[13px] font-normal mb-3 ">{response.doc.map(item => item.file_name)}</p>
                                <img src={download} alt='pdf' onClick={() => downloadFile(response.doc.map(item => item.file))}/>
                            </div>
                            <div className='w-[152px]'>
                                <img src={doc} alt='pdf'/>
                                <p className="text-[13px] font-normal mb-3">{response.doc.map(item => item.file_name)}</p>
                                <img src={download} alt='pdf' onClick={() => downloadFile(response.doc.map(item => item.file))}/>
                            </div>
                        </div>
                    </div>
                    }
            </div>
        </div>
    );
};

export default DocumentDetail;