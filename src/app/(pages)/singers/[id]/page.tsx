import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết ca sĩ",
  description: "Online Music App",
};
export default function SingerDetailPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Chi tiết ca sĩ</h1>
    </>
  );
}
