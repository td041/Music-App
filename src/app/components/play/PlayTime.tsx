"use client";
export const PlayTime = () => {
  const handleChange = (event: any) => {
    const elementTotal = event.target;
    const elementPlayAudio: any = document.querySelector(".play-audio");
    const elementAudio = elementPlayAudio.querySelector(".inner-audio");
    const value = parseFloat(elementTotal.value);
    elementAudio.currentTime = value;
  };
  return (
    <>
      <div className="mt-[11px] relative inner-play-time">
        <div className="bg-[#00adef] h-[4px] w-[80%] rounded-[50px] absolute top-[14px] left-0 inner-current-time"></div>
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={0}
          className="cursor-pointer appearance-none rounded-[50px] range-sm w-full h-[4px] bg-[#ffffff0a] inner-total-time"
          onChange={handleChange}
        />
      </div>
    </>
  );
};
