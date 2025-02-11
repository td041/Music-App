import { FaBackwardStep, FaForwardStep, FaPlay, FaVolumeHigh } from "react-icons/fa6";

export const Play = () => {
  return (
    <>
      <div className="bg-[#212121] z-[999] fixed bottom-0 left-0 w-full py-[20px] border-t border-[#494949] hidden play-audio">
        <audio className="hidden inner-audio">
          <source src={"/"}/>
        </audio>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center w-[218px]">
            <div className="w-[49px] aspect-square rounded-[14px] truncate">
              <img className="w-full h-full object-cover" src="/demo/image-1.png" alt="Cô Phòng" />
            </div>
            <div className="ml-[12px]">
              <div className="font-[700] text-[15px] text-white mb-[2px]">Cô Phòng</div>
              <div className="font-[700] text-[12px] text-[#ffffff70]">Hồ Quang Hiếu, Huỳnh Vân</div>
            </div>
          </div>
          <div className="mx-[66px] flex-1">
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
            <div className="mt-[11px] relative">
              <div className="bg-[#00adef] h-[4px] w-[80%] rounded-[50px] absolute top-[14px] left-0"></div>
              <input
                type="range"
                min={0}
                max={100}
                defaultValue={80}
                className="cursor-pointer appearance-none rounded-[50px] range-sm w-full h-[4px] bg-[#ffffff0a]"
              />
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
};
