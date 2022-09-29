import React, {useState} from 'react';
import {BreadCrumb} from "../../../components/general/breadcrumb";
import './timeline.css'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {useFetch} from "../../../api/useFetch";
import {aboutUrl, base, twoLead, uri, url} from "../../../api/const";
import {ClipLoader} from "react-spinners";
import {useTranslation} from "react-i18next";
import {createMarkup} from "../../../components/general/dompurify";

const TimeLine = () => {
    const { isLoading, response } = useFetch(base + aboutUrl + '/chronology/');
    const [tabIndex, setTabIndex] = useState(0);

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
                                    <p>{item.start_date.split("-").reverse().join("-")} : {item.finish_date.split("-").reverse().join("-")}</p>
                                    <p></p>
                                </Tab>
                            ))}
                    </TabList>
                                    {response && response.map(item => (
                                        <TabPanel key={item.id}>
                                            <div className='w-[867px] mx-[2px]'>
                                            <div className="flex flex-wrap justify-around">
                                        {item.chrono.map( item => (
                                            <div className="flex w-[370px] mb-4 shadow-sm p-3 rounded-[12px]" key={item.id}>
                                                <div className="h-[62px] w-[62px] overflow-hidden z-10 rounded-[50%] my-[14px] mr-4">
                                                    <img
                                                        src={uri + item.avatar_image}
                                                        alt="cart-img"
                                                        className=" h-auto w-[100%] "
                                                    />
                                                </div>
                                                {i18n.language === "ky" &&
                                                    <div className="w-[275px] m-auto ">
                                                        <p className="text-[12px] mb-1 fo t-normal text-blue">
                                                            {item.full_name_ky}
                                                        </p>
                                                        <p className="text-[11px] font-light">
                                                            {item.annotation_ky}
                                                        </p>
                                                    </div> }
                                                {i18n.language === "ru" &&
                                                    <div className="w-[275px] m-auto ">
                                                        <p className="text-[12px] mb-1 fo t-normal text-blue">
                                                            {item.full_name_ru}
                                                        </p>
                                                        <p className="text-[11px] font-light">
                                                            {item.annotation_ru}
                                                        </p>
                                                    </div> }
                                                {i18n.language === "en" &&
                                                    <div className="w-[275px] m-auto ">
                                                        <p className="text-[12px] mb-1 fo t-normal text-blue">
                                                            {item.full_name_en}
                                                        </p>
                                                        <p className="text-[11px] font-light">
                                                            {item.annotation_en}
                                                        </p>
                                                    </div> }
                                            </div>
                                        ))}
                                            </div>
                                                <div dangerouslySetInnerHTML={createMarkup(item.desc_ky)}></div>
                                            </div>
                                    </TabPanel>
                                ))}
                </Tabs>
            </div>
        </div>
    );
};

export default TimeLine;