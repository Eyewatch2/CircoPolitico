import TorrijosImg from '../assets/Dino.webp'

const Torrijos = () => {
  return (
    <div className='relative w-full h-full'>
            <img className='absolute z-20 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_5px_white]' src={TorrijosImg} alt="Roux vestido de presentador de Circo" />
            <div className='w-2/3 z-10 left-1/2 -translate-x-1/2 h-4 rounded-[100%] bg-black 2xl:bottom-4 absolute bottom-1 md:bottom-1 blur-sm'></div>
        </div>
  )
}

export default Torrijos