import { SongItem2 } from "@/app/components/songs/SongItem2";
import { Title } from "@/app/components/title/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm",
  description: "Online Music App",
};
export default function SearchPage() {
  const data = [
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Vân",
      listen: "20000",
    },
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Vân",
      listen: "20000",
    },
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Vân",
      listen: "20000",
    },
  ];
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Kết Quả Tìm Kiếm" />
        <div className="grid grid-cols-1 gap-[10px]">
          {data.map((item, index) => (
            <SongItem2 item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
