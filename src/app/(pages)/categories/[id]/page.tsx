import type { Metadata } from "next";
import { Title } from "@/app/components/title/Title";
import { SongItem2 } from "@/app/components/songs/SongItem2";
import CartInfo from "@/app/components/card/CardInfo";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";

export const metadata: Metadata = {
  title: "Chi tiết danh mục",
  description: "Online Music App",
};
export default async function CategoryDetailPage(props: any) {
  const { id } = await props.params;
  let dataFinal: any = null;
  onValue(ref(dbFirebase, "/categories/" + id), (item) => {
    dataFinal = item.val();
  });
  // End DataFinal
  // Data Section 1
  const dataSection1: any[] = [];

  const songRef = ref(dbFirebase, "songs");
  onValue(songRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      if (data.categoryId === id) {
        onValue(
          ref(dbFirebase, "/singers/" + data.singerId[0]),
          (itemSinger) => {
            const dataSinger = itemSinger.val();
            dataSection1.push({
              id: key,
              image: data.image,
              title: data.title,
              singer: dataSinger.title,
              link: `/songs/${key}`,
              time: "4:32",
              audio: data.audio,
            });
          }
        );
      }
    });
  });
  // End Data Section 1
  return (
    <>
      <CartInfo
        image={dataFinal.image}
        title={dataFinal.title}
        description={dataFinal.description}
      />
      {/* Section 1 */}
      <div className="mt-[30px]">
        <Title text="Danh Mục Bài Hát" />
        <div className="grid grid-cols-1 gap-[10px]">
          {dataSection1.map((item, index) => (
            <SongItem2 item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
