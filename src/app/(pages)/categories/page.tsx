import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Online Music App",
};
export default function CategoryPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Trang chủ</h1>
    </>
  );
}
