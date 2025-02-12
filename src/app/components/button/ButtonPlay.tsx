"use client";
import { FaPlay } from "react-icons/fa6";

export const ButtonPlay = (props: any) => {
  const { item } = props;
  const handlePlay = () => {
    // Phát nhạc
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
      // Hiển thị khối Play
      elementPlayAudio.classList.remove("hidden");
      // Hiển thị hình ảnh
      const elementImage = elementPlayAudio.querySelector(".inner-image");
      elementImage.src = item.image;
      elementImage.alt = item.title;
      // Hiển thị tiêu đề
      const elementTitle = elementPlayAudio.querySelector(".inner-title");
      elementTitle.innerHTML = item.title;

      // Hiển thị tên ca sĩ
      const elementSinger = elementPlayAudio.querySelector(".inner-singer");
      elementSinger.innerHTML = item.singer;
      // Hiển thị nút pause
      const elementButtonPlay =
        elementPlayAudio.querySelector(".inner-button-play");
      elementButtonPlay.classList.add("play");
      // Lấy ra tổng thời gian
      const elementCurrentTime = elementPlayAudio.querySelector(
        ".inner-play-time .inner-current-time"
      );
      const elementTotalTime = elementPlayAudio.querySelector(
        ".inner-play-time .inner-total-time"
      );
      elementAudio.onloadedmetadata = () => {
        const totalTime = elementAudio.duration;
        // duration có sẵn
        elementTotalTime.max = totalTime;
        // Lấy ra thời gian hiện tại
        elementAudio.ontimeupdate = () => {
          const currentTime = elementAudio.currentTime;
          // currentTime có sẵn
          const percent = (currentTime * 100) / totalTime;
          elementCurrentTime.style.width = `${percent}%`;
          elementTotalTime.value = currentTime;
        };
      };
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
