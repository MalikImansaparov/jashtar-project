import React from 'react';
import Banner from "../components/main/banner";
import {News} from "../components/main/news";
import {Enroll} from "../components/main/enroll";
import {Events} from "../components/main/events";
import Volunter from "../components/main/volunter";
import Partners from "../components/main/partners";

const MainPage = () => {
    return (
        <>
            <Banner/>
            <News/>
            <Enroll/>
            <Events/>
            <Volunter/>
            <Partners/>
        </>
    );
};

export default MainPage;