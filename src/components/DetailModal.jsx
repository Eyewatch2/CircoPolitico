import { FaTimes } from "react-icons/fa";

const DetailModal = ({ character, setIsModalOpen }) => {
  return (
    <div className='fixed w-full h-full z-50 bg-black/50'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-8/12 flex flex-col md:flex-row md:h-[70svh] bg-gradient-to-t from-white to-white/70 rounded-lg shadow-lg py-10 px-5 md:px-20'>
        <button onClick={() => setIsModalOpen(false)} className='z-50 hover:scale-125 transition absolute top-2 right-2 text-5xl text-black'><FaTimes /></button>
        <img src={character?.img} alt={character?.name} className='object-contain max-w-md rounded-lg' />
        <div className="flex-1 md:flex-0 overflow-y-auto">
          <h2 className='text-2xl md:text-5xl font-bold text-gray-800'>{character.name}</h2>
          <p className='md:text-2xl text-lg text-gray-600 mt-2 md:mt-8'>{character.description}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailModal