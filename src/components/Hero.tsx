"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

// Updated TextFade without inView
export function TextFade({
  direction,
  children,
  className = "",
  staggerChildren = 0.1,
  delayChildren = 0,
}: {
  direction: "up" | "down";
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}) {
  const fadeVariant = {
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
    hidden: { opacity: 0, y: direction === "down" ? -18 : 18 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={fadeVariant} className="inline-block">
            {child}
          </motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}

export const Hero = () => {
  const firstLine = "Every Project, Every Detail";
  const secondLine = "Built to Last";

  const staggerTime = 0.02;
  const firstLineDelay = firstLine.length * staggerTime + 0.2;

  const renderText = (text: string) =>
    text.split("").map((char, index) => (
      <span key={index} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <div className="relative w-full h-[100vh]">
      {/* Overlay Content */}
      <div className="absolute top-0 z-10 text-white w-full h-full flex flex-col items-center justify-center gap-4">
        <motion.h1 className="text-[64px] max-[1000px]:text-[56px] max-[720px]:text-[52px] max-[600px]:text-[35px] text-center leading-[1.3]">
          {/* Ensures text stays together on small screens */}
          <div className="block">
            <TextFade
              direction="down"
              staggerChildren={staggerTime}
              className="inline-block"
            >
              {renderText(firstLine)}
            </TextFade>
            <br />
            <TextFade
              direction="down"
              staggerChildren={staggerTime}
              delayChildren={firstLineDelay}
              className="inline-block"
            >
              {renderText(secondLine)}
            </TextFade>
          </div>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: firstLineDelay + 0.5,
          }}
          className="flex gap-5 pt-6 max-[600px]:flex-col max-[600px]:items-center"
        >
          <Button asChild>
            <Link href="/approach">
              <MapIcon className="text-secondary font-medium" strokeWidth={2} />
              Discover our approach
            </Link>
          </Button>
        </motion.div>
      </div>
      {/* Background Image Container */}
      <div className="relative top-0 w-full h-full overflow-hidden bg-primary">
        <motion.img
          className="object-cover w-full h-full brightness-75 rotate-[5deg] scale-[1.18]"
          src="/Hero_Banner.jpg"
          alt="Aspens Home Hero Banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};
