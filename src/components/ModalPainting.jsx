import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

const ModalPainting = ({ close, img }) => {
  const [victory, setVictory] = useState(false);
  return (
    <div className="fixed w-full h-full z-50 bg-black/50">
      <button
        onClick={close}
        className="z-50 hover:scale-125 transition absolute top-2 right-2 text-5xl text-white"
      >
        <FaTimes />
      </button>

      <div className="max-w-2xl h-full mx-auto grid content-center">
        <JigsawPuzzle
          rows={2}
          columns={2}
          imageSrc={img}
          onSolved={() => {
            setVictory(true);
            setTimeout(() => setVictory(false), 3000);
          }}
        />
      </div>

      {victory && (
        <div className="z-50 absolute bottom-5 right-1/2 translate-x-1/2 shadow-sm text-xl text-center bg-black/50 text-white w-full p-2">
          Has resuelto el puzle, <span className="block">¡Bien Hecho!</span>
        </div>
      )}
    </div>
  );
};

export default ModalPainting;
