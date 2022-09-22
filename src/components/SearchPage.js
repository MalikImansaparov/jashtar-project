import React, {useEffect, useState} from 'react';
import {base, instance, searchUrl} from "../api/const";
import axios from "axios";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";

const SearchPage = () => {
    const value = localStorage.getItem('search')
    const [items, setItems] = useState([])
    const {t, i18n} = useTranslation()

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
            {items.length === 0 &&
                <div className="flex w-[1236px] m-auto shadow-md rounded px-8 mb-8 bg-white">
                    <p className="my-16 text-[20px]">{t('notFound')}</p>
                </div>
            }
            {items &&
                    <div
                        className="flex w-[1236px] m-auto shadow-md rounded px-8 mb-8 bg-white"
                    >
                        <div className="ml-[32px] py-6">
                            <div className="w-[1100px] mb-4 min-h-[88px]">
                                {items.docs.length > 0 && <p className="font-semibold font-medium">{t('documents')}<span className="ml-1 text-blue">({items.docs.length})</span></p>}
                                   { items.docs && items.docs.map(item => (
                                       <div key={item.id} className="mb-4">
                                           {i18n.language === 'ky' &&
                                        <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                            {item.title_ky}
                                        </div>}
                                           {i18n.language === 'ru' &&
                                               <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                   {item.title_ru}
                                               </div>}
                                           {i18n.language === 'en' &&
                                               <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                   {item.title_en}
                                               </div>}
                                       </div>
                                    ))}
                                {items.events.length > 0 && <p className="font-semibold font-medium">{t('events')}<span className="ml-1 text-blue">({items.events.length})</span></p>}
                                { items.events && items.events.map(item => (
                                    <div key={item.id} className="mb-4">
                                        {i18n.language === 'ky' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ky}
                                            </div>}
                                        {i18n.language === 'ru' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ru}
                                            </div>}
                                        {i18n.language === 'en' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_en}
                                            </div>}
                                    </div>
                                ))}
                                {items.managment.length > 0 && <p className="font-semibold font-medium">{t('leadship')}<span className="ml-1 text-blue">({items.managment.length})</span></p>}
                                { items.managment && items.managment.map(item => (
                                    <div key={item.id} className="mb-4">
                                        {i18n.language === 'ky' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ky}
                                            </div>}
                                        {i18n.language === 'ru' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ru}
                                            </div>}
                                        {i18n.language === 'en' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_en}
                                            </div>}
                                    </div>
                                ))}
                                {items.news.length > 0 && <p className="font-semibold font-medium">{t('news')}<span className="ml-1 text-blue">({items.news.length})</span></p>}
                                { items.news && items.news.map(item => (
                                    <div key={item.id} className="mb-4">
                                        {i18n.language === 'ky' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ky}
                                            </div>}
                                        {i18n.language === 'ru' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ru}
                                            </div>}
                                        {i18n.language === 'en' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_en}
                                            </div>}
                                    </div>
                                ))}
                                {items.partner.length > 0 && <p className="font-semibold font-medium">{t('partners')}<span className="ml-1 text-blue">({items.partner.length})</span></p>}
                                { items.partner && items.partner.map(item => (
                                    <div key={item.id} className="mb-4">
                                        {i18n.language === 'ky' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ky}
                                            </div>}
                                        {i18n.language === 'ru' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ru}
                                            </div>}
                                        {i18n.language === 'en' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_en}
                                            </div>}
                                    </div>
                                ))}
                                {items.project.length > 0 && <p className="font-semibold font-medium">{t('projects')}<span className="ml-1 text-blue">({items.project.length})</span></p>}
                                { items.project && items.project.map(item => (
                                    <div key={item.id} className="mb-4">
                                        {i18n.language === 'ky' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ky}
                                            </div>}
                                        {i18n.language === 'ru' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ru}
                                            </div>}
                                        {i18n.language === 'en' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_en}
                                            </div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }
        </div>
    );
};

export default SearchPage;




