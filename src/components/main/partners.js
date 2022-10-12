import React from 'react';
import partn from '../../assets/image/main/200px-Emblem_of_Kyrgyzstan 1.png'
import {useTranslation} from "react-i18next";

const Partners = () => {
    const {t} = useTranslation()
    return (
        <div className='w-full min-h-[264px] bg-blue mt-[62px] flex'>
           <div className="wrapper justify-center">
               <div className='h-[160px] w-[226px] rounded bg-white py-4 cursor-pointer hover:scale-110 mt-[15px]' onClick={() => window.open('http://www.president.kg/kg/', '_blank')}>
                   <img src={partn} alt='partners' className='w-[62px] h-[62px] mb-[10px] m-auto'/>
                   <div className="text-xs font-medium max-w-[160px] m-auto text-center">
                       {t("president")}</div>
               </div>
               <div className='h-[160px] w-[226px] rounded bg-white py-4 cursor-pointer hover:scale-110 mx-[20px] mt-[15px]' onClick={() => window.open('https://www.gov.kg/ky', '_blank')}>
                   <img src={partn} alt='partners' className='w-[62px] h-[62px] mb-[10px] m-auto'/>
                   <div className="text-xs font-medium max-w-[160px] m-auto text-center">
                       {t("ministers")}</div>
               </div>
               <div className='h-[160px] w-[226px] rounded bg-white py-4 cursor-pointer hover:scale-110 mt-[15px]' onClick={() => window.open('http://kenesh.kg/', '_blank')}>
                   <img src={partn} alt='partners' className='w-[62px] h-[62px] mb-[10px] m-auto'/>
                   <div className="text-xs font-medium max-w-[160px] m-auto text-center">
                       {t("council")}</div>
               </div>
               <div className='h-[160px] w-[226px] rounded bg-white py-4 cursor-pointer hover:scale-110 mx-[20px] mt-[15px]' onClick={() => window.open('https://portal.tunduk.kg/', '_blank')}>
                   <img src={partn} alt='partners' className='w-[62px] h-[62px] mb-[10px] m-auto'/>
                   <div className="text-xs font-medium max-w-[160px] m-auto text-center">
                       {t("electronics")}
                       </div>
               </div>
               <div className='h-[160px] w-[226px] rounded bg-white py-4 cursor-pointer hover:scale-110 mb-[15px] my-[15px]' onClick={() => window.open('http://koomtalkuu.gov.kg/kg', '_blank')}>
                   <img src={partn} alt='partners' className='w-[62px] h-[62px] mb-[10px] m-auto'/>
                   <div className="text-xs font-medium max-w-[180px] m-auto text-center">
                       {t("discussion")}
                   </div>
               </div>
           </div>

        </div>
    );
};

export default Partners;