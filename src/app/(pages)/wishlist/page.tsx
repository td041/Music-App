import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài hát yêu thích",
  description: "Online Music App",
};
export default function WishListPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Bài hát yêu thích</h1>
    </>
  );
}
