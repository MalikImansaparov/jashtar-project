import React from 'react';
import partn from '../../assets/image/main/200px-Emblem_of_Kyrgyzstan 1.png'

const Partners = () => {
    return (
        <div className='w-full min-h-[264px] bg-blue mt-[62px] flex align-middle mb-[62px]'>
           <div className="wrapper flex align-middle justify-between">
               <div className='h-[160px] w-[226px] rounded bg-white py-4 cursor-pointer' onClick={() => window.open('http://www.president.kg/kg/', '_blank')}>
                   <img src={partn} alt='partners' className='w-[62px] h-[62px] mb-[10px] m-auto'/>
                   <div className="text-xs font-medium max-w-[160px] m-auto text-center">
                       Кыргыз Республикасынын Президенти </div>
               </div>
               <div className='h-[160px] w-[226px] rounded  bg-white py-4 cursor-pointer' onClick={() => window.open('https://www.gov.kg/ky', '_blank')}>
                   <img src={partn} alt='partners' className='w-[62px] h-[62px] mb-[10px] m-auto'/>
                   <div className="text-xs font-medium max-w-[160px] m-auto text-center">
                       Кыргыз Республикасынын Министрлер Кабинети</div>
               </div>
               <div className='h-[160px] w-[226px] rounded  bg-white py-4 cursor-pointer' onClick={() => window.open('http://kenesh.kg/', '_blank')}>
                   <img src={partn} alt='partners' className='w-[62px] h-[62px] mb-[10px] m-auto'/>
                   <div className="text-xs font-medium max-w-[160px] m-auto text-center">
                       Кыргыз Республикасынын Жогорку Кеңеши</div>
               </div>
               <div className='h-[160px] w-[226px] rounded  bg-white py-4 cursor-pointer' onClick={() => window.open('https://portal.tunduk.kg/', '_blank')}>
                   <img src={partn} alt='partners' className='w-[62px] h-[62px] mb-[10px] m-auto'/>
                   <div className="text-xs font-medium max-w-[160px] m-auto text-center">
                       КР Электрондук кызмат көрсөтүүлөр мамлекеттик порталы
                       </div>
               </div>
               <div className='h-[160px] w-[226px] rounded  bg-white py-4 cursor-pointer' onClick={() => window.open('http://koomtalkuu.gov.kg/kg', '_blank')}>
                   <img src={partn} alt='partners' className='w-[62px] h-[62px] mb-[10px] m-auto'/>
                   <div className="text-xs font-medium max-w-[180px] m-auto text-center">
                       КР ченемдик укуктук актыларынын долбоорлорун коомдук талкуулоонун бирдиктүү порталы</div>
               </div>
           </div>

        </div>
    );
};

export default Partners;