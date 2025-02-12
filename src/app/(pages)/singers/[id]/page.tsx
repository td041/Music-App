import CartInfo from "@/app/components/card/CardInfo";
import { SongItem2 } from "@/app/components/songs/SongItem2";
import { Title } from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết ca sĩ",
  description: "Online Music App",
};
export default async function SingerDetailPage(props: any) {
  const { id } = await props.params;
  // Data Final
  let dataFinal: any = null;
  onValue(ref(dbFirebase, "/singers/" + id), (item) => {
    dataFinal = item.val();
  });
  console.log(dataFinal);
  // End DataFinal
  // Data Section 1
  const DATA: any[] = [];

  const songRef = ref(dbFirebase, "songs");
  onValue(songRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      if (data.singerId.includes(id)) {
        DATA.push({
          id: key,
          image: data.image,
          title: data.title,
          singer: dataFinal.title,
          link: `/songs/${key}`,
          time: "4:32",
          audio: data.audio,
        });
      }
    });
  });
  // End Data Section 1
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Vân",
  //     listen: "20000",
  //   },
  //   {
  //     image: "/demo/image-3.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Vân",
  //     listen: "20000",
  //   },
  //   {
  //     image: "/demo/image-3.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Vân",
  //     listen: "20000",
  //   },
  //   {
  //     image: "/demo/image-3.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Vân",
  //     listen: "20000",
  //   },
  //   {
  //     image: "/demo/image-3.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Vân",
  //     listen: "20000",
  //   },
  // ];
  return (
    <>
      <CartInfo
        image={dataFinal.image}
        title={dataFinal.title}
        description={dataFinal.description}
      />
      <div className="mt-[30px]">
        <Title text="Danh Mục Bài Hát" />
        <div className="grid grid-cols-1 gap-[10px]">
          {DATA.map((item, index) => (
            <SongItem2 item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
