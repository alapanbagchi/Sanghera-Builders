"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const wordVariant = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const headingVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
};

const ApproachPage = () => {
  const sentence =
    "We tailor every build to suit your needs, ensuring the final result is exactly what you envisioned. Whether it’s a new build, renovation, or commercial project, we work hand-in- hand with you throughout the entire process to deliver quality craftsmanship and lasting results.";
  const blocks = [
    {
      img: "clap.svg",
      title: "Relationship-Based",
      text: "We start every project by getting to know our clients and building relationships that will last long after the last nail is hammered.",
    },
    {
      img: "roadmap.svg",
      title: "Built to Last a Lifetime",
      text: "From selecting the ideal site to planning, designing, and building, our expert team is here to guide you through every step of the process.",
    },
    {
      img: "checkmark.svg",
      title: "With you ever step of the way",
      text: "We bring the highest level of quality and care to every project, ensuring lasting results you can rely on for years to come.",
    },
  ];

  const projectSteps = [
    {
      title: "Consultation & Site Selection",
      text: "Every great build starts with a strong foundation—both structurally and in planning. Whether you have a site in mind or need guidance in choosing the right location, we’ll help ensure it’s the perfect fit for your project.",
    },
    {
      title: "Planning & Design",
      text: "With your vision as our guide, we collaborate to create a plan that meets your needs, whether it’s a home renovation, a commercial space, or a new build. Every detail is thoughtfully considered to ensure practicality, efficiency, and great design.",
    },
    {
      title: "Materials & Finishes Selection",
      text: "From structural elements to finishing touches, we help you select high-quality materials that align with your style, functionality, and budget—ensuring a result that is both durable and visually stunning.",
    },
    {
      title: "Cost Estimation & Finalization",
      text: "Before construction begins, we provide a clear and transparent estimate. We finalize the plans, confirm every detail, and ensure everything is aligned with your expectations.",
    },
    {
      title: "Construction & Project Management",
      text: "Our experienced team of builders, project managers, and specialists bring your project to life with precision and care. Open communication, on-time delivery, and exceptional craftsmanship define our approach.",
    },
    {
      title: "Progress Tracking & Updates",
      text: "Stay connected to your project with regular updates and site visits. We ensure full transparency throughout the build, so you’re always in the loop.",
    },
    {
      title: "Completion & Ongoing Support",
      text: "Once your project is complete, we conduct a thorough final walkthrough to ensure everything meets our high standards—and yours. We also provide aftercare support, giving you confidence in the lasting quality of our work.",
    },
  ];
  return (
    <div className="h-full">
      <div className="w-full h-[350px] relative flex justify-center items-center">
        <Image
          fill={true}
          className="w-full h-full object-cover brightness-50"
          src="https://www.aspenhomes.com/wp-content/themes/aspenhomes/dist/images/trees-bg-full.jpg"
          alt=""
        />
        <motion.h1
          className="my-auto absolute mx-auto text-white text-[64px] max-[1000px]:text-[56px] max-[720px]:text-[52px] max-[600px]:text-[35px] text-center leading-[1.3]"
          variants={headingVariant}
          initial="hidden"
          animate="visible"
        >
          Our Approach
        </motion.h1>
      </div>
      <div className="mx-auto w-full mt-20 flex items-center flex-col max-[1660px]:w-full max-[1550px]:space-y-6 space-y-10 h-full">
        <motion.p
          className="font-[brandon-grotesque] w-fit text-secondary font-semibold text-md uppercase"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          OUR APPROACH
        </motion.p>

        <motion.h2
          className="text-[40px] max-[1000px]:text-[28px] w-fit tracking-wide max-w-[1280px] text-center px-8 leading-[1.3]"
          variants={headingVariant}
          initial="hidden"
          animate="visible"
        >
          {sentence.split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              custom={i}
              variants={wordVariant}
              initial="hidden"
              animate="visible"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h2>
        <div className="flex justify-center items-center gap-8  max-[1000px]:flex-col px-4">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              className="flex items-center flex-col gap-10 bg-[#E8E1DC] p-[50px] h-[400px] border-t-[6px] border-t-black justify-center"
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
            >
              <Image fill={true} src={block.img} alt="" />
              <h3 className="text-[16px] uppercase font-semibold font-[brandon-grotesque] w-fit tracking-wide max-w-[1280px] text-center px-8 leading-[1.3]">
                {block.title}
              </h3>
              <p className="text-[16px]  opacity-80 font-[brandon-grotesque] max-w-[320px] text-center">
                {block.text}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="gap-4 text-center flex flex-col items-center w-full h-full">
          <motion.p
            className="font-[brandon-grotesque] w-fit text-secondary font-semibold text-md uppercase"
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            OUR PROCESS
          </motion.p>
          <motion.h3
            className="text-[40px] mb-10 max-[1000px]:text-[28px] w-fit tracking-wide max-w-[1280px] text-center px-8 leading-[1.3]"
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            Tried and True
          </motion.h3>
          <div className="flex gap-20 h-full">
            <div className="w-[500px] h-[600px] max-[1000px]:hidden">
              <Image
                fill={true}
                className="object-cover w-full h-full"
                src="/Slides/1.jpg"
                alt=""
              />
            </div>
            <div className="space-y-10 px-4 pb-40">
              {projectSteps.map((process) => (
                <Accordion
                  key={process.title}
                  type="single"
                  collapsible
                  className="max-w-[489.53px]"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>{process.title}</AccordionTrigger>
                    <AccordionContent>{process.text}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachPage;
