import React from 'react';
import youtube from "../../assets/image/main/Path (1).svg";
import tele from "../../assets/image/main/telegram.svg";
import insta from "../../assets/image/main/Path.svg";
import meta from "../../assets/image/main/Vector.svg";

const Social = () => {
    return (
        <div className="flex">
            <div className='social' onClick={() => window.open('https://www.youtube.com/channel/UCSyRfISynsKOnXi9j21mzUA')}>
                <img src={youtube} alt="social" className="w-[12px] h-[10px] "/>
            </div>
            <div className='social ml-[10px]' onClick={() => window.open('https://t.me/jashtargovkg')}>
                <img src={tele} alt="social" className="w-[12px] h-[10px] "/>
            </div>
            <div  className='social ml-[10px]' onClick={() => window.open('https://instagram.com/jashtar.gov.kg?igshid=MTA0ZTI1NzA=')}>
                <img src={insta} alt="social" className="w-[12px] h-[12px] "/>
            </div>
            <div className='social ml-[10px]' onClick={() => window.open('https://www.facebook.com/jashtar.gov')}>
                <img src={meta} alt="social" className="w-[7px] h-[11px] "/>
            </div>
        </div>
    );
};

export default Social;