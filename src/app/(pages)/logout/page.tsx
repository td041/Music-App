"use client";
import { useRouter } from "next/navigation";
import { authFirebase } from "@/app/firebaseConfig";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
export default function LogoutPage() {
  const router = useRouter();
  useEffect(() => {
    signOut(authFirebase)
      .then(() => {
        console.log("Sign-out successful.");
        router.push("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <></>;
}
