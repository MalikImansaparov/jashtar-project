import React, {useEffect, useState} from 'react';
import {base, instance, searchUrl} from "../api/const";
import axios from "axios";

const SearchPage = ({value}) => {
    // const [items, setItems] = useState([])
    //
    // const searchMaterial = async (value) => {
    //     try {
    //         const response = await axios({
    //             method: 'post',
    //             url: base + searchUrl + "/search/",
    //             data: {
    //                 "body": `${value}`,
    //             }
    //         })
    //         return setItems(response.data);
    //     } catch (error) {
    //         return console.log(error);
    //     }
    // };
    //
    // useEffect(() => {
    //     searchMaterial(props.props)
    // },[])

    // if (response.length === 0) {
    //     return (
    //         <div role="status" className='wrapper mt=[62px]'>
    //             Материл не найден
    //         </div>
    //     )
    // }

    return (
        <div className="wrapper py-[62px]">
            {value.val}
            {/*{items &&*/}
            {/*    items.map((item) => (*/}
            {/*        <div*/}
            {/*            className="flex w-[1236px] m-auto shadow-md rounded px-8 mb-8 bg-white"*/}
            {/*            key={item.id}*/}
            {/*        >{value}*/}
            {/*            /!*<div className="m-auto w-[231px]">*!/*/}
            {/*            /!*    <img*!/*/}
            {/*            /!*        src={path}*!/*/}
            {/*            /!*        alt="values"*!/*/}
            {/*            /!*        className=" h-[131px] w-[231px] rounded mb-[10px]"*!/*/}
            {/*            /!*    />*!/*/}
            {/*            /!*</div>*!/*/}
            {/*            <div className="ml-[32px] pt-[33px]">*/}
            {/*                <p className="text-[16px] mb-1 font-medium text-blue">*/}
            {/*                    { response.docs && response.docs.map(item => (*/}
            {/*                        <div key={item.id}>*/}
            {/*                            {item.title_ky}*/}
            {/*                        </div>*/}
            {/*                    ))}*/}
            {/*                </p>*/}
            {/*                /!*<div className="flex w-[857px] mb-4 min-h-[88px]">*!/*/}
            {/*                /!*    <p className="text-[14px] font-normal mx-4 w-[809px]">*!/*/}
            {/*                /!*        Молодежь должна быть воспитана на благородных традициях. Традиция – это не мертвая реликвия прошлого. Это –*!/*/}
            {/*                /!*        боевое могучее оружие, выкованное и отточенное в прошлом для великих битв настоящего и будущего.*!/*/}
            {/*                /!*    </p>*!/*/}

            {/*                /!*</div>*!/*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
        </div>
    );
};

export default SearchPage;




