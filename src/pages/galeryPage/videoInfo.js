import React, {useRef} from 'react';
import close from "../../assets/image/about/close.png";
import Modal from './modal'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {useFetch} from "../../api/useFetch";
import {lead, url} from "../../api/const";

const VideoInfo = ({openRegisterModal, setOpenRegisterModal}) => {
    const { response } = useFetch(lead);
    document.body.style.overflow = "hidden";

    const onClose = () => {
        setOpenRegisterModal(false)
        document.body.style.overflow = "";
    }

    return (
        <div>
            <Modal open={openRegisterModal} >
                <div className='w-[1236px] bg-white rounded-[12px] px-8'>
                        {response &&
                            response.map((item) => (
                                    <div key={item.id}>
                                        <div className="flex justify-end mt-[37px] mb-[27px] cursor-pointer">
                                            <img src={close} alt="close icon" onClick={onClose}/>
                                        </div>
                                        <iframe
                                            width="1178"
                                            height="555"
                                            src={`https://www.youtube.com/embed/vQzb34h7mtY`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="Embedded youtube"
                                        />
                                        <div className='block text-base text-blue font-medium mb-3 mt-[32px]'>Список участников координационного совета:</div>
                                        <div className="flex items-center mb-[26px]">
                                            <p className="font-normal text-base">Приоритетным направлением IFC в Кыргызской Республике является поддержка развития и диверсификации частного сектора с целью улучшения конкурентоспособности страны и возможностей трудоустройства. IFC помогает совершенствовать операционную деятельность компаний, создать благоприятную среду для ведения бизнеса и увеличить доступ к финансированию для малого и среднего бизнеса (МСБ).</p>
                                        </div>
                                        <p className="font-medium text-sm text-grey">16 июня, 2022 г.</p>
                                    </div>
                            ))}
                </div>
            </Modal>

        </div>
    );
};

export default VideoInfo;