import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="h-full w-full bg-[#fff] py-12 pl-4 pr-4 md:py-0 md:pl-0 md:pr-0">
      <div className="flex flex-col md:flex-row">
        <div className="flex h-full w-full items-center justify-center bg-[url('/images/home/about/bg.png')] bg-cover bg-center py-12 md:w-[55%] md:py-32">
          <div className="rounded-t-full bg-[#fff] p-6">
            <Image
              src={"/images/home/about/image.png"}
              width={677}
              height={503}
              alt="image"
              className="h-auto w-full md:h-[450px]"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 px-4 py-8 md:mt-6 md:w-[45%] md:gap-6 md:px-16 md:py-16">
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="font-times_new_roman text-center text-4xl font-[400] lowercase italic text-[#9FBED7] md:text-6xl md:tracking-[-3px]">
              CROISSANT CAFE
            </h4>
            <h3 className="font-times_new_roman text-center text-5xl font-[400] uppercase text-[#000] md:text-6xl md:tracking-[-3px]">
              CROISSANT CAFE
            </h3>
          </div>
          <p className="font-times_new_roman w-full max-w-[350px] text-lg font-[400] lowercase italic text-[#9FBED7] md:text-2xl md:tracking-[-1px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis{" "}
          </p>
          <p className="font-times_new_roman w-full max-w-[300px] text-base font-[400] lowercase text-[#000] md:text-xl md:tracking-[-1px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="">
            <Link href={"/table-booking"}>
              <Button
                className={
                  "rounded-none border border-[#000] bg-[#000] px-7 py-6 font-open_sans text-xs font-[600] uppercase tracking-[2.08px] text-[#fff] hover:bg-[#222] hover:text-[#fff]"
                }
              >
                book table
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
