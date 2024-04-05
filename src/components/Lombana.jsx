import LombanaImg from '../assets/Payaso.png'

const Lombana = ({ setSelectedCharacter, setIsModalOpen }) => {

    const handleClick = () => {
        setSelectedCharacter({
            name: "Ricardo Lombana",
            description:
                "¡Qué risa! ¡Encontraste a Lombana! Es el payaso de la política. Siempre está haciendo chistes y payasadas. ¡Hacer reir a la gente es lo único en lo que es bueno! Pero no te dejes engañar, porque... ¡Tiene doble cara! Cambia su discurso según le convenga.",
            img: LombanaImg,
        });
        setIsModalOpen(true)
    }
    return (
        <div className='relative w-full h-full' onClick={handleClick}>
            <img className='absolute z-20 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_5px_white]' src={LombanaImg} alt="Roux vestido de presentador de Circo" />
        </div>
    )
}

export default Lombana