"use client";
import { Form } from "@heroui/react";
import React from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Page = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const { data, error } = await authClient.signIn.email({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (error) {
      console.error("Sign in failed:", error);
      alert(`ত্রুটি: ${error.message || "সাইন ইন ব্যর্থ হয়েছে"}`);
    } else {
      console.log("Sign in success!", data);
      router.push("/");
      router.refresh();
    }
  };

};

export default Page;