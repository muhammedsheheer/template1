"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-white pb-28 pt-10 md:pb-32 md:pt-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 pb-4 md:pb-5 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-center font-sofia_sans text-5xl font-[500] uppercase text-[#EA5482] md:text-8xl">
              REVIEWS{" "}
            </h1>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          {reviews && (
            <Carousel className="ml-6 mr-0 w-full md:ml-0 md:mr-12">
              <CarouselContent className="flex w-full justify-center gap-4 md:ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className={`flex w-full basis-full flex-col items-center justify-center gap-6 rounded-none border border-[#EA5482] bg-[#EA5482] py-6 md:basis-1/3 md:py-12`}
                  >
                    <div className="flex flex-col items-start justify-start gap-6 px-6 pb-4">
                      {/* <div className="flex flex-row items-center justify-center gap-1">
                        <Image
                          src={review.authorAttribution.photoUri}
                          width={677}
                          height={503}
                          alt="image"
                          className="h-10 w-10"
                        />
                        <div className="flex flex-col">
                          <p>{review.authorAttribution.displayName}</p>
                          <p>{review.relativePublishTimeDescription}</p>
                        </div>
                      </div> */}
                      <div className="flex w-full justify-center">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Icons.star
                              key={index}
                              className="text-[#FFF]"
                            />
                          ),
                        )}
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="line-clamp-6 font-poppins text-sm font-[500] text-[#FFF] md:text-base tracking-[2px] text-center">
                          {review.text.text}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#000] bg-[#000] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#000] bg-[#000] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
