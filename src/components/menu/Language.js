import React, {useState} from 'react';
import lang from "../../assets/image/main/lang-icon.png";
import {changeLanguage} from "../../i18next";

export const Language = () => {
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    }

    return (
        <div className="group relative">
        <button className="flex text-white relative" onClick={toggleModal}>
            <img src={lang} className='pt-2 mr-[7px] relative' alt='lang'/>
            <span className="text-sm font-normal">Pyc</span>
        </button>
            { openModal &&
                <ul className="absolute z-10 cursor-pointer">
                    <li className="btn-blue mt-[28px]" onClick={() => changeLanguage("ky")}>
                        <>Кыргызча</>
                    </li>
                    <li className="btn-blue" onClick={() => changeLanguage("ru")}>
                        <>Русский</>
                    </li>
                    <li className="btn-blue" onClick={() => changeLanguage("en")}>
                        <>Англисский</>
                    </li>
                </ul>
            }
        </div>
    );
};


