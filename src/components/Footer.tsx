import rectangle1 from "@/assets/rectangle1.png";
import { Twitter, Instagram } from "lucide-react";

const FooterNavs1 = [
  { name: "home", label: "Home" },
  { name: "videos", label: "Videos" },
  { name: "models", label: "Models" },
  { name: "bts", label: "BTS" },
  { name: "store", label: "Store" },
  { name: "join now", label: "Join Now" },
];
const FooterNavs2 = [
  { name: "contact us", label: "Contact Us" },
  { name: "support", label: "Support" },
  { name: "privacy", label: "Privacy Policy" },
  { name: "terms", label: "Terms & Condition" },
];
const Footer = () => {
  return (
    <div className="bg-black p-8 flex flex-col gap-8">
      <div className=" grid grid-cols-1 md:grid-cols-3">
        <div className="">
          <div>
            <span className="font-[900] text-[75px] text-[#E60000]">Kings</span>
            <span className="font-[900] text-[75px] text-white">Landing</span>
          </div>
          <p className="text-[24px] text-white">
            © 2024 KingsLanding. All rights reserved.
          </p>
        </div>
        {/*  */}
        <div className="flex gap-8 items-between ">
          <div className="flex flex-col text-[#e60000] text-[30px]">
            {FooterNavs1.map((nav) => (
              <a key={nav.name} className="cursor-pointer">
                {nav.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col text-[#e60000] text-[30px]">
            {FooterNavs2.map((nav) => (
              <a key={nav.name} className="cursor-pointer">
                {nav.label}
              </a>
            ))}
          </div>
        </div>
        <div className="text-white flex flex-col text-[30px] gap-4">
          <p>ABOUT KingsLanding</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            varius a nisl non facilisis. Phasellus finibus scelerisque massa, ac
            elementum enim sollicitudin sed. Ut finibus pulvinar interdum. Proin
            sed neque in nisl ultrices euismod. Ut mattis turpis sed odio.
          </p>
          <div className="flex gap-4 cursor-pointer">
            <a href="">
              <Twitter className="h-10 w-10 text-[#FFC653]" />
            </a>
            <a href="">
              <Instagram className="h-10 w-10 text-[#FFC653]" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end"></div>

      <div className="flex flex-col gap-8">
        <img src={rectangle1} alt="" />
        <p className="text-[24px] text-center text-white">
          © 2024 KingsLanding. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
