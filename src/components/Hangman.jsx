import HangmanImg from "../assets/hangman.png"
import HangmanImgDesktop from "../assets/hangman2.png"

const Hangman = () => {
  return (
    <>
      <div
        className="relative w-full h-full"
      >
        <img
          className="block md:hidden absolute z-20 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_5px_white]"
          src={HangmanImg}
          alt="Un papel tirado con un juego de ahorcado a medio terminar"
        />
        <img
          className="hidden md:block absolute z-20 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_5px_white]"
          src={HangmanImgDesktop}
          alt="Un papel tirado con un juego de ahorcado a medio terminar"
        />
      </div>
    </>
  );
};

export default Hangman;
