"use client";
import { authFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";
import {
  FaHeart,
  FaHouse,
  FaMusic,
  FaPodcast,
  FaRightFromBracket,
  FaUser,
  FaUserPlus,
} from "react-icons/fa6";
import { MenuItem } from "./MenuItem";
export const Sider = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  });
  const menu = [
    {
      title: "Trang chủ",
      icon: <FaHouse />,
      link: "/",
    },
    {
      title: "Danh mục bài hát",
      icon: <FaMusic />,
      link: "/categories",
    },
    {
      title: "Ca sĩ",
      icon: <FaPodcast />,
      link: "/singers",
    },
    {
      title: "Bài hát yêu thích",
      icon: <FaHeart />,
      link: "/wishlist",
      isLogin: true,
    },
    {
      title: "Đăng xuất",
      icon: <FaRightFromBracket />,
      link: "/logout",
      isLogin: true,
    },
    {
      title: "Đăng nhập",
      icon: <FaUser />,
      link: "/login",
      isLogin: false,
    },
    {
      title: "Đăng kí",
      icon: <FaUserPlus />,
      link: "/register",
      isLogin: false,
    },
  ];

  return (
    <>
      <div className="bg-[#212121] h-[100vh] fixed w-[280px]">
        <div className="bg-[#1c1c1c] py-[25px] px-[20px]">
          <Link href="/">
            <img src="/Logo.svg" alt="Logo" className="w-full h-[42px]" />
          </Link>
        </div>
        <nav className="py-[20px] px-[20px]">
          <ul className="">
            {menu.map((item, index) => (
              <MenuItem item={item} isLogin={isLogin} key={index}/>
            ))}
            ;
          </ul>
        </nav>
      </div>
    </>
  );
};
