import React, {useEffect, useState} from 'react';
import {base, instance, searchUrl} from "../api/const";
import axios from "axios";
import {Link} from "react-router-dom";

const SearchPage = () => {
    const value = localStorage.getItem('search')
    const [items, setItems] = useState([])

    const searchMaterial = async (val) => {
        try {
            const response = await axios({
                method: 'post',
                url: base + searchUrl + "/search/",
                data: {
                    "body": `${val}`,
                }
            })
            return setItems(response.data);
        } catch (error) {
            return console.log(error);
        }
    };

    useEffect(() => {
        searchMaterial(value)
    },[])

    // if (response.length === 0) {
    //     return (
    //         <div role="status" className='wrapper mt=[62px]'>
    //             Материл не найден
    //         </div>
    //     )
    // }

    return (
        <div className="wrapper py-[62px]">
            {items &&
                    <div
                        className="flex w-[1236px] m-auto shadow-md rounded px-8 mb-8 bg-white"
                    >
                        <div className="ml-[32px] py-6">
                            <div className="w-[1100px] mb-4 min-h-[88px]">
                                   { items.docs && items.docs.map(item => (
                                        <div onClick={() => window.open(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                            {item.title_ky}
                                        </div>
                                    ))}
                                {/*{ items.managment && items.managment.map(item => (*/}
                                {/*    <div onClick={() => window.open(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">*/}
                                {/*        {item.title_en}*/}
                                {/*    </div>*/}
                                {/*))}*/}
                            </div>
                        </div>
                    </div>
                }
        </div>
    );
};

export default SearchPage;




