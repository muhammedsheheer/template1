import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#fff]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative flex flex-col items-center justify-center gap-5 px-4">
        <h1 className="text-center font-sofia_sans text-7xl font-[500] uppercase text-[#000] md:text-8xl">
          Cafe
        </h1>
        <p className="w-full max-w-[200px] text-center font-sofia_sans text-lg font-[500] uppercase text-[#000] md:ml-14 md:text-start md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </section>
  );
};

export default Hero;
