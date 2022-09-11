import React from 'react';
import giz from "../../assets/image/about/orgonization/giz 1.png";
import usaid from "../../assets/image/about/orgonization/usaid (1) 1.png"
import adb from "../../assets/image/about/orgonization/asian-devt-bank.png"
import wbg from "../../assets/image/about/orgonization/World_Bank.png"
import kfw from "../../assets/image/about/orgonization/kfw-group.png"
import ifc from "../../assets/image/about/orgonization/Inter-C-K.png"
import osce from "../../assets/image/about/orgonization/osce 1.png"
import jica from "../../assets/image/about/orgonization/Jica 1.png"


const CordinationList = () => {
    return (
        <div className='wrapper'>
            <div className='block text-base font-semibold mb-[36px]'>Список участников координационного совета:</div>
            <div className="flex items-center mb-[23px]">
                <img src={giz} alt='organization' className='shadow-org py-[13px] px-[30px] rounded-[12px] w-[291px] h-[86px] mr-[62px]'/>
                <p className="font-normal text-base">1. Deutsche Gesellschaft fur Internationale Zusammenarbeit (GIZ) GmbH</p>
            </div>
            <div className="flex items-center mb-[23px]">
                <img src={usaid} alt='organization' className='shadow-org py-[13px] px-[30px] rounded-[12px] w-[291px] h-[86px] mr-[62px]'/>
                <p className="font-normal text-base">2. Агентство США по международному развитию (USAID)</p>
            </div>
            <div className="flex items-center mb-[23px] ">
                <img src={adb} alt='organization' className='shadow-org py-[13px] px-[30px] rounded-[12px] w-[291px] h-[86px] mr-[62px]'/>
                <p className="font-normal text-base">3. Азиатский Банк Развития (ADB)</p>
            </div>
            <div className="flex items-center mb-[23px] mr-[100px]">
                <img src={wbg} alt='organization' className='shadow-org py-[13px] px-[30px] rounded-[12px] w-[291px] h-[86px] mr-[62px]'/>
                <p className="font-normal text-base">4. Всемирный Банк (WBG)</p>
            </div>
            <div className="flex items-center mb-[23px]">
                <img src={kfw} alt='organization' className='shadow-org py-[13px] px-[30px] rounded-[12px] w-[291px] h-[86px] mr-[62px]'/>
                <p className="font-normal text-base">5. Германский Банк Развития (KfW)</p>
            </div>
            <div className="flex items-center mb-[23px]">
                <img src={ifc} alt='organization' className='shadow-org py-[13px] px-[30px] rounded-[12px] w-[291px] h-[86px] mr-[62px]'/>
                <p className="font-normal text-base">6. Международная финансовая корпорация (IFC)</p>
            </div>
            <div className="flex items-center mb-[23px]">
                <img src={osce} alt='organization' className='shadow-org py-[13px] px-[30px] rounded-[12px] w-[291px] h-[86px] mr-[62px]'/>
                <p className="font-normal text-base">7. Программный офис ОБСЕ (OSCE)</p>
            </div>
            <div className="flex items-center mb-[70px] ">
                <img src={jica} alt='organization' className='shadow-org py-[13px] px-[30px] rounded-[12px] w-[291px] h-[86px] mr-[62px]'/>
                <p className="font-normal text-base">8. Японское агентство международного сотрудничества (JICA)</p>
            </div>
        </div>
    );
};

export default CordinationList;