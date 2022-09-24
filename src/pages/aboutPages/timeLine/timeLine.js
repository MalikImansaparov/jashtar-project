import React from 'react';
import {BreadCrumb} from "../../../components/general/breadcrumb";
import './timeline.css'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {useFetch} from "../../../api/useFetch";
import {aboutUrl, base, twoLead, url} from "../../../api/const";
import {ClipLoader} from "react-spinners";
import {useTranslation} from "react-i18next";
import {Sanitized} from "../../../components/general/sanitize";

const TimeLine = () => {
    const { isLoading, response } = useFetch(base + aboutUrl + '/chronology/');
    const {t, i18n} = useTranslation()

    if (isLoading) {
        return (
            <div role="status" className='flex justify-center mt-28 pb-24'>
                <ClipLoader
                    color="#1985A1"
                    size={300}
                />
            </div>
        )
    }

    return (
        <div className="pb-[104px]">
            <div className="wrapper">
                <BreadCrumb/>
            </div>
            <div className="w-[1236px] m-auto">
                <Tabs>
                    <TabList>
                        {
                            response?.map(item => (
                                <Tab key={item.id}>
                                    <p> {item.date}</p>
                                </Tab>
                            ))}
                    </TabList>
                    {/*{response?.map(item => (*/}
                        <TabPanel >
                            <div className='w-[867px] mx-[52px]'>
                            <div className="flex flex-wrap">
                                {response && response.map(item => (
                                    <div key={item.id}>
                                <div className="flex w-[325px] mb-4 mr-[106px] shadow-sm p-3 rounded-[12px]">
                                <img
                                    src={item}
                                    alt="cart-img"
                                    className="my-[14px] h-[62px] w-[62px] m-auto rounded-[50%]"
                                />
                                    {i18n.language === "ky" &&
                                <div className="w-[193px] m-auto ">
                                    <p className="text-[12px] mb-1 fo t-normal text-blue">
                                        {item.full_name_ky}
                                    </p>
                                    <p className="text-[11px] font-light">
                                        {item.annotation_ky}
                                    </p>
                                </div> }
                                    {i18n.language === "ru" &&
                                        <div className="w-[193px] m-auto ">
                                            <p className="text-[12px] mb-1 fo t-normal text-blue">
                                                {item.full_name_ru}
                                            </p>
                                            <p className="text-[11px] font-light">
                                                {item.annotation_ru}
                                            </p>
                                        </div> }
                                    {i18n.language === "en" &&
                                        <div className="w-[193px] m-auto ">
                                            <p className="text-[12px] mb-1 fo t-normal text-blue">
                                                {item.full_name_en}
                                            </p>
                                            <p className="text-[11px] font-light">
                                                {item.annotation_en}
                                            </p>
                                        </div> }
                                </div>
                                        {i18n.language === "ky" &&
                                        <div>
                                        <p className="text-base text-blue font-extrabold mt-[62px]">*/}
                                                    {item.title_ky}
                                                </p>
                                                <p className="text-base  font-normal my-[32px]">
                                                    <Sanitized html={item.desk_ky}/>
                                                </p>
                                        </div>}
                                    </div>
                                ))}
                            </div>
                                {/*{response && response.map(item => (*/}
                                {/*<div className="" key={item.id}>*/}
                                {/*
                                {/*</div>*/}
                                {/*    ))}*/}
                            </div>
                        </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TimeLine;