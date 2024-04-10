import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import HangmanSinResolver from "../assets/hangmanSinResolver.png";
import HangmanResuelto from "../assets/hangmanResuelto.png";

const ModalHangman = ({ close }) => {
  const [victory, setVictory] = useState(false);
  const [image, setImage] = useState(HangmanSinResolver);
  const [letter, setLetter] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleEnviar = () => {
    const correctLetter = "e"; // Letra correcta para resolver el ahorcado
    if (letter.toLowerCase() === correctLetter) {
      setImage(HangmanResuelto);
      setVictory(true);
      setDisabled(true);
      setTimeout(close, 5000);
    } else {
      setInputError(true);
      setTimeout(() => {
        setInputError(false);
        setLetter("");
      }, 500);
    }
  };

  const handleChange = (e) => {
    setLetter(e.target.value);
  };

  return (
    <div className="fixed w-full h-full z-50 bg-black/50">
      <button
        onClick={close}
        className="z-50 hover:scale-125 transition absolute top-2 right-2 text-5xl text-white"
      >
        <FaTimes />
      </button>
      <div className=" absolute flex flex-col gap-2  top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
        <img
          src={image}
          className="max-h-[80svh]"
          alt="Juego del ahorcado que dice MULINO R_PR_SOR"
        />
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Escribe una letra"
            maxLength={1}
            onChange={handleChange}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleEnviar();
              }
            }}
            className={`flex-1 px-2 rounded-sm ${
              inputError ? "bg-red-200 animation-error" : ""
            }`}
            disabled={disabled}
          />
          <button
            className="px-2 py-1 bg-green-500 rounded-sm hover:bg-green-600 transition"
            onClick={handleEnviar}
          >
            Enviar
          </button>
        </div>
      </div>
      {victory && (
        <div className="z-50 absolute bottom-5 right-1/2 translate-x-1/2 shadow-sm text-xl text-center bg-black/50 text-white w-full p-2">
          Has resuelto el ahorcado, <span className="block">¡Bien Hecho!</span>
        </div>
      )}
    </div>
  );
};

export default ModalHangman;
