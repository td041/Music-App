"use client";
import { SongItem2 } from "@/app/components/songs/SongItem2";
import { dbFirebase } from "@/app/firebaseConfig";
import { ref, get } from "firebase/database";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export const Section1 = (data: any) => {
  const searchParams = useSearchParams();
  const defaultKeyword = searchParams.get("keyword") || "";
  const [dataFinal, setDataFinal] = useState<any[]>([]);
  useEffect(() => {
    // Data Section 1
    const dataSection1: any[] = [];

    const fetchData = async () => {
      const items = await get(ref(dbFirebase, "songs"));
      items.forEach((item: any) => {
        const key = item.key;
        const data = item.val();
        if (data.title.includes(defaultKeyword)) {
          dataSection1.push({
            id: key,
            image: data.image,
            title: data.title,
            singer: "",
            link: `/songs/${key}`,
            time: "4:32",
            singerId: data.singerId,
          });
        }
      });
      for (const item of dataSection1) {
        const itemSinger = await get(
          ref(dbFirebase, "/singers/" + item.singerId[0])
        );
        const dataSinger = itemSinger.val();
        item.singer = dataSinger.title;
      }
      setDataFinal(dataSection1);
    };
    fetchData();
    // End Data Section 1
  }, [defaultKeyword]);

  return (
    <>
      {dataFinal && (
        <>
          {dataFinal.map((item: any, index: number) => (
            <SongItem2 item={item} key={index} />
          ))}
        </>
      )}
    </>
  );
};
