import React, {useState} from 'react';
import lang from "../../assets/image/main/lang-icon.png";

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
                    <li className="btn-blue mt-[28px]">
                        <>Кыргызча</>
                    </li>
                    <li className="btn-blue">
                        <>Русский</>
                    </li>
                    <li className="btn-blue">
                        <>Англисский</>
                    </li>
                </ul>
            }
        </div>
    );
};


