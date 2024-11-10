import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Slider = ({ sliderList, backendBaseUrl }) => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {sliderList.map((slider, _id) => (
            <CarouselItem key={_id}>
              <Image
                src={
                  backendBaseUrl +
                  slider?.image?.[0]?.url
                }
                alt="slider"
                width={1000}
                height={400}
                className="w-full h-[200px] md:h-[550px] object-cover rounded-2xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
