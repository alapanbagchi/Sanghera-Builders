"use client";
import { Button } from "./ui/button";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export const Approach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section id="approach" className="w-full h-[600px] max-[1000px]:h-full">
      <div
        ref={ref}
        className="flex justify-center my-auto relative max-[1000px]:pt-20 max-[1000px]:pb-10 h-full max-w-[1450px] max-[1550px]:max-w-none mx-auto max-[1550px]:bg-[#E8E1DC] max-[1550px]:px-10 max-[1000px]:px-4 max-[1000px]:flex-col"
      >
        <div className="bg-[#E8E1DC] w-[1300px] max-[1550px]:w-full flex left-0 h-[600px] max-[1000px]:hidden absolute top-0 -z-10"></div>
        <div className="flex items-center justify-center">
          <div className="w-[550px] max-[1660px]:w-full max-[1550px]:space-y-6 space-y-10">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="font-[brandon-grotesque] text-secondary font-semibold text-md uppercase max-[600px]:text-center"
            >
              Our Approach
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="text-[50px] tracking-wide max-[1000px]:text-[56px] max-[720px]:text-[52px] max-[600px]:text-[35px] leading-[1.3] max-[600px]:text-center"
            >
              Uniquely Designed for What Matters to You
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              className="font-['brandon-grotesque'] max-w-[600px] text-xl opacity-75 max-[600px]:text-center"
            >
              {
                "We bring your vision to life—whether it's a home, business, or renovation. And we do it by working hand-in-hand with you throughout the entire experience."
              }
            </motion.p>
            <motion.div
              className="max-[600px]:mx-auto max-[600px]:w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            >
              <Button className="text-[#E8E1DC] max-[600px]:mx-auto">
                <Link href="/approach">Discover our approach</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="flex items-center max-[1550px]:ml-auto h-fit max-[1000px]:mt-10 mt-12"
        >
          <img
            className="w-[500px] object-cover h-[500px] max-[1000px]:h-[250px] translate-x-60 max-[1550px]:translate-x-0"
            src="/Approach.jpg"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};
