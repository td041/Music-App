"use client";
import { FaPlay } from "react-icons/fa6";

export const ButtonPlay = (props: any) => {
  const { item } = props;
  const handlePlay = () => {
    const audio = item.audio;
    const elementPlayAudio: any = document.querySelector(".play-audio");
    if (elementPlayAudio) {
      const elementAudio = elementPlayAudio.querySelector(".inner-audio");
      const elementSource = elementAudio?.querySelector("source");
      if (elementSource) {
        elementSource.src = audio;
        // Gán đường link
      }
      if (elementAudio) {
        elementAudio.load();
        elementAudio.play();
      }
    }
  };
  return (
    <>
      <button
        className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] text-white ml-[10px]"
        title="button"
        onClick={handlePlay}
      >
        <FaPlay />
      </button>
    </>
  );
};
