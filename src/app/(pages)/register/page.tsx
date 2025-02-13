import { Title } from "@/app/components/title/Title";
import type { Metadata } from "next";
import { FormRegister } from "./FormRegister";

export const metadata: Metadata = {
  title: "Đăng ký",
  description: "Online Music App",
};
export default function RegisterPage() {
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <Title text="Đăng Ký Tài Khoản" className="text-center" />
        <FormRegister />
      </div>
    </>
  );
}
