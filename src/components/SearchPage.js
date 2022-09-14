import React, {useEffect, useState} from 'react';

// import {instance} from "../api/const";

import {instance} from "../api/const";

import path
    from "../assets/image/partners/1031036878_0_0_6016_3400_600x0_80_0_0_413f7b1b5ff473578023e30c42c5dc0f 2.png";
import {useFetch} from "../api/useFetch";
import {url} from "../api/const"

const SearchPage = ({value}) => {
    const [items, setItems] = useState('')
    const {response} = useFetch(url)

    const searchMaterial = async (value) => {

        // try {
        //     const response = await instance.get(`/work/search/?search=${value}`);
        //     return setItems(response.data);
        // } catch (error) {
        //     return console.log(error);
        // }

        try {
            const response = await instance.get(`/work/search/?search=${value}`);
            return setItems(response.data);
        } catch (error) {
            return console.log(error);
        }
    };

    useEffect(() => {
        searchMaterial(value)
    },[])

    if (response.length === 0) {
        return (
            <div role="status" className='wrapper mt=[62px]'>
                Материл не найден
            </div>
        )
    }

    return (
        <div className="wrapper py-[62px]">
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
                        </div>
                        <div className="ml-[32px] pt-[33px]">
                            <p className="text-[16px] mb-1 font-medium text-blue">
                                Жаманкулов Азамат Капарович
                            </p>
                            <div className="flex w-[857px] mb-4 min-h-[88px]">
                                <p className="text-[14px] font-normal mx-4 w-[809px]">
                                    Молодежь должна быть воспитана на благородных традициях. Традиция – это не мертвая реликвия прошлого. Это –
                                    боевое могучее оружие, выкованное и отточенное в прошлом для великих битв настоящего и будущего.
                                </p>

                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default SearchPage;