"use client";
import { Button } from "./ui/button";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export const ContactUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <div className="w-full h-[500px] pt-24" ref={ref}>
      <div className="flex justify-center bg-[#E8E1DC] my-auto relative h-full">
        <div className="flex items-center justify-center">
          <div className="w-[550px] max-[600px]:w-full space-y-8 flex flex-col items-center">
            {/* Heading fades in from above (fade down) */}
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-[50px] tracking-wide max-[1000px]:text-[56px] text-center max-[720px]:text-[52px] max-[600px]:text-[35px] leading-[1.3]"
            >
              It All Starts With an Idea <br /> {"Let's chat"}
            </motion.h2>

            {/* Button fades in from below (fade up) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              <Button className="text-[#E8E1DC]" asChild>
                <Link href="/contact">Contact our team today</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
