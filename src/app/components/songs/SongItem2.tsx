import Link from "next/link";
import { FaPlay, FaRegHeart } from "react-icons/fa6";
import { ButtonPlay } from "../button/ButtonPlay";
import { ButtonHeart } from "../button/ButtonHeart";

export const SongItem2 = (props: { item: any }) => {
  const { item } = props;
  return (
    <>
      <div className="flex items-center justify-between bg-[#212121] py-[10px] px-[18px] rounded-[15px]">
        {/* Left */}
        <div className="flex items-center w-[40%]">
          <ButtonPlay
            className="text-[24px] text-white"
            item={item}
            title="button"
          />
          <div className="w-[42px] aspect-square rounded-[8px] truncate mx-[12px]">
            <img
              alt={item.title}
              className="h-full w-full object-cover"
              src={item.image}
            />
          </div>
          <div className="font-700] text-[14px] text-white">
            <Link href={item.link}>{item.title}</Link>
          </div>
        </div>
        {/* Center */}
        <div className="w-[30%] text-center">
          <div className="font-[400] text-[14px] text-white">{item.singer}</div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end w-[30%]">
          <div className="font-[400] text-[14px] text-white mr-[18px]">
            {item.time}
          </div>
          <ButtonHeart
            item={item}
            className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] ml-[10px] text-white "
          />
        </div>
      </div>
    </>
  );
};
