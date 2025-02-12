import { FaBackwardStep, FaForwardStep, FaPlay } from "react-icons/fa6";

export const PlayActions = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <button className="text-white text-[16px]" title="button">
          <FaBackwardStep />
        </button>
        <button
          className="text-white text-[16px] w-[32px] h-[32px] rounded-full mx-[42px] bg-[#00adef] inline-flex items-center justify-center"
          title="button"
        >
          <FaPlay />
        </button>
        <button className="text-white text-[16px]" title="button">
          <FaForwardStep />
        </button>
      </div>
    </>
  );
};
