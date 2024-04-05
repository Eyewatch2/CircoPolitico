import TorrijosImg from '../assets/Dino.png'

const Torrijos = ({ setSelectedCharacter, setIsModalOpen }) => {
  const handleClick = () => {
    setSelectedCharacter({
        name: "Martín Torrijos",
        description:
            "Mira nada más, ¡Haz encontrado un T-Rrijos! Creíamos que este espécimen estaba extinto. Se dice que es un dinosaurio de la política. ¡Cuidado! Puede que te coma con sus propuestas prehistóricas. Y no llegues a confiarle tu dinero... ¡De su padre aprendió a devorárselo y nunca más lo volverías a ver!.",
        img: TorrijosImg,
    });
    setIsModalOpen(true)
}
return (
    <div className='relative w-full h-full' onClick={handleClick}>
            <img className='absolute z-20 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_5px_white]' src={TorrijosImg} alt="Roux vestido de presentador de Circo" />
        </div>
  )
}

export default Torrijos