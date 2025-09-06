"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import slideImage01 from "./_assets/AMRSL-S01.jpg";
import slideImage02 from "./_assets/AMRSL-S02.jpg";
import slideImage03 from "./_assets/AMRSL-S03.jpg";
import slideImage04 from "./_assets/AMRSL-S04.jpg";
import slideImage05 from "./_assets/AMRSL-S05.jpg";

export const images = [
  slideImage05,
  slideImage01,
  slideImage02,
  slideImage03,
  slideImage04,
];

export default function LandingCaorusel() {
  return (
    <div className="w-full relative bg-secondary">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnFocusIn: false,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-[75dvh] lg:h-[600px]">
          {images.map((image, index) => (
            <CarouselItem key={image.src} className="relative h-full">
              <Image
                src={image}
                alt={`Who we are ${index + 1}`}
                fill
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <h1 className="p-4 bg-black/75 text-primary-foreground absolute w-full md:max-w-md text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Welcome to <br /> Ave Maria Religious Supplies Ltd.
      </h1>
    </div>
  );
}
