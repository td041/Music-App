import { PlayInfo } from "./PlayInfo";
import { PlayActions } from "./PlayActions";
import { PlayTime } from "./PlayTime";
import { PlayVolume } from "./PlayVolume";

export const Play = () => {
  return (
    <>
      <div className="bg-[#212121] z-[999] fixed bottom-0 left-0 w-full py-[20px] border-t border-[#494949] hidden play-audio">
        <audio className="hidden inner-audio">
          <source src={"/"} />
        </audio>
        <div className="container mx-auto flex items-center justify-between">
          <PlayInfo />
          <div className="mx-[66px] flex-1">
            <PlayActions />
            <PlayTime />
          </div>
          <PlayVolume />
        </div>
      </div>
    </>
  );
};
