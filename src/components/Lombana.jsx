import React from 'react'
import LombanaImg from '../assets/Payaso.png'

const Lombana = () => {
    return (
        <div className='relative w-full h-full'>
            <img className='absolute z-20 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_5px_white]' src={LombanaImg} alt="Roux vestido de presentador de Circo" />
            <div className='w-2/3 z-10 left-1/2 -translate-x-1/2 h-4 rounded-[100%] bg-black absolute bottom-4 md:bottom-3 blur-sm'></div>
        </div>
    )
}

export default Lombana