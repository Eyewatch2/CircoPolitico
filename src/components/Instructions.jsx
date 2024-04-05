import React from 'react'

const Instructions = ({ close }) => {
    return (
        <div className='fixed w-full h-full z-50 bg-black/50'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-8/12 pb-40 bg-gradient-to-t from-blue-500 to-blue-500/70 rounded-lg shadow-lg py-10 px-5 md:px-20'>
                <h1 className='text-2xl md:text-5xl font-bold text-white'>El Círco político de Panamá</h1>
                <p className='md:text-2xl text-lg text-white mt-2 md:mt-8'>Muévete de un lado a otro presionando las flechas a los costados de la pantalla, y explora los decadentes personajes del circo político panameño 2024.</p>
                <button onClick={close} className='z-50 hover:scale-110 bg-red-500 absolute bottom-8 left-1/2 -translate-x-1/2 px-8 py-4 text-xl text-white font-bold rounded-md transition'>Comenzar</button>
            </div>
        </div>
    )
}

export default Instructions