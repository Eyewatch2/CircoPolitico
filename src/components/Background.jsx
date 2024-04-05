import { useState, useEffect, useRef } from "react";
import backgroundImage from "../assets/Background.webp";
import Roux from "./Roux";
import Mulino from "./Mulino";
import Lombana from "./Lombana";
import Torrijos from "./Torrijos";
import DetailModal from "./DetailModal";

const Background = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

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
                const imageWidthPx = window.innerWidth * getImageWidthMultiplier(); // Ancho dinámico de la imagen
                const maxOffset = window.innerWidth - imageWidthPx;
                const nextOffset = directionRef.current === 'left' ? currentOffset + velocidad : currentOffset - velocidad;

                lastUpdateRef.current = now; // Actualizar la referencia de tiempo

                // Prevenir que el offset exceda los límites
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

        window.addEventListener('resize', handleResize);
        requestAnimationFrame(updatePosition);

        const handleMouseMove = (e) => {
            const threshold = window.innerWidth * 0.1;
            if (e.clientX < threshold) {
                directionRef.current = 'left';
            } else if (e.clientX > window.innerWidth - threshold) {
                directionRef.current = 'right';
            } else {
                directionRef.current = null;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            directionRef.current = null;
        };
    }, []);

    return (
        <div className="overflow-hidden relative h-screen">
            {isModalOpen && <DetailModal character={selectedCharacter} setIsModalOpen={setIsModalOpen} />}
            <div className="w-1/6 md:w-[15svw] h-full bg-gradient-to-r via-20% md:via-30% via-black/60 from-black to-transparent absolute z-40 flex"></div>
            <div className="w-1/6 md:w-[15svw] h-full right-0 bg-gradient-to-l via-20% md:via-30% via-black/60 from-black to-transparent absolute z-40 flex"></div>
            <img
                src={backgroundImage}
                alt="Fondo de Circo, Carpa roja y blanca"
                className="min-h-screen object-cover"
                style={{
                    transform: `translateX(${offset}px)`,
                    minWidth: `${getImageWidthMultiplier() * 100}vw`
                }}
            />
            <div
                className="absolute 2xl:w-[16vw] 2xl:h-[16vw] z-30 w-56 h-56 aspect-square md:w-44 md:h-44 translate-x-[140vw] md:translate-x-[20vw]"
                style={{
                    right: `calc(${-offset}px - 12vw)`,
                    bottom: "10%",
                }}
            >
                <Mulino />
            </div>
            <div
                className="absolute w-52 h-52 2xl:w-[18vw] 2xl:h-[18vw] translate-x-[100vw] md:translate-x-[-20vw]"
                style={{
                    right: `calc(${-offset}px - 30vw)`,
                    bottom: `${isMobile ? "30%" : "25%"}`,
                }}
            >
                <Torrijos />
            </div>

            <div
                className="absolute top-1/2 w-72 md:w-90 2xl:w-[25vw] 2xl:h-[25vw] aspect-square -translate-x-1/2 -translate-y-1/3"
                style={{
                    left: `calc(${getCenterVW()}vw + ${offset}px)`,
                }}
            >
                <Roux />

            </div>
            <div
                className="absolute w-60 h-60 2xl:w-[20vw] 2xl:h-[20vw] translate-x-[10vw] md:translate-x-[-20vw]"
                style={{
                    right: `calc(${-offset}px + 40vw)`,
                    bottom: "20%",
                }}
            >
                <Lombana />
            </div>
        </div>
    );
};

export default Background;
