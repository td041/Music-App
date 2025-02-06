import { Title } from "@/app/components/title/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Online Music App",
};
export default function LoginPage() {
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <Title text="Đăng Nhập Tài Khoản" className="text-center" />
        <form className="">
          <div className="mb-[15px]">
            <label htmlFor="email" className="block mb-[5px] font-[600] text-[14px]">
              <span className="text-white">Email</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="w-full bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none h-[50px]"
              id="email"
              placeholder="trinhtrantrungduc@gmail.com"
              required={true}
            ></input>
          </div>
          <div className="mb-[15px]">
            <label htmlFor="password" className="block mb-[5px] font-[600] text-[14px]">
              <span className="text-white">Mật Khẩu</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="password"
              name="password"
              className="w-full bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none h-[50px]"
              id="password"
              required={true}
            ></input>
          </div>
          <button
            type="submit"
            className="h-[50px] w-full bg-[#00adef] text-white rounded-[6px] font-[600] text-[16px]"
          >
            Đăng Nhập
          </button>
        </form>
      </div>
    </>
  );
}
