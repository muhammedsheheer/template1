import { Icons } from "@/components/Icon";
import Image from "next/image";
import React from "react";

function SocialMedia() {
  return (
    <section className="flex h-fit w-full flex-col gap-7 px-4 md:px-[60px] pt-20">
      <p className="w-full text-center font-playfair text-4xl md:text-6xl text-black">
        Slide Into Our socials
      </p>
      <div className="flex w-full items-center justify-between px-4 md:px-[100px] py-3 md:py-16">
        <Icons.instagram className="h-12 md:h-24 w-12 md:w-24 text-[#714C23]" />
        <p className="font-sofia_sans text-xl md:text-4xl font-[600] uppercase tracking-[2px] text-[#714C23]">
          @loremepsum
        </p>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-3">
        <Image
          src="/images/home/social/1.png"
          width={553}
          height={541}
          alt="social"
        />
        <div className="hidden md:block relative h-full w-full">
          <Image
            src="/images/home/social/2.png"
            width={553}
            height={541}
            alt="social"
            className="absolute -top-[250px]"
          />
        </div>
        <Image
          src="/images/home/social/3.png"
          width={553}
          height={541}
          alt="social"
        />
        <Image
          src="/images/home/social/4.png"
          width={553}
          height={541}
          alt="social"
        />
        <Image
          src="/images/home/social/5.png"
          width={553}
          height={541}
          alt="social"
        />
        <Image
          src="/images/home/social/6.png"
          width={553}
          height={541}
          alt="social"
        />
      </div>
    </section>
  );
}

export default SocialMedia;
