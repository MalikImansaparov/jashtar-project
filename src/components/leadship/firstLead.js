import React, {useEffect, useState} from 'react';
import {RenderArrow} from "../../utils/arrow";
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, lead, uri} from "../../api/const";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ClipLoader} from "react-spinners";

const FirstLead = () => {
    const { isLoading, response } = useFetch(base + aboutUrl + '/staff/');
    const [state, setState] = useState(response)
    const {t, i18n} = useTranslation()

    useEffect(() => {
        setState(response)
    },[response])

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
      <div>
        <div className="wrapper justify-center align-middle relative">
          <div className="mt-[70px] absolute top-[10%] left-[10.5%]">
            <RenderArrow angle={239} lenght={800} width={'355px'} line={4} />
          </div>
                {response &&
                    response.filter(i => i.floor === 1 ).map( item => (
                        <div
                            className=" relative block shadow-sm w-[234px] h-[196px] bg-white rounded-2xl text-center shadow-2xl"
                            key={item.id}
                        >
                            <div className="h-[62px] w-[62px] overflow-hidden z-10 m-auto rounded-[50%] my-[14px] ">
                                <img
                                    src={uri + item.avatar_image}
                                    alt="cart-img"
                                    className=" h-auto w-[100%]"
                                />
                            </div>
                            {i18n.language === 'ky' &&
                            <div className="w-[193px] m-auto">
                                <p className="text-xs mb-1 font-normal text-blue">
                                    {item.full_name_ky}
                                </p>
                                <p className="description">
                                    {item.annotation_ky}
                                </p>
                            </div>}
                            {i18n.language === 'ru' &&
                            <div className="w-[193px] m-auto">
                                <p className="text-xs mb-1 font-normal text-blue">
                                    {item.full_name_ru}
                                </p>
                                <p className="description">
                                    {item.annotation_ru}
                                </p>
                            </div>}
                            {i18n.language === 'en' &&
                                <div className="w-[193px] m-auto">
                                    <p className="text-xs mb-1 font-normal text-blue">
                                        {item.full_name_en}
                                    </p>
                                    <p className="description">
                                        {item.annotation_en}
                                    </p>
                                </div>}
                            <Link to={`${item.id}`}>
                            <button className="absolute bottom-0 left-0 h-6 w-full bg-btnLight text-[11px] font-medium text-orange rounded-b-2xl">
                                {t("biography")}
                            </button>
                            </Link>
                        </div>
                    ))}
          <div className="mt-[70px] absolute top-[10%] right-[11.0%]">
            <RenderArrow angle={121.5} lenght={800} width={'350px'} line={4} />
          </div>
        </div>
        <div className="wrapper justify-center">
          <RenderArrow angle={230} lenght={130} width={'120px'} line={2} />
          <div className="flex justify-center w-[232px] pt-2">
            <RenderArrow angle={180} lenght={50} width={'35px'} line={1.2}/>
          </div>
          <RenderArrow angle={130} lenght={130} width={'120px'} line={2} />
        </div>
      </div>
    );
};

export default FirstLead;