import React, {useState} from 'react';
import lotte from "../../../assets/image/about/partners/롯데.png";
import close from "../../../assets/image/about/close.png"
import Popup from "./popup";
import {useClickOutside} from "../../../hooks/useOutside";
import {aboutUrl, base, uri} from "../../../api/const";
import {useFetch} from "../../../api/useFetch";

const InfoProject = ({openRegisterModal, setOpenRegisterModal}) => {
    const [ref] = useClickOutside(() => setOpenRegisterModal(true))
    const { isLoading, response } = useFetch(base + aboutUrl + '/about_us_project/');
    console.log(response)
    document.body.style.overflow = "hidden";

    const onClose = () => {
        setOpenRegisterModal(false)
        document.body.style.overflow = "";
    }

    return (
        <div>
            <Popup open={openRegisterModal}>
                <div className='w-[1236px] h-auto bg-white rounded-[12px] p-[37px]' ref={ref}>
                    <div className="flex justify-end cursor-pointer">
                        <img src={close} alt="close icon" onClick={onClose}/>
                    </div>
                    {response && response(item => (
                    <div className="flex pt-3" key={item.id}>
                        <div className='w-[332px] h-[277px] rounded shadow-partner flex justify-center items-center mb-[10px]'>
                            <img src={uri + item.proj_image} alt='img' className="w-[245px] h-[48px]"/>
                        </div>
                        <div className='ml-[106px]'>
                            <p className='text-blue text-base font-semibold mb-8'>
                                {item.title_ky}
                            </p>
                            <p className="w-[718px] text-base font-normal leading-[19.3px]">
                                {item.desh_ky}
                            </p>
                            <p className="w-[718px] text-base font-normal leading-[19.3px] mt-8">
                                IFC помогает совершенствовать операционную деятельность компаний, создать благоприятную среду для ведения бизнеса и увеличить доступ к финансированию для малого и среднего бизнеса (МСБ). IFC также нацелена на увеличение прямых инвестиций в сельскохозяйственный сектор и горнорудную промышленность, а также исследует возможности увеличения проектов по возобновляемой энергетике и энергоэффективности, в т.ч. через государственно-частное партнерство.
                            </p>
                        </div>
                    </div>
                        ))}
                </div>
            </Popup>
        </div>
    );
};

export default InfoProject;