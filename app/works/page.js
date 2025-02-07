"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const works = [
  { id: 1, title: "placeholder 1", img: "/placeholder.png" },
  { id: 2, title: "placeholder 2", img: "/placeholder.png" },
  { id: 3, title: "placeholder 3", img: "/placeholder.png" },
  { id: 4, title: "placeholder 4", img: "/placeholder.png" },
  { id: 5, title: "placeholder 5", img: "/placeholder.png" },
  { id: 6, title: "placeholder 6", img: "/placeholder.png" },
  { id: 7, title: "placeholder 7", img: "/placeholder.png" },
  { id: 8, title: "placeholder 8", img: "/placeholder.png" },
  { id: 9, title: "placeholder 9", img: "/placeholder.png" },
];

export default function Works() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const visibleSlides = 3;

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? works.length - visibleSlides : prev - 3
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + visibleSlides >= works.length ? 0 : prev + 3));
  };

  return (
    <main className="p-5 lg:p-10 ">
      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-7 w-full">
        Our Works
      </h1>

      <div className="relative flex flex-col items-center justify-center bg-[#131A2A] rounded-xl p-5  ">
        <button
          onClick={prevSlide}
          className="absolute left-3 z-10 bg-gray-700 p-2 rounded-full text-white"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="relative flex overflow-hidden w-full max-w-8xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, [isMobile ? "y" : "x"]: 50 }}
              animate={{ opacity: 1, [isMobile ? "y" : "x"]: 0 }}
              exit={{ opacity: 0, [isMobile ? "y" : "x"]: -50 }}
              transition={{ duration: 0.5 }}
              className={`flex gap-5 w-full ${
                isMobile ? "flex-col" : "flex-row"
              }`}
            >
              {works.slice(current, current + visibleSlides).map((work) => (
                <div
                  key={work.id}
                  className="flex flex-col items-center p-3 bg-[#16233C] rounded-lg transition-all duration-300 w-full "
                >
                  <div className="w-full h-32 xxsm:h-44 xsm:h-64 md:h-52 lg:h-72 bg-gray-300 rounded-md"></div>
                  <p className="mt-2 text-white">{work.title}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-3 z-10 bg-gray-700 p-2 rounded-full text-white"
        >
          <ChevronRight size={20} />
        </button>

        <div className="flex justify-center mt-6 mb-2 space-x-2">
          {Array.from({ length: Math.ceil(works.length / visibleSlides) }).map(
            (_, index) => (
              <span
                key={index}
                className={`h-1.5 w-11 rounded-full transition-all duration-300 ${
                  current / visibleSlides === index
                    ? "bg-gray-200"
                    : "bg-gray-500"
                }`}
              ></span>
            )
          )}
        </div>
      </div>
    </main>
  );
}
