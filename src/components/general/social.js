import React from 'react';
import {Link} from "react-router-dom";
import youtube from "../../assets/image/main/Path (1).svg";
import tele from "../../assets/image/main/telegram.svg";
import insta from "../../assets/image/main/Path.svg";
import meta from "../../assets/image/main/Vector.svg";

const Social = () => {
    return (
        <div className="flex">
            <Link to='/' className='social '>
                <img src={youtube} alt="social" className="w-[12px] h-[10px] "/>
            </Link>
            <Link to='/' className='social ml-[10px]'>
                <img src={tele} alt="social" className="w-[12px] h-[10px] "/>
            </Link>
            <Link to='/' className='social ml-[10px]'>
                <img src={insta} alt="social" className="w-[12px] h-[12px] "/>
            </Link>
            <Link to='/' className='social ml-[10px]'>
                <img src={meta} alt="social" className="w-[7px] h-[11px] "/>
            </Link>
        </div>
    );
};

export default Social;