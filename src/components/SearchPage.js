import React, {useEffect, useState} from 'react';
import {base, instance, searchUrl} from "../api/const";
import axios from "axios";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";

const SearchPage = () => {
    const value = localStorage.getItem('search')
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    const {t} = useTranslation()

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
    },[value])

    return (
        <div className="wrapper py-[62px]">
            {items &&
                    <div
                        className="flex w-[1236px] m-auto shadow-md rounded px-8 mb-8 bg-white"
                    >
                        <div className="ml-[32px] py-6">
                            <div className="w-[1100px] mb-4 min-h-[88px]">
                                {items.length === 0 &&
                                    <div>
                                        <p className="my-16 text-[20px]">{t('notFound')}</p>
                                    </div>
                                    }

                                   { items.docs && items.docs.map(item => (
                                        <div onClick={() => window.history.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
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




