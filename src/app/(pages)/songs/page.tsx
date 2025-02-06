import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách bài hát",
  description: "Online Music App",
};
export default function SongsPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Danh sách bài hát</h1>
    </>
  );
}
