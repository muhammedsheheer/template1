import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-7 bg-[#fff] px-4 pt-20 md:px-[60px]">
      <h3 className="font-times_new_roman text-center text-5xl font-[400] capitalize text-[#000] md:text-7xl md:tracking-[-4px]">
        Slide Into Our Insta
      </h3>
      <div className="flex w-full items-center justify-between px-4 py-3 md:px-[100px] md:py-16">
        <Icons.instagram className="h-12 w-12 text-[#EA5482] md:h-24 md:w-24" />
        <p className="font-sofia_sans text-xl font-[600] uppercase tracking-[2px] text-[#EA5482] md:text-4xl">
          @loremepsum
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
        <Image
          src="/images/home/social/1.png"
          width={553}
          height={541}
          alt="social"
        />
        <div className="relative hidden h-full w-full md:block">
          <Image
            src="/images/home/social/2.png"
            width={553}
            height={541}
            alt="social"
            className="absolute -top-[250px]"
          />
        </div>
        <Image
          src="/images/home/social1/1.png"
          width={553}
          height={541}
          alt="social"
        />
        <div className="bg-[#EA5482]"></div>
        <Image
          src="/images/home/social1/3.png"
          width={553}
          height={541}
          alt="social"
        />
        <div className="relative">
          <div className="absolute bottom-[20%] left-4 right-4 z-50">
            <h2 className="rotate-180 text-center font-sofia_sans text-5xl font-[700] uppercase text-[#fff] md:text-8xl md:tracking-[-4px]">
              su LLorcs
            </h2>
          </div>
          <Image
            src="/images/home/social1/1.png"
            width={553}
            height={541}
            alt="social"
            className="z-40"
          />
        </div>
      </div>
    </section>
  );
};

export default Follow;
