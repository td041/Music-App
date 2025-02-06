import { SongItem2 } from "@/app/components/songs/SongItem2";
import { Title } from "@/app/components/title/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài hát yêu thích",
  description: "Online Music App",
};
export default function WishListPage() {
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
        <Title text="Bài Hát Yêu Thích" />
        <div className="grid grid-cols-1 gap-[10px]">
          {data.map((item, index) => (
            <SongItem2 item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
