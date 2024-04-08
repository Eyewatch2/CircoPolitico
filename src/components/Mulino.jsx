import MulinoImg from '../assets/Gorro.png'
import MulinoGif from "../assets/Gorro.gif"

const Mulino = ({ setSelectedCharacter, setIsModalOpen }) => {
    const handleClick = () => {
        setSelectedCharacter({
            name: "José Raúl Mulino",
            description:
                "¡Increíble! Encontraste a Mulino. Un personaje muy escurridizo. En los momentos importantes... ¡desaparece como por arte de magia! Se comenta que hypnotiza a la población con palabras vacías. De hecho, ¡nadie sabe cuáles son sus propuestas!",
            img: MulinoImg,
            gif: MulinoGif
        });
        setIsModalOpen(true)
    }
    return (
        <div className='relative w-full h-full' onClick={handleClick}>
            <img className='absolute z-20 right-1/2 w-full h-full translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_5px_white]' src={MulinoImg} alt="Roux vestido de presentador de Circo" />
        </div>
    );
}

export default Mulino