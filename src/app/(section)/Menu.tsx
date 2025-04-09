import Image from "next/image";
import React from "react";

const data = [
  {
    name: "ROASTED LAMB RUMP",
    description: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
    price: 25,
  },
  {
    name: "PAN SEARED SEA BASS",
    description: "Saffron and mussel's broth, new potatoes, edamame beans",
    price: 38,
  },
  {
    name: "KING PRAWNS AND LOBSTER",
    description: "Creamy saffron, sauce Vierge",
    price: 38,
  },
  {
    name: "BEEF BURGER MEAL",
    description: "Classic greek salad, barrel aged feta cheese, bread",
    price: 32,
  },
  {
    name: "ROASTED LAMB RUMP",
    description: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
    price: 25,
  },
];

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#EA5482] px-12 py-8 md:px-20 md:py-16">
      <div className="absolute left-[15%] top-8 z-20 hidden md:block">
        <h1 className="text-center font-sofia_sans text-5xl font-[500] uppercase text-[#fff] md:text-[170px] md:tracking-[-6px]">
          EXPLORE OUR MENU
        </h1>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 md:gap-16">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-center font-sofia_sans text-5xl font-[500] uppercase text-[#fff] md:hidden md:text-[170px] md:tracking-[-6px]">
            EXPLORE OUR MENU
          </h1>
        </div>
        <div className="flex h-full w-full flex-col gap-8 md:flex-row">
          <div className="z-50 flex w-full flex-col items-center justify-center gap-6 md:w-[33%]">
            <div className="h-full w-full">
              <Image
                src={"/images/hero/image1.png"}
                width={677}
                height={503}
                alt="image"
                className="z-50 h-auto w-full"
              />
            </div>
            <h6 className="text-center font-sofia_sans text-2xl font-[700] uppercase text-[#fff] md:text-3xl md:tracking-[2.8px]">
              BREAKFAST
            </h6>
          </div>
          <div className="z-50 flex w-full flex-col items-center justify-center gap-6 md:w-[33%]">
            <div className="h-full w-full">
              <Image
                src={"/images/hero/image2.png"}
                width={677}
                height={503}
                alt="image"
                className="z-50 h-auto w-full"
              />
            </div>
            <h6 className="text-center font-sofia_sans text-2xl font-[700] uppercase text-[#fff] md:text-3xl md:tracking-[2.8px]">
              BREAKFAST
            </h6>
          </div>
          <div className="z-50 flex w-full flex-col items-center justify-center gap-6 md:w-[33%]">
            <div className="h-full w-full">
              <Image
                src={"/images/hero/image3.png"}
                width={677}
                height={503}
                alt="image"
                className="z-50 h-auto w-full"
              />
            </div>
            <h6 className="text-center font-sofia_sans text-2xl font-[700] uppercase text-[#fff] md:text-3xl md:tracking-[2.8px]">
              BREAKFAST
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
