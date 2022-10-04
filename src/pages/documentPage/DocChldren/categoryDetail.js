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
import {ClipLoader} from "react-spinners";
import DOMPurify from 'dompurify'

const DocumentDetail = () => {
    const {id} = useParams()
    const {isLoading, response} = useFetch(base + docsUrl + `/document/${id}/`);
    const {t, i18n} = useTranslation()

    const [crumbs] = useState([
        t('documents'),
        '❯',
    ]);


    if (isLoading) {
        return (
            <div role="status" className='flex justify-center my-28 pb-24'>
                <ClipLoader
                    color="#1985A1"
                    size={300}
                />
            </div>
        )
    }

    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        };
    };

    return (
        <div className='w-full flex text-justify'>
            <div className="ml-[63px] mb-[62px] max-w-[1220px] mt-16">
                {response &&
                    <>
                    {i18n.language === "ky" &&
                    <>
                        <BreadCrumbs crumbs={crumbs} title={response.title_ky} />
                        <div className="flex text-center justify-center items-center">
                         <div dangerouslySetInnerHTML={createMarkup(response.body_ky)}></div>
                        </div>
                        <p className="text-base font-medium text-blue mb-[28px]">{t('download')}</p>
                        <div className="w-[400px]">
                            <p className="text-[13px] font-normal mb-3 ">{response.doc.map(item => item.file_name)}</p>
                        </div>
                        <div className='flex'>
                            <div className='w-[152px] cursor-pointer' onClick={() => downloadFile(response.doc.map(item => item.file))}>
                                <img src={doc} alt='pdf'/>
                                <img src={download} alt='pdf' className="ml-3"/>
                            </div>
                        </div>
                    </>
                    }
                        {i18n.language === "en" &&
                            <>
                                <BreadCrumbs crumbs={crumbs} title={response.title_en} />
                                <div className="flex text-center justify-center items-center">
                                    <div dangerouslySetInnerHTML={createMarkup(response.body_en)}></div>
                                </div>
                                <p className="text-base font-medium text-blue mb-[28px]">{t('download')}</p>
                                <div className="w-[400px]">
                                    <p className="text-[13px] font-normal mb-3 ">{response.doc.map(item => item.file_name)}</p>
                                </div>
                                <div className='flex'>
                                    <div className='w-[152px] cursor-pointer' onClick={() => downloadFile(response.doc.map(item => item.file))}>
                                        <img src={doc} alt='pdf'/>
                                        <img src={download} alt='pdf' className="ml-3"/>
                                    </div>
                                </div>
                            </>
                        }
                        {i18n.language === "ru" &&
                            <>
                                <BreadCrumbs crumbs={crumbs} title={response.title_ru} />
                                <div className="flex text-center justify-center items-center">
                                    <div dangerouslySetInnerHTML={createMarkup(response.body_ru)}></div>
                                </div>
                                <p className="text-base font-medium text-blue mb-[28px]">{t('download')}</p>
                                <div className='flex'>
                                    <div className='w-[152px] cursor-pointer'>
                                        <img src={pdf} alt='pdf' mb-3/>
                                        <img src={download} alt='pdf' onClick={() => downloadFile(response.doc.map(item => item))}/>
                                    </div>
                                    <div className='w-[152px] cursor-pointer'>
                                        <img src={doc} alt='pdf'/>
                                        <img src={download} alt='pdf' onClick={() => downloadFile(response.doc.map(item => item))}/>
                                    </div>
                                    <div className="text-[13px] font-normal ml-6">{response.doc.map(item => item.file_name)}</div>
                                </div>
                            </>
                        }
                    </>
                }
            </div>
        </div>
    );
};

export default DocumentDetail;