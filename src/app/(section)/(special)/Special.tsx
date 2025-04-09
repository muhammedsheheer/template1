"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#fff] py-12">
      <div className="absolute right-[13%] top-[13%] hidden md:block">
        <p className="w-full max-w-[220px] font-sofia_sans text-lg font-[500] uppercase text-[#000] md:text-xl md:leading-[95%] md:tracking-[1px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="absolute bottom-[8%] left-[8%] hidden md:block">
        <p className="w-full max-w-[220px] font-sofia_sans text-lg font-[500] uppercase text-[#000] md:text-xl md:leading-[95%] md:tracking-[1px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2 md:items-start md:justify-start">
            <h6 className="text-center font-sofia_sans text-5xl font-[500] uppercase text-[#000] md:text-9xl">
              SIGNATURES
            </h6>
            <p className="w-full max-w-[220px] text-center font-sofia_sans text-lg font-[500] uppercase text-[#000] md:hidden md:text-xl md:leading-[95%] md:tracking-[1px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="w-full max-w-[220px] text-center font-sofia_sans text-lg font-[500] uppercase text-[#000] md:hidden md:text-xl md:leading-[95%] md:tracking-[1px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
