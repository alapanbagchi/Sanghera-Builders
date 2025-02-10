"use client";
import { Menu, Phone, XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const links = [
    { text: "Discover our Approach", href: "approach" },
    { text: "About Us", href: "our-story" },
    { text: "Contact Us", href: "contact" },
  ];

  return (
    <header className="absolute top-0 z-50 px-[50px] py-[50px] w-full max-[600px]:px-[15px]">
      <nav className="max-w-[1240px] mx-auto">
        <ul className="flex items-center">
          <li className="mr-6 mt-3">
            <Link href={"/"}>
              <img src="/logo.svg" alt="Logo" />
            </Link>
          </li>
          <li className="ml-auto mr-6 max-[600px]:mr-3">
            <Button variant="outline" asChild>
              <Link href={"/contact"}>
                <Phone />
                <p className="max-[600px]:hidden">CONTACT US</p>
              </Link>
            </Button>
          </li>
          <li className="z-10">
            <Button
              variant={showNavbar ? "outline" : "secondary"}
              onClick={() => setShowNavbar(!showNavbar)}
            >
              {!showNavbar ? <Menu /> : <XIcon />}
              <p className="max-[600px]:hidden">
                {!showNavbar ? "MENU" : "CLOSE MENU"}
              </p>
            </Button>
          </li>
        </ul>

        {/* Animated Menu */}
        <AnimatePresence>
          {showNavbar && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100vh" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-primary w-full fixed left-0 top-0 overflow-hidden flex"
            >
              <div className="w-2/3 mx-auto mt-24">
                <ul className="text-white max-w-[800px] mx-auto">
                  {links.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                      className="flex text-[36px] tracking-wide max-[1000px]:text-[32px] max-[720px]:text-[52px] max-[600px]:text-[28px] leading-[1.3] gap-4 border-b border-b-white/20 py-6"
                      onClick={() => setShowNavbar(false)}
                    >
                      <p className="mt-auto mb-2 text-[15px] text-secondary">
                        0{index + 1}.
                      </p>
                      <Link href={link.href}>{link.text}</Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Animated Image Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-1/3 max-[1200px]:hidden"
              >
                <img
                  src="https://www.aspenhomes.com/wp-content/uploads/2021/10/004_Wine-Room-5-200x300.jpg"
                  alt=""
                  className="w-full h-full object-cover brightness-75"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
