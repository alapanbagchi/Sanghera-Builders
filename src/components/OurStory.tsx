"use client";
import { Button } from "./ui/button";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  // Create a scroll-based motion value for parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <div className="w-full h-[600px] max-[1000px]:h-fit pt-24 -mb-36" ref={ref}>
      <div className="flex max-[1000px]:pt-20 justify-center bg-[#434236] max-[1000px]:flex-col my-auto relative h-full max-w-[1050px] mx-auto">
        {/* Text Section */}
        <div className="flex items-center justify-center max-[600px]:pl-4 pl-36 text-white">
          <div className="w-[550px] max-[600px]:w-full space-y-8">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="font-[brandon-grotesque] -mb-4 text-secondary font-semibold text-md uppercase"
            >
              OUR STORY
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="text-[50px] tracking-wide max-[1000px]:text-[56px] max-[720px]:text-[52px] max-[600px]:text-[35px] leading-[1.3]"
            >
              Bringing Visions to Life for Over 15 Years.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              <Button className="text-[#E8E1DC]" variant="secondary" asChild>
                <Link href="/our-story">Get to know us</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Main Image Section with Parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          // Apply vertical parallax only when in view
          style={{ y: isInView ? parallax : 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="flex items-center max-[1000px]:w-full max-[1000px]:mt-20 max-[1000px]:justify-center"
        >
          <img
            className="w-[420px] object-cover h-[440px] translate-x-28 max-[1400px]:-translate-x-5 max-[1000px]:translate-x-0 max-[1000px]:w-full max-[1000px]:h-[340px]"
            src="/OurStory1.jpg"
            alt=""
          />
        </motion.div>

        {/* Extra (Overlapping) Image for Desktop with Parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, left: "15%", top: "-42%" }}
          animate={
            isInView ? { opacity: 1, scale: 1, left: "18%", top: "-45%" } : {}
          }
          // Apply the parallax effect here as well
          style={{ y: isInView ? parallax : 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex items-center max-[1000px]:hidden w-fit absolute"
        >
          <img
            className="w-[328px] object-cover h-[328px]"
            src="OurStory2.jpg"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};
