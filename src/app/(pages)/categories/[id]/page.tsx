import type { Metadata } from "next";
import { Title } from "@/app/components/title/Title";
import { SongItem2 } from "@/app/components/songs/SongItem2";
import CartInfo from "@/app/components/card/CardInfo";

export const metadata: Metadata = {
  title: "Chi tiết danh mục",
  description: "Online Music App",
};
export default function CategoryDetailPage() {
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
      <CartInfo
        image="/demo/image-4.png"
        title="Nhạc Trẻ"
        description="Top 100 Nhạc Trẻ là 100 danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động
            tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên
            bản mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục."
      />
      <div className="mt-[30px]">
        <Title text="Danh Mục Bài Hát" />
        <div className="grid grid-cols-1 gap-[10px]">
          {data.map((item, index) => (
            <SongItem2 item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
