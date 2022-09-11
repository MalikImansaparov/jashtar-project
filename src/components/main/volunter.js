import React from 'react';
import vol1 from '../../assets/image/main/Rectangle 3.png'
import vol2 from '../../assets/image/main/Rectangle 3 (1).png'
import vol3 from '../../assets/image/main/Rectangle 3 (2).png'
import icon from '../../assets/image/main/volunter-icon.png'
import bilim from '../../assets/image/main/Bilim.png'
import elbook from '../../assets/image/main/elbook.png'

const Volunter = () => {
    return (
        <>
            <div className=" flex w-full min-h-[302px] justify-center mt-[66px] bg-white shadow-vol">
                <img src={vol1} alt='volunter' className='w-[50%]'/>
                <div className="m-auto text-center bg-gradient-volunter">
                    <img src={icon} alt='icon' className='w-[60px] h-[60px] mb-4 m-auto' />
                    <p className='text-[22px] font-semibold mb-3'>Келечек</p>
                    <div className="font-normal text-base max-w-[422px] leading-5 text-grey">Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse luctus amet bibendum pellentesque lorem. Malesuada lobortis tristique tortor.</div>
                    <button className='button'>Стать волонтером</button>
                </div>
            </div>
            <div className=" flex w-full min-h-[302px] justify-center bg-white shadow-vol">
                <div className="m-auto text-center bg-gradient-volunter">
                    <img src={icon} alt='icon' className='w-[60px] h-[60px] mb-4 m-auto' />
                    <p className='text-[22px] font-semibold mb-3'>Билим</p>
                    <div className="font-normal text-base max-w-[422px] leading-5 text-grey">Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse luctus amet bibendum pellentesque lorem. Malesuada lobortis tristique tortor.</div>
                </div>
                <img src={bilim} alt='bilim' className='w-[50%]'/>
            </div>
            <div className=" flex w-full min-h-[302px] justify-center bg-white shadow-vol">
                <img src={vol2} alt='volunter' className='w-[50%]'/>
                <div className="m-auto  text-center bg-gradient-volunter">
                    <img src={icon} alt='icon' className='w-[60px] h-[60px] mb-4 m-auto' />
                    <p className='text-[22px] font-semibold mb-3'>Инсан</p>
                    <div className="font-normal text-base max-w-[422px] leading-5 text-grey">Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse luctus amet bibendum pellentesque lorem. Malesuada lobortis tristique tortor.</div>
                    <button className='button'>Стать волонтером</button>
                </div>
            </div>
            <div className=" flex w-full min-h-[302px] justify-center bg-white shadow-vol">
                <div className="m-auto text-center bg-gradient-volunter">
                    <img src={icon} alt='icon' className='w-[60px] h-[60px] mb-4 m-auto' />
                    <p className='text-[22px] font-semibold mb-3'>Elbook</p>
                    <div className="font-normal text-base max-w-[422px] leading-5 text-grey">Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse luctus amet bibendum pellentesque lorem. Malesuada lobortis tristique tortor.</div>
                </div>
                <img src={elbook} alt='bilim' className='w-[50%]'/>
            </div>
            <div className=" flex w-full min-h-[302px] justify-center bg-white shadow-vol">
                <img src={vol3} alt='volunter' className='w-[50%]'/>
                <div className="m-auto text-center">
                    <img src={icon} stc='icon' className='w-[60px] h-[60px] mb-4 m-auto' />
                    <p className='text-[22px] font-semibold mb-3'>Волентер</p>
                    <div className="font-normal text-base max-w-[422px] leading-5 text-grey">Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse luctus amet bibendum pellentesque lorem. Malesuada lobortis tristique tortor.</div>
                    <button className='button'>Стать волонтером</button>
                </div>
            </div>
        </>
    );
};

export default Volunter;