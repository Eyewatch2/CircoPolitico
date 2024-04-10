import { useState, useEffect, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import backgroundImage from "../assets/Background.webp";
import Roux from "./Roux";
import Mulino from "./Mulino";
import Lombana from "./Lombana";
import Torrijos from "./Torrijos";
import DetailModal from "./DetailModal";
import Instructions from "./Instructions";
import Painting from "./Painting";
import ModalPainting from "./ModalPainting";
import Hangman from "./Hangman";
import ModalHangman from "./ModalHangman";
import MulinoCarnicero from "../assets/mulinoCarnicero.jpg";
import LombanaCambia from "../assets/lombanaCambia.jpeg";

const Background = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [instructions, setInstructions] = useState(true);
  const [isModalPaintingOpen, setIsModalPaintingOpen] = useState(false);
  const [img, setImg] = useState(null);
  const [isModalHangmanOpen, setIsModalHangmanOpen] = useState(false);

  const velocidad = 2;
  const isMobile = window.innerWidth < 768;
  const getImageWidthMultiplier = () => (isMobile ? 2.5 : 1.5);
  const getCenterVW = () => (getImageWidthMultiplier() * 100) / 2;

  const calculateInitialOffset = () => {
    const imageWidthPx = window.innerWidth * getImageWidthMultiplier(); // Ancho dinámico de la imagen
    const viewportWidth = window.innerWidth;
    const initialOffset = (viewportWidth - imageWidthPx) / 2; // Centrar la imagen
    return initialOffset;
  };

  const [offset, setOffset] = useState(calculateInitialOffset);
  const directionRef = useRef(null); // Dirección actual del movimiento
  const lastUpdateRef = useRef(Date.now()); // Última vez que se actualizó el offset

  const updatePosition = () => {
    const now = Date.now();
    const timeSinceLastUpdate = now - lastUpdateRef.current;

    if (directionRef.current && timeSinceLastUpdate > 10) {
      setOffset((currentOffset) => {
        const imageWidthPx = window.innerWidth * getImageWidthMultiplier();
        const maxOffset = window.innerWidth - imageWidthPx;
        const nextOffset =
          directionRef.current === "left"
            ? currentOffset + velocidad
            : currentOffset - velocidad;

        lastUpdateRef.current = now;

        return Math.min(Math.max(nextOffset, maxOffset), 0);
      });
    }

    requestAnimationFrame(updatePosition);
  };

  useEffect(() => {
    // Ajustar el offset inicial y al cambiar el tamaño de la ventana
    const handleResize = () => {
      setOffset(calculateInitialOffset());
    };

    window.addEventListener("resize", handleResize);
    requestAnimationFrame(updatePosition);

    const handleMouseMove = (e) => {
      const threshold = window.innerWidth * 0.1;
      if (e.clientX < threshold) {
        directionRef.current = "left";
      } else if (e.clientX > window.innerWidth - threshold) {
        directionRef.current = "right";
      } else {
        directionRef.current = null;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      directionRef.current = null;
    };
  }, []);

  return (
    <div className="overflow-hidden relative h-svh">
      {instructions && <Instructions close={() => setInstructions(false)} />}
      {isModalOpen && (
        <DetailModal
          character={selectedCharacter}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isModalPaintingOpen && (
        <ModalPainting close={() => setIsModalPaintingOpen(false)} img={img} />
      )}
      {isModalHangmanOpen && (
        <ModalHangman close={() => setIsModalHangmanOpen(false)} />
      )}
      <div className="w-1/6 md:w-[15svw] h-full bg-gradient-to-r via-20% md:via-30% via-black/60 from-black to-transparent absolute z-40 flex flex-col justify-center">
        <FaAngleLeft className="text-white text-4xl ml-2" />
      </div>
      <div className="w-1/6 md:w-[15svw] h-full right-0 bg-gradient-to-l via-20% md:via-30% via-black/60 from-black to-transparent absolute z-40 flex flex-col justify-center items-end">
        <FaAngleRight className="text-white text-4xl mr-2" />
      </div>
      <img
        src={backgroundImage}
        alt="Fondo de Circo, Carpa roja y blanca"
        className="min-h-svh object-cover"
        style={{
          transform: `translateX(${offset}px)`,
          minWidth: `${getImageWidthMultiplier() * 100}vw`,
        }}
      />
      <div
        className="absolute 2xl:w-[6vw] max-w-24 2xl:h-[6vw] z-10 w-16 h-16 aspect-square md:w-44 md:h-44 translate-x-[45vw] md:translate-x-[10vw]"
        style={{
          right: `calc(${-offset}px + 60vw)`,
          bottom: "45%",
        }}
        onClick={() => {
          setImg(LombanaCambia);
          setIsModalPaintingOpen(true);
        }}
      >
        <Painting />
      </div>
      <div
        className="absolute 2xl:w-[6vw] max-w-24 2xl:h-[6vw] z-10 w-16 h-16 aspect-square md:w-44 md:h-44 translate-x-[120vw] md:translate-y-[15vh] md:translate-x-[10vw]"
        style={{
          right: `calc(${-offset}px - 10vw)`,
          bottom: "60%",
        }}
        onClick={() => {
          setImg(MulinoCarnicero);
          setIsModalPaintingOpen(true);
        }}
      >
        <Painting />
      </div>
      <div
        className="absolute 2xl:w-[6vw] max-w-24 2xl:h-[6vw] z-10 w-16 h-16 aspect-square md:w-44 md:h-44 translate-x-[45vw] md:translate-x-[60vw]"
        style={{
          right: `calc(${-offset}px + 60vw)`,
          bottom: "5%",
        }}
        onClick={() => setIsModalHangmanOpen(true)}
      >
        <Hangman />
      </div>
      <div
        className="absolute 2xl:w-[16vw] 2xl:h-[16vw] z-30 w-56 h-56 aspect-square md:w-44 md:h-44 translate-x-[140vw] md:translate-x-[20vw]"
        style={{
          right: `calc(${-offset}px - 12vw)`,
          bottom: "10%",
        }}
      >
        <Mulino
          setIsModalOpen={setIsModalOpen}
          setSelectedCharacter={setSelectedCharacter}
        />
      </div>
      <div
        className="absolute w-52 h-52 2xl:w-[18vw] 2xl:h-[18vw] translate-x-[100vw] md:translate-x-[-20vw]"
        style={{
          right: `calc(${-offset}px - 30vw)`,
          bottom: `${isMobile ? "30%" : "25%"}`,
        }}
      >
        <Torrijos
          setIsModalOpen={setIsModalOpen}
          setSelectedCharacter={setSelectedCharacter}
        />
      </div>

      <div
        className="absolute top-1/2 w-72 md:w-90 2xl:w-[25vw] 2xl:h-[25vw] aspect-square -translate-x-1/2 -translate-y-1/3"
        style={{
          left: `calc(${getCenterVW()}vw + ${offset}px)`,
        }}
      >
        <Roux
          setIsModalOpen={setIsModalOpen}
          setSelectedCharacter={setSelectedCharacter}
        />
      </div>
      <div
        className="absolute w-96 h-96 2xl:w-[20vw] 2xl:h-[20vw] translate-x-[25vw] md:translate-x-[-20vw]"
        style={{
          right: `calc(${-offset}px + 40vw)`,
          bottom: "10%",
        }}
      >
        <Lombana
          setIsModalOpen={setIsModalOpen}
          setSelectedCharacter={setSelectedCharacter}
        />
      </div>
    </div>
  );
};

export default Background;
