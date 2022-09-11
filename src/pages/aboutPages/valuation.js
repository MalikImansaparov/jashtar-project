import React from 'react';
import {useFetch} from "../../api/useFetch";
import {url} from "../../api/const";
import left from '../../assets/image/about/left.png'
import rigth from '../../assets/image/about/rigth.png'
import {BreadCrumb} from "../../components/general/breadcrumb";
import {ClipLoader} from "react-spinners";
import path from "../../assets/image/partners/1031036878_0_0_6016_3400_600x0_80_0_0_413f7b1b5ff473578023e30c42c5dc0f 2.png"

const Valuation = () => {
    const { isLoading, response } = useFetch(url)

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
      <div className="mb-[56px] relative">
        <div className="wrapper">
          <BreadCrumb />
        </div>
        {response &&
          response.map((item) => (
            <div
              className="flex w-[1236px] m-auto shadow-md rounded px-8 mb-8 bg-white"
              key={item.id}
            >
              <div className="m-auto w-[231px]">
                <img
                  src={path}
                  alt="values"
                  className=" h-[131px] w-[231px] rounded mb-[10px]"
                />
                <p className="name">
                    Жаманкулов Азамат Капарович
                </p>
                <p className="text-[11px] font-normal mb-4 text-center px-[20px]">
                    Министр культуры, информации, спорта и молодежной политики Кыргызской Республики
                </p>
              </div>
              <div className="ml-[32px] pt-[33px]">
                {/* <p className="text-base text-blue font-semibold mb-1.5 justify-start">
                  {item.title}
                </p>
                <p className="text-sm font-normal grey mb-[33px]">
                  {item.title}
                </p> */}
                <div className="flex w-[857px] justify-center mb-4 min-h-[88px]">
                  <img src={left} alt="quotes" className="w-[27px] h-[24px]"/>
                  <p className="text-lg font-normal text-center mx-4 w-[709px]">
                      Молодежь должна быть воспитана на благородных традициях. Традиция – это не мертвая реликвия прошлого. Это –
                      боевое могучее оружие, выкованное и отточенное в прошлом для великих битв настоящего и будущего.
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