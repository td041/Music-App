import { CardItem } from "@/app/components/card/CardItem";
import { Title } from "@/app/components/title/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Online Music App",
};
export default function CategoryPage() {
  const data = [
    {
      image: "/demo/image-5.png",
      title: "Sơn Tùng M-TP",
      description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
    {
      image: "/demo/image-5.png",
      title: "Sơn Tùng M-TP",
      description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
    {
      image: "/demo/image-5.png",
      title: "Sơn Tùng M-TP",
      description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
    {
      image: "/demo/image-5.png",
      title: "Sơn Tùng M-TP",
      description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
    {
      image: "/demo/image-5.png",
      title: "Sơn Tùng M-TP",
      description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
  ];
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Mục Bài Hát" />
      </div>
      <div className="grid grid-cols-5 gap-[20px]">
        {data.map((item, index) => (
          <CardItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
