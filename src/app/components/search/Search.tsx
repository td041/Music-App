"use client";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter, useSearchParams } from "next/navigation";
export const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSearch = (event: any) => {
    event.preventDefault();
    const keyword = event.target.keyword.value;
    console.log(keyword);
    router.push(`/search?keyword=${keyword}`);
  };
  const defaultKeyword = searchParams.get("keyword") || "";
  // Set giá trị mặc định cho input

  return (
    <>
      <form
        className="flex items-center bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px]"
        onSubmit={handleSearch}
      >
        <input
          className="order-2 text-[16px] font-[500] text-white bg-transparent outline-none flex-1"
          type="text"
          placeholder="Tìm kiếm..."
          name="keyword"
          defaultValue={defaultKeyword}
        ></input>
        <button
          type="submit"
          title="button"
          className="text-[22px] order-1 text-white mr-[20px]"
        >
          <FaMagnifyingGlass />
        </button>
      </form>
    </>
  );
};
