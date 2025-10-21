"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";

// Testimonial type - keeping the structure but repurposing for images
type Testimonial = {
  quote?: string;
  name?: string;
  designation?: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  // Navigate to next slide
  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  // Navigate to previous slide
  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Check if current index is active
  const isActive = (index: number) => {
    return index === active;
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Generate random rotation for card stack effect
  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-6xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Image Carousel */}
        <div>
          <div className="relative h-96 w-full md:h-[500px] lg:h-[600px]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={`Slide ${index + 1}`}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation and Info Section */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            {testimonials[active].name && (
              <>
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  {testimonials[active].designation}
                </p>
              </>
            )}
            
            {/* Slide counter */}
            <div className="mt-8 text-lg font-semibold text-gray-600 dark:text-neutral-300">
              Slide {active + 1} of {testimonials.length}
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 transition-colors dark:bg-indigo-500/20"
            >
              <IconArrowLeft className="h-5 w-5 text-indigo-600 dark:text-indigo-300 transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 transition-colors dark:bg-indigo-500/20"
            >
              <IconArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-300 transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
