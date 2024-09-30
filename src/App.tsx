import { Lock } from "lucide-react";
import Header from "./components/Header";
import { Button } from "./components/ui/button";
import Rectangle6 from "@/assets/Rectangle6.png";
import VideoCard from "./components/reusables/VideoCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselPrevious,
  // CarouselNext,
} from "./components/ui/carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      {/* Big welcome banner / Image */}
      <div className="w-full flex items-center flex-col justify-end py-20 bg-[url('@/assets/image1.png')] h-[calc(100vh-90px)] bg-auto">
        <Button className="text-[3.5rem] text-black font-[900] h-auto bg-[#FFAC5C] hover:bg-[#FFAC5C]/90 rounded-xl  ">
          <Lock className="h-16 w-16 mr-2" /> GET INSTANT ACCESS
        </Button>
      </div>

      {/* Welcome Section */}
      <div className="bg-black flex flex-col items-center justify-center py-10 text-white text-center font-[400] text-[32px]">
        <p className="text-[#FFBC48]">WELCOME TO</p>
        <div>
          <span className="font-[900] text-[80px] text-[#E60000]">Kings</span>
          <span className="font-[900] text-[80px]">Landing</span>
        </div>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="bg-[#111111] p-8 flex flex-col gap-4 items-center">
        <div>
          <div className="text-white flex w-auto items-center  gap-4">
            <span className="font-[900] text-[50px]">TOP</span>{" "}
            <span className="text-[50px]">VIDEOS</span>
            <img src={Rectangle6} alt="" className="h-4 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <VideoCard />
            <VideoCard />
          </div>
        </div>
        <Button className="text-[2rem]   text-black font-[900] h-auto bg-[#FFAC5C] hover:bg-[#FFAC5C]/90 rounded-xl  ">
          <Lock className="h-10 w-10 mr-2" /> GET INSTANT ACCESS
        </Button>
      </div>
      <div className="bg-black p-8 flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-4">
          <div className="text-white flex w-auto items-center gap-4">
            <span className="font-[900] text-[50px]">LATEST</span>{" "}
            <span className="text-[50px]">VIDEOS</span>
            <img src={Rectangle6} alt="" className="h-4 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
        <Button className="border-[#E60000] border rounded text-white font-[900] text-[1.2rem]">
          VIEW ALL VIDEOS
        </Button>
      </div>
      <div className="bg-[#111111] p-8 flex flex-col gap-4 items-center">
        <div>
          <div className="text-white flex w-auto items-center  gap-4">
            <span className="font-[900] text-[50px]">UPCOMING</span>{" "}
            <span className="text-[50px]">VIDEOS</span>
            <img src={Rectangle6} alt="" className="h-4 w-full" />
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <VideoCard />
            <VideoCard />
          </div> */}
          <Carousel className="w-full max-w-lg md:max-w-full p-10">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="lg:basis-1/2">
                  <VideoCard />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
