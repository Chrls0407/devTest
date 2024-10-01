import React from "react";
import HeaderLogo from "@/assets/KingsLanding.png";
import { CircleUserRound, Instagram, Search, Twitter } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
const NavMenus = [
  { name: "home", label: "HOME", link: "#", active: true },
  { name: "videos", label: "VIDEOS", link: "#", active: false },
  { name: "models", label: "MODELS", link: "#", active: false },
  { name: "bts", label: "BTS", link: "#", active: false },
  { name: "store", label: "STORE", link: "#", active: false },
];

const Header = () => {
  return (
    <nav className="min-h-20 bg-black flex  p-4 w-full">
      <div className="flex items-center w-full gap-8">
        {/* Logo */}
        <a href="#">
          <img src={HeaderLogo} alt="header-logo" />
        </a>
        {/* Nav menus */}
        <div className="flex-1 hidden md:flex items-center justify-between  ">
          <div className="flex gap-4 font-[900]">
            {NavMenus.map((menu) => (
              <a
                className={`text-lg cursor-pointer hover:text-white ${
                  menu.active
                    ? "text-white underline decoration-[#FFC653] decoration-4"
                    : "text-[#E60000]"
                }`}
                key={menu.name}
              >
                {menu.label}
              </a>
            ))}
          </div>
          {/* Search */}
          <Search className="h-6 w-6 text-white cursor-pointer" />
        </div>
      </div>
      <Separator orientation="vertical" className="m-4 text-white h-[30px]" />
      <div className="hidden md:flex items-center cursor-pointer gap-4">
        <Twitter className="h-6 w-6 text-white" />
        <Instagram className="h-6 w-6 text-white" />
        <Button className="border-[#E60000] border rounded-none text-white font-[900] text-[1.2rem]">
          <CircleUserRound className="w-6 h-6 mr-2" /> LOGIN
        </Button>
        <Button className="bg-[#E60000]  rounded-none text-white font-[900] text-[1.2rem]">
          JOIN NOW
        </Button>
      </div>
    </nav>
  );
};

export default Header;
