import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuItem = (props: any) => {
  const { item, isLogin, index } = props;
  const pathName = usePathname();
  console.log(pathName);
  return (
    <>
      {(item.isLogin === undefined || item.isLogin === isLogin) && (
        <li className="mb-[30px]" key={index}>
          <Link
            href={item.link}
            className={
              "flex items-center hover:text-[#00adef] " +
              (pathName === item.link ? "text-[#00adef]" : "text-white")
            }
          >
            {/* Cách highlight vào link đang nhấp vào  */}
            <span className="text-[20px] mr-[20px]">{item.icon}</span>
            <span className="text-[16px] font-[700]">{item.title}</span>
          </Link>
        </li>
      )}
    </>
  );
};
