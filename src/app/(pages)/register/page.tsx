import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký",
  description: "Online Music App",
};
export default function RegisterPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Trang đăng ký</h1>
    </>
  );
}
