import { FaPlay, FaRegHeart } from "react-icons/fa6";

export const SongItem2 = (props: { item: any }) => {
  const { item } = props;
  return (
    <>
      <div className="flex items-center justify-between bg-[#212121] py-[10px] px-[18px] rounded-[15px]">
        {/* Left */}
        <div className="flex items-center w-[40%]">
          <button className="text-[24px] text-white" title="button">
            <FaPlay />
          </button>
          <div className="w-[42px] aspect-square rounded-[8px] truncate mx-[12px]">
            <img alt={item.title} className="h-full w-full object-cover" src={item.image}/>
          </div>
          <div className="font-700] text-[14px] text-white">{item.title}</div>
        </div>
        {/* Center */}
        <div className="w-[30%] text-center">
          <div className="font-[400] text-[14px] text-white">{item.singer}</div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end w-[30%]">
          <div className="font-[400] text-[14px] text-white mr-[18px]">4:32</div>
          <button className="text-[20px] text-white" title="button">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </>
  );
};
