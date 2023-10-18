import React from "react";
import { useNavigate } from "react-router-dom";

interface LogoProps {
  variant: "primary" | "secondary";
}

const variants = {
  primary: {
    title: "text-primaryAccent font-bold font-lobster text-5xl",
    subtitle: "text-fontLight font-bold text-base font-oneset font-light",
  },
  secondary: {
    title: "text-primaryBg font-bold font-lobster text-3xl",
    subtitle: "text-primaryBg font-bold text-sm font-oneset font-light",
  },
};

export default function Logo({ variant }: LogoProps) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full justify-start items-center">
      <div className="flex gap-2 cursor-pointer" onClick={() => navigate("/")}>
        <p className={variants[variant].title}>LuxeBet</p>
      </div>
      <p className={variants[variant].subtitle}>CASINO</p>
    </div>
  );
}
