"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    setCurrentTime(
      new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      })
    );
  }, []);

  return (
    <header className="w-full">
      <div className="logoAndAuthButton grid grid-cols-1 md:grid-cols-3 items-center px-4 py-3 w-full">
        <div className="hidden md:block"></div>
        <div className="logo flex justify-center items-center gap-3 mx-auto">
          <Image
            className="w-12 h-12 rounded-[6px] object-cover"
            src={"/logo.jpg"}
            alt="Logo"
            height={50}
            width={50}
          />
          <div>
            <h2 className="text-[20px] text-red-700 font-bold leading-tight">
              BD News Portal
            </h2>
            <p className="text-sm text-gray-600">{currentTime}</p>
          </div>
        </div>
        <div className="authButton flex items-center justify-center md:justify-end gap-3 mt-3 md:mt-0">
          <Button variant="secondary" className="text-black">
            সাইন ইন
          </Button>
          <Button variant="danger">সাইন আপ</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;