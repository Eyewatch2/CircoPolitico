import React, { useState, useEffect, useRef } from "react";
import backgroundImage from "../assets/Background.webp";
import Roux from "./Roux";
import Mulino from "./Mulino";
import Lombana from "./Lombana";
import Torrijos from "./Torrijos";
import DetailModal from "./DetailModal";
import Character from "./Character";

const characters = [
    { name: 'Mulino', image: require('../assets/Gorro.png') },
    { name: 'Torrijos', image: require('../assets/Dino.webp') },
    { name: 'Roux', image: require('../assets/Presentador.webp') },
    { name: 'Lombana', image: require('../assets/Payaso.png') },
];

const Background = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const velocidad = 2;
    const isMobile = window.innerWidth < 768;
    const getImageWidthMultiplier = () => isMobile ? 2.5 : 1.5;
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
        <div className='overflow-hidden relative h-screen'>
            {isModalOpen && (
                <DetailModal character={selectedCharacter} setIsModalOpen={setIsModalOpen} />
            )}
            {/* Map sobre el array de personajes */}
            {characters.map((character, index) => (
                <div
                    key={index}
                    className={`absolute ${character.name === 'Roux' ? 'top-1/2' : 'bottom-20 md:bottom-3'
                        } ${character.name === 'Roux' ? 'left-1/2' : 'right-1/2'
                        } w-52 h-52`}
                    style={{
                        transform: `translateX(${character.name === 'Roux' ? '-50%' : '50%'
                            })`,
                    }}
                >
                    <Character {...character} />
                </div>
            ))}
        </div>
    );

};

export default Background;
