import React, {useState} from 'react';
import lotte from "../../assets/image/about/partners/롯데.png";
import close from "../../assets/image/about/close.png"
import giz from "../../assets/image/about/orgonization/giz 1.png";
import usaid from "../../assets/image/about/orgonization/usaid (1) 1.png"
import adb from "../../assets/image/about/orgonization/asian-devt-bank.png"
import wbg from "../../assets/image/about/orgonization/World_Bank.png"
import kfw from "../../assets/image/about/orgonization/kfw-group.png"
import ifc from "../../assets/image/about/orgonization/Inter-C-K.png"
import Modal from "../galeryPage/modal";
import Popover from "../galeryPage/popover";

const InfoPartners = ({openRegisterModal, setOpenRegisterModal}) => {
    document.body.style.overflow = "hidden";
    const link = "https://bischkek.diplo.de/kg-ru/themen/weitere-themen/gtz/1256134"

    const onClose = () => {
        setOpenRegisterModal(false)
        document.body.style.overflow = "";
    }

        return (
            <div>
                <Popover open={openRegisterModal}>
                    <div className='w-[1236px] h-[1059px] bg-white rounded-[12px] p-[62px] shadow-org' >
                        <div className="flex justify-end cursor-pointer">
                            <img src={close} alt="close icon" onClick={onClose}/>
                        </div>
                        <div className="flex">
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
                            </div>
                        </div>
                        <div className="mt-[62px]">
                            <div className='block text-base font-semibold mb-[36px]'>Список совместных проектов:</div>
                            <div className="flex items-center mb-[23px] cursor-pointer" onClick={() => window.open(link, '_blank')}>
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
                        </div>
                    </div>
                </Popover>
                    </div>
    );
};

export default InfoPartners;