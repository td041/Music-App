import { CardItem } from "@/app/components/card/CardItem";
import { Title } from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách ca sĩ",
  description: "Online Music App",
};
export default function SingerPage() {
  const dataSection1: any[] = [];
  const singerRef = ref(dbFirebase, "singers");
  onValue(singerRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      dataSection1.push({
        id: key,
        image: data.image,
        title: data.title,
        description: data.description,
        link: `/singers/${key}`,
      });
    });
  });
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Ca Sĩ" />
      </div>
      <div className="grid grid-cols-5 gap-[20px]">
        {dataSection1.map((item, index) => (
          <CardItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
