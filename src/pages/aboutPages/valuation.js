import React from 'react';
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, uri, url} from "../../api/const";
import left from '../../assets/image/about/left.png'
import rigth from '../../assets/image/about/rigth.png'
import {BreadCrumb} from "../../components/general/breadcrumb";
import {ClipLoader} from "react-spinners";
import path from "../../assets/image/partners/1031036878_0_0_6016_3400_600x0_80_0_0_413f7b1b5ff473578023e30c42c5dc0f 2.png"
import {useTranslation} from "react-i18next";

const Valuation = () => {
    const { isLoading, response } = useFetch(base + aboutUrl + '/values/');
    const {i18n} = useTranslation()

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
      <div className="h-[100vh]">
        <div className="wrapper">
          <BreadCrumb />
        </div>
        {response &&
          response.map((item) => (
            <div
              className="flex w-[1236px] m-auto shadow-xl rounded px-8 py-4 bg-white"
              key={item.id}
            >
              <div className="m-auto w-[231px]">
                <img
                  src={uri + item.image}
                  alt="values"
                  className=" h-[131px] w-[231px] rounded mb-[10px] shadow-xl"
                />
                <p className="name">
                    {item.full_name_ky}
                </p>
                <p className="text-[11px] font-normal text-center px-[20px]">
                    {item.annotation_ky}
                </p>
              </div>
              <div className="ml-[32px] pt-[33px]">
                <div className="flex w-[857px] justify-center mb-4 min-h-[88px]">
                  <img src={left} alt="quotes" className="w-[27px] h-[24px]"/>
                  <p className="text-lg font-normal text-center mx-4 w-[709px]">
                      {item.quote_ky}
                  </p>
                  <img
                    src={rigth}
                    alt="quotes"
                    className="w-[27px] h-[24px] self-end"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="h-[62px]"></div>
      </div>
    );
};

export default Valuation;