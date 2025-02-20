"use client";
import * as React from "react";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type StaggeredTextProps = {
  text: string;
  staggerChildren?: number;
  delayChildren?: number;
};

type Home = {
  name: string;
  img: string;
};

const StaggeredText: React.FC<StaggeredTextProps> = ({
  text,
  staggerChildren = 0.05,
  delayChildren = 0,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const fadeVariant = {
    hidden: { opacity: 0, y: -18 },
    show: { opacity: 1, y: 0 },
  };
  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        show: {
          transition: { staggerChildren, delayChildren },
        },
      }}
      className="inline-block"
    >
      {words.map((word, wordIndex, arr) => (
        <span
          key={wordIndex}
          style={{ whiteSpace: "nowrap", display: "inline-block" }}
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={fadeVariant}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < arr.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.div>
  );
};

export const Slider: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [lightboxImage, setLightboxImage] = React.useState<string | null>(null);
  const [lightboxText, setLightboxText] = React.useState<string>("");

  const homes = [
    { name: "Hayes (Patio, Driveway, Porch)", img: "/Slides/1.jpg" },
    { name: "Kingston (New build)", img: "/Slides/2.jpg" },
    { name: "Sutton (Renovation, Extension, Loft)", img: "/Slides/3.jpg" },
    { name: "Hayes(Outhouse, Garden)", img: "/Slides/4.jpg" },
    { name: "Pinner(New Build)", img: "/Slides/5.jpg" },
    { name: "Eastcote(Loft Conversion)", img: "/Slides/6.jpg" },
    { name: "Kingston(Kitchen)", img: "/Slides/7.jpg" },
    { name: "Kingston(Kitchen)", img: "/Slides/8.jpg" },
    { name: "Edgeware(Kitchen Extension)", img: "/Slides/9.jpg" },
    { name: "Sutton(Side Extension)", img: "/Slides/10.jpg" },
    { name: "Sutton(Loft Conversion)", img: "/Slides/11.jpg" },
    { name: "Sutton(Loft Conversion)", img: "/Slides/12.jpg" },
    { name: "Sutton(Loft Conversion)", img: "/Slides/13.jpg" },
    { name: "Sutton(Landing)", img: "/Slides/14.jpg" },
    { name: "Sutton (Stairway)", img: "/Slides/15.jpg" },
    { name: "Sutton (Bathroom 1)", img: "/Slides/16.jpg" },
    { name: "Sutton (Bathroom 1)", img: "/Slides/17.jpg" },
    { name: "Sutton (Bathroom 1)", img: "/Slides/18.jpg" },
    { name: "Sutton (Bathroom 2)", img: "/Slides/19.jpg" },
    { name: "Sutton (Bathroom 2)", img: "/Slides/20.jpg" },
    { name: "Sutton (Bathroom 2)", img: "/Slides/21.jpg" },
  ];
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <div
      ref={ref}
      className="flex h-fit max-w-[1640px] ml-auto max-[1000px]:flex-col pl-10 max-[600px]:px-4"
    >
      <div className="pr-10 h-min flex flex-col justify-center mt-24 max-[1000px]:mt-0 space-y-4">
        <motion.p
          initial={{ x: 20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-md text-secondary font-semibold font-['brandon-grotesque'] max-[600px]:text-[15px]"
        >
          OUR PROJECTS
        </motion.p>
        <motion.h2 className="text-[50px] pb-20 tracking-wide max-[1000px]:text-[56px] max-[720px]:text-[52px] max-[600px]:text-[35px] leading-[1.3]">
          <StaggeredText
            text="Beautifully Built and Crafted with Care"
            staggerChildren={0.04}
            delayChildren={0.3}
          />
        </motion.h2>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex gap-2 mb-4 p-4 bg-input w-fit rounded-full"
        >
          <button
            onClick={() => api?.scrollPrev()}
            className="px-4 py-2 rounded-full"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="px-4 py-2 rounded-full"
          >
            <ArrowRight />
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
        className="w-full h-full"
      >
        <Carousel className="w-full h-full" setApi={setApi}>
          <CarouselContent className="w-full h-full space-x-2">
            {homes.map((home, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 max-[1600px]:basis-1/2 max-[1200px]:basis-full max-[1000px]:mt-10 w-full h-full"
              >
                <img
                  className="object-cover max-[1600px]:w-[500px] max-[1600px]:w-full w-[400px] h-[520px] cursor-pointer"
                  src={home.img}
                  alt="Aspens Home Hero Banner"
                  onClick={() => {
                    setLightboxImage(home.img);
                    setLightboxText(home.name);
                  }}
                />
                <div className="font-[brandon-grotesque] bg-primary absolute -mt-20 w-fit px-4 py-2 text-white font-medium text-xl flex gap-2">
                  <p className="text-secondary">{index + 1}</p>
                  <p>{home.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
      {lightboxImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-full max-h-full mb-4"
          />
          <p className="text-white text-lg font-medium">{lightboxText}</p>
        </motion.div>
      )}
    </div>
  );
};
