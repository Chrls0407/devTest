import React from "react";
import image2 from "@/assets/image2.png";
import { Play } from "lucide-react";
import { Button } from "../ui/button";

const VideoCard = () => {
  return (
    <div className="">
      <img src={image2} alt="" className="w-full rounded-xl" />
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white font-[700] text-[40px]">The Red Wedding</p>
          <p className="text-[#FFBC48] text-[24px]">
            DANAERYS • JON SNOW • CERSEI
          </p>
        </div>
        <Button className="text-black font-[900] min-h-[70px] bg-[#FFAC5C] hover:bg-[#FFAC5C]/90 rounded-xl">
          <Play className="w-10 h-10" />
        </Button>
      </div>
    </div>
  );
};

export default VideoCard;
