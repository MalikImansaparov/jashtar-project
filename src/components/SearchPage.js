import React, {useEffect, useState} from 'react';
import {base, instance, searchUrl} from "../api/const";
import axios from "axios";
import {useTranslation} from "react-i18next";

const SearchPage = () => {
    const value = localStorage.getItem('search')
    const [items, setItems] = useState(item)
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
            {/*{items && items.events.length === 0 && items.managment.length === 0 && items.news.length === 0 && items.partner.length === 0 && items.project.length === 0 && items.docs.length === 0 &&*/}
            {/*    items.events.length === 0 || items.managment.length === 0 || items.news.length === 0 || items.partner.length === 0 || items.project.length === 0 || items.docs.length === 0 &&*/}
            {/*    <div className="flex w-[1236px] m-auto shadow-md rounded px-8 mb-8 bg-white">*/}
            {/*        <p className="my-16 text-[20px]">{t('notFound')}</p>*/}
            {/*    </div>*/}
            {/*}*/}
            {items &&
                    <div
                        className="flex w-[1236px] m-auto shadow-md rounded px-8 mb-8 bg-white"
                    >
                        <div className="ml-[32px] py-6">
                            <div className="w-[1100px] mb-4 min-h-[88px]">
                                {items.docs && items.docs.length > 0 && <p className="font-semibold font-medium">{t('documents')}<span className="ml-1">({items.docs.length})</span></p>}
                                   { items.docs && items.docs.map((item, idx) => (
                                       <div key={idx} className="mb-4">
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
                                {items.events && items.events.length > 0 && <p className="font-semibold font-medium">{t('events')}<span className="ml-1">({items.events.length})</span></p>}
                                { items.events &&  items.events.map((item, idx) => (
                                    <div key={idx} className="mb-4">
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
                                {items.managment && items.managment.length > 0 && <p className="font-semibold font-medium">{t('leadship')}<span className="ml-1">({items.managment.length})</span></p>}
                                { items.managment &&   items.managment.map((item, idx) => (
                                    <div key={idx} className="mb-4">
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
                                {items.news && items.news.length > 0 && <p className="font-semibold font-medium">{t('news')}<span className="ml-1">({items.news.length})</span></p>}
                                { items.news && items.news.map((item, idx) => (
                                    <div key={idx} className="mb-4">
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
                                {items.partner && items.partner.length > 0 && <p className="font-semibold font-medium">{t('partners')}<span className="ml-1">({items.partner.length})</span></p>}
                                { items.partner &&  items.partner.map((item, idx) => (
                                    <div key={idx} className="mb-4">
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
                                {items.project && items.project.length > 0 && <p className="font-semibold font-medium">{t('projects')}<span className="ml-1">({items.project.length})</span></p>}
                                { items.project &&  items.project.map((item, idx) => (
                                    <div key={idx} className="mb-4">
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




