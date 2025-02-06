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
  const dataSection1: any[] = [];
  onValue(songRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      if(dataSection1.length > 3){
        const singersRef = ref(dbFirebase, '/singers/' + data.singerId[0]);
        onValue(singersRef, (itemSinger) => {
          const dataSinger = itemSinger.val();
          dataSection1.push({
            id: key,
            image: data.image,
            title: data.title,
            singer: dataSinger.title,
            listen: data.listen,
          });
        })
      }
    
    });
  });
  // DataSection1
  const dataSection2 = [
    {
      image: "/demo/image-4.png",
      title: "Nhạc Trẻ",
      description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
    {
      image: "/demo/image-4.png",
      title: "Nhạc Trẻ",
      description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
    {
      image: "/demo/image-4.png",
      title: "Nhạc Trẻ",
      description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
    {
      image: "/demo/image-4.png",
      title: "Nhạc Trẻ",
      description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
    {
      image: "/demo/image-4.png",
      title: "Nhạc Trẻ",
      description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "#",
    },
  ];
  const dataSection3 = [
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
      {/* Section 1 : Nghe nhiều */}
      <section className="flex items-start">
        <div className="w-[534px]">
          <div
            className="w-full flex items-center rounded-[15px] bg-cover"
            style={{ backgroundImage: "url('/demo/background-1.png')" }}
          >
            <div className="flex-1 mr-[34px] ml-[30px]">
              <div className="font-[700] text-[32px] text-white mb-[6px]">Nhạc EDM</div>
              <div className="font-[500] text-[14px] text-white">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 nhạc
                Electronic/Dance Âu Mỹ
              </div>
            </div>
            <div className="w-[215px] mr-[22px] mt-[48px]">
              <img src="/demo/image-2.png" alt="Nhạc EDM" className="w-full h-auto" />
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
