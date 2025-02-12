export const PlayTime = () => {
  return (
    <>
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
    </>
  );
};
