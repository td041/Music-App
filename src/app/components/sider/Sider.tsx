"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHeart, FaHouse, FaMusic, FaPodcast, FaRightFromBracket, FaUser, FaUserPlus } from "react-icons/fa6";
export const Sider = () => {
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
    },
    {
      title: "Đăng xuất",
      icon: <FaRightFromBracket />,
      link: "/logout",
    },
    {
      title: "Đăng nhập",
      icon: <FaUser />,
      link: "/login",
    },
    {
      title: "Đăng kí",
      icon: <FaUserPlus />,
      link: "/register",
    },
  ];
  const pathName = usePathname();

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
              <li className="mb-[30px]" key={index}>
                <Link
                  href={item.link}
                  className={
                    "flex items-center text-white hover:text-[#00adef]" +
                    (pathName === item.link ? "text-[#00adef]" : "text-white")
                  }
                >
                  {/* Cách highlight vào link đang nhấp vào  */}
                  <span className="text-[20px] mr-[20px]">{item.icon}</span>
                  <span className="text-[16px] font-[700]">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
