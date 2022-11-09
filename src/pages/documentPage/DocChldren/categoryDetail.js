import React, {useEffect, useState} from 'react';
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
import {createMarkup} from "../../../components/general/dompurify";
import {createMarkupDoc} from "../dompurifyDoc";

const DocumentDetail = () => {
    const {id} = useParams()
    const {isLoading, response} = useFetch(base + docsUrl + `/document/${id}/`);
    const {t, i18n} = useTranslation()

    const crumb = [
        t("documents"),
        '❯'
    ]

    const [crumbs, setCrumbs] = useState(crumb);
    const crumbSet = () => {
        setCrumbs(crumb)
    }

    useEffect(() => {
        crumbSet()
    }, [i18n.language]);




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


    return (
      <div className="wrapper text-justify">
        <div className="m-auto mb-[62px] max-w-[1220px] mt-16">
          {response && (
            <>
              {/* {i18n.language === 'ky' && (
                <> */}
              <BreadCrumbs crumbs={crumbs} title={response.title_ky} />
              <div className=" flex flex-wrap">
                <div
                  dangerouslySetInnerHTML={createMarkupDoc(response.body_ky)}
                ></div>
              </div>
              <div className="sm:mx-4">
                <p className="text-base font-medium text-blue mb-[28px]">
                  {t('download')}
                </p>
                <div className="max-w-[400px]">
                  <p className="text-[13px] font-normal mb-3 ">
                    {response.doc.map((item) => item.file_name)}
                  </p>
                </div>
                <div className="flex ">
                  <div
                    className="w-[152px] cursor-pointer "
                    onClick={() =>
                      downloadFile(response.doc.map((item) => item.file))
                    }
                  >
                    <img src={doc} alt="pdf" />
                    <img src={download} alt="pdf" className="ml-3" />
                  </div>
                </div>
              </div>
              {/* </>
              )} */}
              {/* {i18n.language === 'en' && (
                <>
                  <BreadCrumbs crumbs={crumbs} title={response.title_en} />
                  <div className=" flex flex-wrap">
                    <div
                      dangerouslySetInnerHTML={createMarkupDoc(
                        response.body_en
                      )}
                    ></div>
                  </div>
                  <div className="sm:mx-4">
                    <p className="text-base font-medium text-blue mb-[28px]">
                      {t('download')}
                    </p>
                    <div className="max-w-[400px]">
                      <p className="text-[13px] font-normal mb-3 ">
                        {response.doc.map((item) => item.file_name)}
                      </p>
                    </div>
                    <div className="flex ">
                      <div
                        className="w-[152px] cursor-pointer "
                        onClick={() =>
                          downloadFile(response.doc.map((item) => item.file))
                        }
                      >
                        <img src={doc} alt="pdf" />
                        <img src={download} alt="pdf" className="ml-3" />
                      </div>
                    </div>
                  </div>
                </>
              )} */}
              {/* {i18n.language === 'ru' && (
                <>
                  <BreadCrumbs crumbs={crumbs} title={response.title_en} />
                  <div className=" flex flex-wrap">
                    <div
                      dangerouslySetInnerHTML={createMarkupDoc(
                        response.body_en
                      )}
                    ></div>
                  </div>
                  <div className="sm:mx-4">
                    <p className="text-base font-medium text-blue mb-[28px]">
                      {t('download')}
                    </p>
                    <div className="max-w-[400px]">
                      <p className="text-[13px] font-normal mb-3 ">
                        {response.doc.map((item) => item.file_name)}
                      </p>
                    </div>
                    <div className="flex ">
                      <div
                        className="w-[152px] cursor-pointer "
                        onClick={() =>
                          downloadFile(response.doc.map((item) => item.file))
                        }
                      >
                        <img src={doc} alt="pdf" />
                        <img src={download} alt="pdf" className="ml-3" />
                      </div>
                    </div>
                  </div>
                </>
              )} */}
            </>
          )}
        </div>
      </div>
    );
};

export default DocumentDetail;