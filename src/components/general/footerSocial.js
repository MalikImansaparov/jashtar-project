import React from 'react';
import {Link} from "react-router-dom";
import youtube from "../../assets/image/general/y.png";
import tele from "../../assets/image/general/telegram.png";
import insta from "../../assets/image/general/insta.png";
import meta from "../../assets/image/general/f.png";

const FooterSocial = () => {
    return (
        <div className="flex">
            <Link to='/' className='socials '>
                <img src={youtube} alt="social" className="w-[17px] h-[12px]"/>
            </Link>
            <Link to='/' className='socials ml-[10px]'>
                <img src={tele} alt="social" className="w-[16px] h-[13px]"/>
            </Link>
            <Link to='/' className='socials ml-[10px]'>
                <img src={insta} alt="social" className="w-[17px] h-[17px]"/>
            </Link>
            <Link to='/' className='socials ml-[10px]'>
                <img src={meta} alt="social" className="w-[9px] h-[16px]"/>
            </Link>
        </div>
    );
};

export default FooterSocial;