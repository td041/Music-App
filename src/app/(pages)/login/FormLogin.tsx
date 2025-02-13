"use client";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export const FormLogin = () => {
  const router = useRouter();
  const handleLogin = (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (password && email) {
      signInWithEmailAndPassword(authFirebase, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            console.log("Login success");
            router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <form className="" onSubmit={handleLogin}>
        <div className="mb-[15px]">
          <label
            htmlFor="email"
            className="block mb-[5px] font-[600] text-[14px]"
          >
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
          <label
            htmlFor="password"
            className="block mb-[5px] font-[600] text-[14px]"
          >
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
    </>
  );
};
