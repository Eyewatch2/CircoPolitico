import React from 'react';
import PresentadorImg from '../assets/Presentador.webp';

const Roux = () => {
    return (
        <div className='relative w-full h-full'>
            <img className='cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_5px_white]' src={PresentadorImg} alt="Roux vestido de presentador de Circo" />
            <div className='w-2/3 hidden left-1/2 -translate-x-1/2 h-4 rounded-[100%] bg-black absolute bottom-4 md:bottom-3 blur-sm'></div>

        </div>
    );
}

export default Roux;
