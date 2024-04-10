import PaintingImg from "../assets/painting.png"

const Painting = () => {
  return (
    <>
      <div
        className="relative w-full h-full"
      >
        <img
          className="absolute z-20 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_5px_white]"
          src={PaintingImg}
          alt="Un cuardo en el circo"
        />
      </div>
    </>
  );
};

export default Painting;
