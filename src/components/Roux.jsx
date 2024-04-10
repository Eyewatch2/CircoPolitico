import React from 'react';
import RouxImg from '../assets/Presentador.webp';
import RouxGif from '../assets/Presentador.gif'

const Roux = ({ setSelectedCharacter, setIsModalOpen }) => {
    const handleClick = () => {
        setSelectedCharacter({
            name: "Rómulo Roux",
            description:
                "¡Oh vaya! Te has topado con Roux. Es el presentador de este circo. Sus orejas son tan grandes que escucha todo lo que dices. Parece muy simpático y amigable, pero... ¡Cuidado! ",
            img: RouxImg,
            gif: RouxGif
        });
        setIsModalOpen(true)
    }
    return (
        <div className='relative w-full h-full' onClick={handleClick}>
            <img className='cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_5px_white]' src={RouxImg} alt="Roux vestido de presentador de Circo" />
        </div>
    );
}

export default Roux;
