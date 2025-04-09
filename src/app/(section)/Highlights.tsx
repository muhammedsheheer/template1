import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Highlights: React.FC = () => {
  return (
    <section className="flex h-full w-full bg-[#EA5482] px-4 md:h-screen md:px-0">
      <div className="flex w-full flex-col gap-6 md:flex-row md:gap-0">
        <div className="flex w-full rotate-180 items-end justify-end md:w-[35%]">
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
        <div className="flex w-full flex-col justify-center gap-4 md:w-[35%] md:gap-6">
          <h3 className="font-times_new_roman text-5xl font-[400] capitalize text-[#000] md:text-7xl md:tracking-[-4px]">
            Dine with Us
          </h3>
          <p className="font-times_new_roman w-full max-w-[350px] text-xl lowercase italic text-[#fff] md:text-2xl md:tracking-[-1px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis{" "}
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
        <div className="flex w-full justify-center md:w-[30%] md:pt-24">
          <div className="relative h-[450px] w-[250px] rounded-t-full bg-[#fff] md:h-[550px]">
            <div className="absolute -bottom-5 -left-5 right-6">
              <Image
                src={"/images/home/menu/2.png"}
                width={677}
                height={503}
                alt="image"
                className="h-[440px] w-full md:h-[550px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
