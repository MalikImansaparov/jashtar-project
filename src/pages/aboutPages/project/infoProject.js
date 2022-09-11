import React, {useState} from 'react';
import lotte from "../../../assets/image/about/partners/롯데.png";
import close from "../../../assets/image/about/close.png"
import Popup from "./popup";

const InfoProject = ({openRegisterModal, setOpenRegisterModal}) => {
    document.body.style.overflow = "hidden";

    const onClose = () => {
        setOpenRegisterModal(false)
        document.body.style.overflow = "";
    }

    return (
        <div>
            <Popup open={openRegisterModal}>
                <div className='w-[1236px] h-auto bg-white rounded-[12px] p-[37px]'>
                    <div className="flex justify-end cursor-pointer">
                        <img src={close} alt="close icon" onClick={onClose}/>
                    </div>
                    <div className="flex pt-3">
                        <div className='w-[332px] h-[277px] rounded shadow-partner flex justify-center items-center mb-[10px]'>
                            <img src={lotte} alt='img' className="w-[245px] h-[48px]"/>
                        </div>
                        <div className='ml-[106px]'>
                            <p className='text-blue text-base font-semibold mb-8'>
                                Международная финансовая корпорация (IFC)
                            </p>
                            <p className="w-[718px] text-base font-normal leading-[19.3px]">
                                Приоритетным направлением IFC в Кыргызской Республике является поддержка развития и диверсификации частного сектора с целью улучшения конкурентоспособности страны и возможностей трудоустройства. IFC помогает совершенствовать операционную деятельность компаний, создать благоприятную среду для ведения бизнеса и увеличить доступ к финансированию для малого и среднего бизнеса (МСБ). IFC также нацелена на увеличение прямых инвестиций в сельскохозяйственный сектор и горнорудную промышленность, а также исследует возможности увеличения проектов по возобновляемой энергетике и энергоэффективности, в т.ч. через государственно-частное партнерство.
                            </p>
                            <p className="w-[718px] text-base font-normal leading-[19.3px] mt-8">
                                IFC помогает совершенствовать операционную деятельность компаний, создать благоприятную среду для ведения бизнеса и увеличить доступ к финансированию для малого и среднего бизнеса (МСБ). IFC также нацелена на увеличение прямых инвестиций в сельскохозяйственный сектор и горнорудную промышленность, а также исследует возможности увеличения проектов по возобновляемой энергетике и энергоэффективности, в т.ч. через государственно-частное партнерство.
                            </p>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    );
};

export default InfoProject;