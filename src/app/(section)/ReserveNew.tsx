import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function ReserveNew() {
    return (
      <section className='w-full h-full flex flex-col md:flex-row py-12'>
          <div className="w-full md:w-1/3">
          <Image
            src="/images/home/reserve/1.png"
            width={560}
            height={877}
            alt="social"
            className="max-h-[700px] object-cover"
          />
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-5 justify-center px-4 md:px-[60px] py-6">
             <p className="font-playfair text-black capitalize">booking</p>
             <p className="font-playfair text-black text-6xl">Reserve Your 
             Table <span className="italic">at Zola’s Cafe</span></p>
             <p className="font-inter text-black font-[300] text-sm">Experience the warmth of Zola’s Cafe, where great coffee meets a cozy ambiance. Book your table now and enjoy a delightful dining experience filled with rich flavours, handcrafted beverages, and a welcoming atmosphere.</p>
             <Button className="bg-[#714c23] w-fit px-6 py-7 flex items-center justify-center rounded-full gap-1">
                <span className="font-playfair text-lg">Book Now</span>
                <ArrowRight className="mt-1 h-5 w-5"/>
             </Button>
          </div>
          <div className="w-full md:w-1/3 flex gap-4">
          <Image
            src="/images/home/reserve/2.png"
            width={100}
            height={877}
            alt="social"
                 className="max-h-[700px] object-cover"
          />
                 <Image
            src="/images/home/reserve/3.png"
            width={478}
            height={877}
            alt="social"
                 className="max-h-[700px] object-cover"
          />
          </div>
      </section>
    )
  }
  
  export default ReserveNew