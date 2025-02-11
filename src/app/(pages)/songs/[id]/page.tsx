import CartInfo from "@/app/components/card/CardInfo";
import { SongItem2 } from "@/app/components/songs/SongItem2";
import { Title } from "@/app/components/title/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Online Music App",
};
export default async function SongDetailPage(props: any) {
  const { id } = await props.params;
  // Data Final
  let dataFinal: any = null;
  onValue(ref(dbFirebase, "/songs/" + id), (items) => {
    dataFinal = items.val();
    const singersRef = ref(dbFirebase, "/singers/" + dataFinal.singerId[0]);
    onValue(singersRef, (itemSinger) => {
      const dataSinger = itemSinger.val();
      dataSinger["singer"] = dataSinger.title;
    });
  });
  // End Data Final
  // Data Section 3
  const dataSection3: any[] = [];

  const songRef = ref(dbFirebase, "songs");
  onValue(songRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      if (data.categoryId === dataFinal.categoryId) {
        onValue(
          ref(dbFirebase, "/singers/" + data.singerId[0]),
          (itemSinger) => {
            const dataSinger = itemSinger.val();
            dataSection3.push({
              id: key,
              image: data.image,
              title: data.title,
              singer: dataSinger.title,
              link: `/songs/${key}`,
              time: "4:32",
            });
          }
        );
      }
    });
  });
  const lyrics = ` Verse: 
    Níu ngàn lời cũng không ngăn được   
    //...
    Dạy nhau tốt hơn xong dành lại cho người sau…`;
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
      <CartInfo image="/demo/image-4.png" title="Nhạc Trẻ" description="Hồ Quang Hiếu, Huỳnh Vân" />
      <div className="mt-[30px]">
        <Title text="Lời Bài Hát" />
        <div className="bg-[#212121] text-white rounded-[15px] p-[20px] whitespace-pre-line">{lyrics}</div>
      </div>
      <div className="mt-[30px]">
        <Title text="Bài Hát Cùng Danh Mục" />
        <div className="grid grid-cols-1 gap-[10px]">
          {data.map((item, index) => (
            <SongItem2 item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
