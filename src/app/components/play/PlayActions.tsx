"use client";
import {
  FaBackwardStep,
  FaForwardStep,
  FaPause,
  FaPlay,
} from "react-icons/fa6";

export const PlayActions = () => {
  const handle = () => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    const elementButtonPlay =
      elementPlayAudio.querySelector(".inner-button-play");
    // elementButtonPlay.classList.toggle("play");
    const elementAudio = elementPlayAudio.querySelector(".inner-audio");
    if (elementButtonPlay.classList.contains("play")) {
      elementButtonPlay.classList.remove("play");
      elementAudio.pause();
    } else {
      elementButtonPlay.classList.add("play");
      elementAudio.play();
    }
  };

  const handlePrevious = () => {
    const currentSong = document.querySelector(`[song-id].active`);
    if (currentSong) {
      const previousSong = currentSong.previousElementSibling;
      if (previousSong) {
        const buttonPlay: any = previousSong.querySelector(".button-active");
        buttonPlay.click();
      }
    }
  };
  const handleNext = () => {
    const currentSong = document.querySelector(`[song-id].active`);
    if (currentSong) {
      const nextSong = currentSong.nextElementSibling;
      if (nextSong) {
        const buttonPlay: any = nextSong.querySelector(".button-active");
        buttonPlay.click();
      }
    }
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          className="text-white text-[16px]"
          title="button"
          onClick={handlePrevious}
        >
          <FaBackwardStep />
        </button>
        <button
          className="text-white text-[16px] w-[32px] h-[32px] rounded-full mx-[42px] bg-[#00adef] inline-flex items-center justify-center inner-button-play"
          title="button"
          onClick={handle}
        >
          <FaPlay className="inner-icon-play" />
          <FaPause className="inner-icon-pause" />
        </button>
        <button
          className="text-white text-[16px]"
          title="button"
          onClick={handleNext}
        >
          <FaForwardStep />
        </button>
      </div>
    </>
  );
};
