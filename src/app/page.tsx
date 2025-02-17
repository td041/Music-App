import type { Metadata } from "next";
import { SongItem } from "./components/songs/SongItem";
import { Title } from "./components/title/Title";
import { CardItem } from "./components/card/CardItem";
import { dbFirebase } from "./firebaseConfig";
import { onValue, ref } from "firebase/database";

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Online Music App",
};
export default function Home() {
  const songRef = ref(dbFirebase, "songs");
  // Section 1
  const dataSection1: any[] = [];
  onValue(songRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      if (dataSection1.length < 3) {
        const singersRef = ref(dbFirebase, "/singers/" + data.singerId[0]);
        onValue(singersRef, (itemSinger) => {
          const dataSinger = itemSinger.val();
          dataSection1.push({
            id: key,
            image: data.image,
            title: data.title,
            singer: dataSinger.title,
            listen: data.listen,
            link: `/songs/${key}`,
            audio: data.audio,
            wishlist: data.wishlist,
          });
        });
      }
    });
  });
  // End Section 1
  // Section 2
  const dataSection2: any[] = [];
  const categoryRef = ref(dbFirebase, "categories");
  onValue(categoryRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      if (dataSection2.length < 5) {
        dataSection2.push({
          id: key,
          image: data.image,
          title: data.title,
          description: data.description,
          link: `/categories/${key}`,
        });
      }
    });
  });
  // End Section 2
  // Section 3
  const dataSection3: any[] = [];
  const singerRef = ref(dbFirebase, "singers");
  onValue(singerRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      if (dataSection3.length < 5) {
        dataSection3.push({
          id: key,
          image: data.image,
          title: data.title,
          description: data.description,
          link: `/singers/${key}`,
        });
      }
    });
  });
  // End Section 3
  return (
    <>
      {/* Section 1 : Nghe nhiều */}
      <section className="flex items-start">
        <div className="w-[534px]">
          <div
            className="w-full flex items-center rounded-[15px] bg-cover"
            style={{ backgroundImage: "url('/demo/background-1.png')" }}
          >
            <div className="flex-1 mr-[34px] ml-[30px]">
              <div className="font-[700] text-[32px] text-white mb-[6px]">
                Nhạc EDM
              </div>
              <div className="font-[500] text-[14px] text-white">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot
                nhất hiện tại của thể loại Top 100 nhạc Electronic/Dance Âu Mỹ
              </div>
            </div>
            <div className="w-[215px] mr-[22px] mt-[48px]">
              <img
                src="/demo/image-2.png"
                alt="Nhạc EDM"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 ml-[22px]">
          <Title text="Nghe Nhiều" />
          <div className="grid grid-cols-1 gap-[12px]">
            {dataSection1.map((item, index) => (
              <SongItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
      {/* Section 2 : Danh mục nổi bật */}
      <section>
        <div className="mt-[30px]">
          <Title text="Danh Mục Nổi Bật" />
        </div>
        <div className="grid grid-cols-5 gap-[20px]">
          {dataSection2.map((item, index) => (
            <CardItem item={item} key={index} />
          ))}
        </div>
      </section>
      {/* Section 3 : Ca sĩ nổi bật */}
      <section>
        <div className="mt-[30px]">
          <Title text="Ca Sĩ Nổi Bật" />
        </div>
        <div className="grid grid-cols-5 gap-[20px]">
          {dataSection3.map((item, index) => (
            <CardItem item={item} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
