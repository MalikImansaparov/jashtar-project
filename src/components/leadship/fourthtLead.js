import React from 'react';
import {RenderArrow} from "../../utils/arrow";
import {useFetch} from "../../api/useFetch";
import {url} from "../../api/const";
import path from "../../assets/image/partners/Ellipse 2.png"
import {Link} from "react-router-dom";


export const FourthLead = () => {
    const { isLoading, response } = useFetch(url);

    return (
        <div className='mb-[92px] '>
            <div className="wrapper justify-between align-middle">
                {/*md: jc*/}
                {response &&
                    response.map((item) => (
                        <div
                            className="block shadow-sm w-[234px] h-[186px] bg-white rounded-2xl text-center"
                            key={item.id}
                        >
                            <img
                                src={path}
                                alt="cart-img"
                                className="my-[14px] h-[62px] w-[62px] m-auto rounded-[50%]"
                            />
                            <div className="w-[193px] m-auto">
                                <p className="text-xs mb-1 font-normal text-blue">
                                    Жаманкулов Азамат Капарович
                                </p>
                                <p className="text-[11px] font-light mb-[12px] leading-[13.31px]">
                                    Министр культуры, информации, спорта и молодежной политики Кыргызской Республики
                                </p>
                            </div>
                            <Link to=':id'>
                            <button className="h-6 w-full bg-btnLight font-medium text-xs text-orange rounded-b-2xl">
                                Биография
                            </button>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};
