import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "404 Not Found",
  description: "Không tìm thấy trang này",
};
export default function NotFound() {
  return (
    <>
      <h1 className="text-[32px] font-[700] text-white text-center mt-[50px]">
        404 Not Found
      </h1>
      <div className="text-center mt-[20px]">
        <Link className="text-[16px] text-black bg-white p-[10px]" href={"/"}>
          Trở về trang chủ
        </Link>
      </div>
    </>
  );
}
