import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Online Music App",
};
export default function Home() {
  return (
    <>
      <h1 className="text-[38px] font-[700] text-white bg-white h-[3000px]">Trang chủ</h1>
    </>
  );
}
