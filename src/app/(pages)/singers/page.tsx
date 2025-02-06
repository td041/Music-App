import { CardItem } from "@/app/components/card/CardItem";
import { Title } from "@/app/components/title/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách ca sĩ",
  description: "Online Music App",
};
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
export default function SingerPage() {
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Ca Sĩ" />
      </div>
      <div className="grid grid-cols-5 gap-[20px]">
        {data.map((item, index) => (
          <CardItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
