import { FaVolumeHigh } from "react-icons/fa6";

export const PlayVolume = () => {
  return (
    <>
      <div className="w-[184px] flex items-end">
        <button title="button" className="text-[16px] text-white">
          <FaVolumeHigh />
        </button>
        <div className="ml-[6px] relative">
          <div className="bg-[#00adef] h-[4px] w-[80%] rounded-[50px] absolute top-[14px] left-0"></div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={80}
            className="cursor-pointer appearance-none rounded-[50px] range-sm w-full h-[3px] bg-[#ffffff0a] "
          />
        </div>
      </div>
    </>
  );
};
