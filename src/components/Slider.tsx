"use client";
import * as React from "react";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// New helper component that animates text in a staggered way while keeping words intact
const StaggeredText = ({
  text,
  staggerChildren = 0.05,
  delayChildren = 0,
}: {
  text: string;
  staggerChildren?: number;
  delayChildren?: number;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Define the animation variant for each letter
  const fadeVariant = {
    hidden: { opacity: 0, y: -18 },
    show: { opacity: 1, y: 0 },
  };

  // Split text into words
  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        show: {
          transition: {
            staggerChildren: staggerChildren,
            delayChildren: delayChildren,
          },
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
          {/* Add a non-breaking space between words, except after the last word */}
          {wordIndex < arr.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.div>
  );
};

export const Slider = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const homes = [
    { name: "Pinner(Kitchen)", img: "/Slides/1.jpg" },
    { name: "Herradora", img: "/Slides/2.jpg" },
    { name: "Herradora", img: "/Slides/3.jpg" },
    { name: "Herradora", img: "/Slides/4.jpg" },
    { name: "Herradora", img: "/Slides/5.jpg" },
    { name: "Herradora", img: "/Slides/6.jpg" },
    { name: "Herradora", img: "/Slides/7.jpg" },
    { name: "Herradora", img: "/Slides/8.jpg" },
    { name: "Herradora", img: "/Slides/9.jpg" },
    { name: "Herradora", img: "/Slides/10.jpg" },
    { name: "Herradora", img: "/Slides/11.jpg" },
    { name: "Herradora", img: "/Slides/12.jpg" },
    { name: "Herradora", img: "/Slides/13.jpg" },
    { name: "Herradora", img: "/Slides/14.jpg" },
    { name: "Herradora", img: "/Slides/15.jpg" },
    { name: "Herradora", img: "/Slides/16.jpg" },
    { name: "Herradora", img: "/Slides/17.jpg" },
    { name: "Herradora", img: "/Slides/18.jpg" },
    { name: "Herradora", img: "/Slides/19.jpg" },
    { name: "Herradora", img: "/Slides/20.jpg" },
    { name: "Herradora", img: "/Slides/21.jpg" },
  ];

  return (
    <div
      ref={ref}
      className="flex h-fit max-w-[1640px] ml-auto max-[1000px]:flex-col pl-10 max-[600px]:px-4"
    >
      {/* Text Section */}
      <div className="pr-10 h-min flex flex-col justify-center mt-24 max-[1000px]:mt-0 space-y-4">
        {/* "OUR PROJECTS" slides in from the left */}
        <motion.p
          initial={{ x: 20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-md text-secondary font-semibold font-['brandon-grotesque'] max-[600px]:text-[15px]"
        >
          OUR PROJECTS
        </motion.p>
        {/* h2 text fades in letter-by-letter while ensuring each word’s letters stay together */}
        <motion.h2 className="text-[50px] tracking-wide max-[1000px]:text-[56px] max-[720px]:text-[52px] max-[600px]:text-[35px] leading-[1.3]">
          <StaggeredText
            text="Beautifully Built and Crafted with Care"
            staggerChildren={0.04}
            delayChildren={0.3}
          />
        </motion.h2>
      </div>

      {/* Carousel Section */}
      {/* Carousel Section (Fades Up) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
        className="w-full h-full"
      >
        <Carousel className="w-full h-full">
          <CarouselContent className="w-full h-full space-x-2">
            {homes.map((home, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 max-[1600px]:basis-1/2 max-[1200px]:basis-full max-[1000px]:mt-10 w-full h-full"
              >
                <img
                  className="object-cover max-[1600px]:w-[500px] max-[1600px]:w-full w-[400px] h-[520px]"
                  src={home.img}
                  alt="Aspens Home Hero Banner"
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
    </div>
  );
};
