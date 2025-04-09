"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-white px-4 pt-2 lg:px-8">
      <div className="flex flex-col gap-4 pt-12 md:gap-8 lg:pt-24">
        {/* first  div */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-14 md:px-32">
          {/* sub first  div */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-36">
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-8">
              <div>
                <Link href={"/"}>
              <p className="text-8xl font-sofia_sans font-[500]">CAFE</p>
                </Link>
              </div>
              <div className="flex flex-col items-center gap-2 md:items-start md:pt-4">
                <div className="flex flex-col items-center md:items-start">
                  <span className="flex flex-col text-center font-open_sans text-base font-[600] uppercase text-[#323232] md:text-start tracking-[1px]">Contact</span>
                  <br/>
                  <span>
                    <Link
                      className="flex flex-col text-center font-open_sans text-base font-[400] uppercase text-[#323232] md:text-start tracking-[1px]"
                      target="_blank"
                      href={"https://g.co/kgs/34ojPbT"}
                    >
                      69-71 London Rd, Stockton<br/> Heath, Warrington WA4 6SG,<br/> United Kingdom
                    </Link>
                  </span>
                  <br/>
                  <span>
                    <Link
                      className="font-open_sans text-base font-[400] uppercase text-[#323232] tracking-[1px]"
                      href={"tel:01925 269369"}
                    >
                      01925 269369{" "}
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="font-open_sans text-base font-[400] uppercase text-[#323232] tracking-[1px]"
                      href={"mailto:info@zaloscafe.co.uk"}
                    >
                     info@zaloscafe.co.uk
                    </Link>
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 md:gap-4">
                <Link
                  href={"https://www.instagram.com/levantelixirofco/"}
                  target="_blank"
                >
                  <Icons.instagram className="text-[#323232]" />
                </Link>
                <Link
                  href={
                    "https://www.tripadvisor.in/Restaurant_Review-g187069-d32861312-Reviews-Levant_Elixir_Of_Co_existence-Manchester_Greater_Manchester_England.html"
                  }
                  target="_blank"
                >
                  <Icons.unknown className="text-[#323232]" />
                </Link>
                <Link href={"https://g.co/kgs/kfvqUBt"} target="_blank">
                  <Icons.google className="text-[#323232]" />
                </Link>
                <Link
                  href={"https://www.facebook.com/levantelixirofco"}
                  target="_blank"
                >
                  <Icons.facebook className="text-[#323232]" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:mt-24 md:items-start md:gap-6">
              <Link
                href={"/"}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-[#323232]"
              >
                Home
              </Link>
              <Link
                href={"/menu"}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-[#323232]"
              >
                Menu
              </Link>
              <Link
                href={"#"}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-[#323232]"
              >
               Products
              </Link>
              {/* <Link
                href={"/about-us"}
                className="font-open_sans text-xs font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                About
              </Link> */}

              {/* <Link
                href={""}
                className="font-open_sans text-xs font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Products
              </Link> */}
              <Link
                href={"/table-booking"}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-[#323232]"
              >
                Reservation
              </Link>
              <Link
                href={"/contact"}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-[#323232]"
              >
                Contact Us
              </Link>
            </div>{" "}
          </div>

          {/* sub second  div */}
          <div className="flex w-full flex-col items-center gap-2 md:w-[400px] md:items-start md:pt-16">
            <h6 className="font-open_sans text-base font-[600] uppercase tracking-[2.2px] text-[#323232] md:pb-4">
              Opening Hours
            </h6>
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
              <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-[#323232]">
                  tuesday - Thursday{" "}
                </span>
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-[#323232]">
                8 AM - 11 PM{" "}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-[#323232]">
                  Friday - Saturday{" "}
                </span>
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-[#323232]">
                9 AM - 11 PM{" "}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-[#323232]">
                  Sunday{" "}
                </span>
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-[#323232]">
                9 AM - 10 PM{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* second  div */}
        <div className="flex flex-col gap-4">
          <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />
          <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:items-start md:justify-between">
            <Link href={"https://foodo.ai/"} target="_blank">
              <span className="font-open_sans pb-6 text-xs font-[400] lowercase tracking-[1px] text-[#323232]">
                Powerd by fo0do{" "}
              </span>
            </Link>
            <p className="font-open_sans pb-6 text-xs font-[400] lowercase tracking-[1px] text-[#323232]">
              © 2025 CAFE ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;