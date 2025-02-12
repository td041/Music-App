"use client";
import { FaVolumeHigh } from "react-icons/fa6";

export const PlayVolume = () => {
  const handleChange = (event: any) => {
    const elementTotal = event.target;
    const elementPlayAudio: any = document.querySelector(".play-audio");
    const elementAudio = elementPlayAudio.querySelector(".inner-audio");
    const elementVolumeCurrent = elementPlayAudio.querySelector(
      ".inner-current-volume"
    );
    const value = parseFloat(elementTotal.value);
    elementAudio.volume = value / 100;
    elementVolumeCurrent.style.width = `${value}%`;
  };
  return (
    <>
      <div className="w-[184px] flex items-end inner-volume">
        <button title="button" className="text-[16px] text-white">
          <FaVolumeHigh />
        </button>
        <div className="ml-[6px] relative">
          <div className="bg-[#00adef] h-[4px] w-[80%] rounded-[50px] absolute top-[14px] left-0 inner-current-volume"></div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={80}
            className="cursor-pointer appearance-none rounded-[50px] range-sm w-full h-[3px] bg-[#ffffff0a] inner-total-volume"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};
