"use client";
import { motion } from "framer-motion";

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

const fadeInVariantDelay = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 2 } },
};
const Page = () => {
  const sentence =
    "We pride ourselves on the reliability that comes from over 15 years of construction and craftsmanship across the UK. Count on us for a trusted partnership throughout your build. Our company was started by family, remains rooted in family, and focuses on making all clients family.";

  return (
    <div>
      <div className="w-full h-[350px] relative flex justify-center items-center">
        <img
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
          Our Story
        </motion.h1>
      </div>
      <div className="mx-auto w-full mt-20 flex items-center flex-col max-[1660px]:w-full max-[1550px]:space-y-6 space-y-10">
        <motion.p
          className="font-[brandon-grotesque] w-fit text-secondary font-semibold text-md uppercase"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          WHO WE ARE
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
        <div className="flex gap-10 w-full justify-center max-[1200px]:flex-col px-8">
          <motion.img
            src="Slides/5.jpg"
            alt=""
            className="w-[900px] h-[550px] object-cover max-[1200px]:w-full max-[1200px]:h-fit"
            variants={fadeInVariantDelay}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>
        <div className="w-full max-[1000px]:h-full pt-20">
          <div className="flex bg-[#E8E1DC] w-full py-20 px-20 max-[1000px]:px-4 justify-center max-[1500px]:flex-col">
            <div className="flex items-center justify-center w-full">
              <div className="w-full max-[1550px]:space-y-6 space-y-10 pl-20 max-[1550px]:pl-0">
                <p className="font-[brandon-grotesque] text-secondary font-semibold text-md uppercase">
                  OUR TEAM
                </p>
                <motion.h2
                  className="text-[32px] w-fit tracking-wide max-[1000px]:text-[38x] max-[720px]:text-[32px] max-[600px]:text-[28px] leading-[1.4] max-w-[1280px]"
                  variants={headingVariant}
                  initial="hidden"
                  animate="visible"
                >
                  Amandeep began his career working for a well-respected British
                  construction company, where his talent and dedication quickly
                  set him apart. Recognized for his skill and keen eye for
                  detail, he progressed to a Construction Manager role, gaining
                  invaluable experience across a diverse range of projects. With
                  a passion for quality craftsmanship and a commitment to
                  excellence, Amandeep took the leap to start his own
                  construction company with his brother. Over the past 15 years,
                  he has built a reputation for reliability, precision, and
                  customer satisfaction—maintaining a 100% satisfaction rate.
                  Today, his company continues to thrive, delivering exceptional
                  results across residential and commercial projects.
                </motion.h2>
              </div>
            </div>
            <div className="flex items-center w-full max-[1500px]:w-full max-[1500px]:mt-20">
              <motion.img
                className="object-cover w-full max-w-[600px] max-[1500px]:max-w-none h-[800px] max-[1500px]:w-full max-[1600px]:ml-0 ml-auto"
                src="https://www.aspenhomes.com/wp-content/uploads/2022/01/28Master-bedroom.jpg-SMALL.jpg"
                alt=""
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
