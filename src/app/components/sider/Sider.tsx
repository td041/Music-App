import Link from "next/link";
export const Sider = () => {
  const menu = [
    {
      title: "Trang chủ",
      icon: <>Icon</>,
      link: "/",
    },
    {
      title: "Danh mục bài hát",
      icon: <>Icon</>,
      link: "/categories",
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
            {menu.map̣((item : any, index : number) => {
              <li className="" key={index}>
                <Link href={item.link}>
                  <span className="">{item.icon}</span>
                  <span className="">{item.title}</span>
                </Link>
              </li>;
            })}
          </ul>
        </nav>
        <div className="text-white">Sider</div>
      </div>
    </>
  );
};
