"use client";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export const FormRegister = () => {
  const router = useRouter();
  const handleRegister = (event: any) => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const password = event.target.password.value;
    const email = event.target.email.value;
    if (fullName && password && email) {
      createUserWithEmailAndPassword(authFirebase, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          if (user) {
            set(ref(dbFirebase, `users/${user.uid}`), {
              fullName: fullName,
              email: email,
            })
              .then(() => {
                console.log("Register success");
                router.push("/login");
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
      );
    }
  };
  return (
    <>
      <form className="" onSubmit={handleRegister}>
        <div className="mb-[15px]">
          <label
            htmlFor="fullName"
            className="block mb-[5px] font-[600] text-[14px]"
          >
            <span className="text-white">Họ Tên</span>
            <span className="text-red-500 ml-[5px]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            className="w-full bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none h-[50px]"
            id="fullName"
            placeholder="Ví dụ: Trinh Tran Trung Duc"
            required={true}
          ></input>
        </div>
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
          Đăng Ký
        </button>
      </form>
    </>
  );
};
