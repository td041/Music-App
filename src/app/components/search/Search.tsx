import { FaMagnifyingGlass } from "react-icons/fa6";
export const Search = () => {
  return (
    <>
      <form className="flex items-center bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] ">
        <input
          className="order-2 text-[16px] font-[500] text-white bg-transparent outline-none flex-1"
          type="text"
          placeholder="Tìm kiếm..."
          name="keyword"
        ></input>
        <button type="submit" title="button" className="text-[22px] order-1 text-white mr-[20px]">
          <FaMagnifyingGlass />
        </button>
      </form>
    </>
  );
};
