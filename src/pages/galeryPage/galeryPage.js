import './gallery.css'
import React, { useState } from 'react';
import VideoPanel from "./videoPanel";
import PhotoPanel from "./photoPanel";
import {BreadCrumb} from "../../components/general/breadcrumb";

const GaleryPage = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Фото',
            component: <PhotoPanel/>,
        },
        {
            id: 2,
            tabTitle: 'Видео',
            component: <VideoPanel/>
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }


    return (
        <div className='wrapper h-auto'>
            <div className="container w-full">
                <BreadCrumb />
            </div>
            <div className='tabs w-[100%] mb-8 '>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`}
                     className="w-[50%]" onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content w-[100%] mb-[62px] h-[1700px]'>
                {tabs.map((tab, i) =>
                <div key={i}>
                    {currentTab === `${tab.id}` && <div className="w-full">{tab.component}</div>}
                </div>
                )}
            </div>
        </div>
    );
}

export default GaleryPage;
