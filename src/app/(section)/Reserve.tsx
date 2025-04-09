import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="h-full w-full bg-foreground py-12 pl-4 pr-4 md:py-0 md:pl-0 md:pr-0">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
       <div className="w-full md:w-1/2 flex justify-center items-center md:py-24">
        <div className="w-fit flex flex-col justify-center items-center">
<p className="text-white text-3xl md:text-6xl font-sofia_sans font-[500] text-center uppercase">Reserve</p>
<p className="text-white font-sofia_sans text-3xl max-w-[350px] text-center uppercase tracking-[2px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
<Button className="px-7 py-6 uppercase font-open_sans rounded-none">Reserve</Button>
        </div>
       </div>
       <div className="w-full md:w-1/2 flex justify-center items-center">
       <Image
       src='/images/home/reserve/image.png'
       width={964}
       height={1152}
       alt="image"
       />
       </div>
      </div>
    </section>
  );
};

export default Reserve;
