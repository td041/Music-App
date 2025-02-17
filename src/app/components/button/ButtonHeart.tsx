"use client";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";

export const ButtonHeart = (props: any) => {
  const { item, className } = props;
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        const userId = user.uid;
        if (item.wishlist && item.wishlist[userId]) {
          setIsActive(true);
        }
      }
    });
  }, []);
  const addWishList = () => {
    const userId = authFirebase?.currentUser?.uid;
    console.log(item.id);
    if (userId) {
      const songRef = ref(dbFirebase, "/songs/" + item.id);

      runTransaction(songRef, (song) => {
        if (song) {
          if (song.wishlist && song.wishlist[userId]) {
            song.wishlist[userId] = null;
            setIsActive(false);
          } else {
            if (!song.wishlist) {
              song.wishlist = {};
            }
            song.wishlist[userId] = true;
            setIsActive(true);
          }
        }
        return song;
      });
    }
  };
  return (
    <>
      <button
        className={
          className +
          (isActive ? "bg-[#00adef] border-[#00adef] " : "border-white ")
        }
        title="button"
        onClick={addWishList}
      >
        <FaHeart />
      </button>
    </>
  );
};
