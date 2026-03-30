import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type StatItem = {
  end: number;
  suffix: string;
  label: string;
};

const About: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const stats: StatItem[] = [
    { end: 10,   suffix: "+", label: "Years of Experience" },
    { end: 500,  suffix: "+", label: "Cases Disposed" },
    { end: 100,  suffix: "+", label: "Due Diligence Assisted" },
    { end: 1000, suffix: "+", label: "Opinions Delivered" },
    { end: 100,  suffix: "+", label: "Agreements Drafted" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const fadeUp = (delay = 0) => ({
    initial: { y: 40, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  const fadeLeft = (delay = 0) => ({
    initial: { x: -50, opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : {},
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  const fadeRight = (delay = 0) => ({
    initial: { x: 50, opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : {},
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#f9f8f6] py-16 md:py-24 px-5 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute top-0 right-0 w-72 h-72 bg-[#1a1f3c]/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-56 h-56 bg-[#c9a84c]/10 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-6xl mx-auto">

        {/* ── HEADING ── */}
        <motion.div {...fadeUp(0)} className="mb-10 md:mb-16">
          <span className="text-2xl md:text-4xl font-semibold text-[#1a1f3c]">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1f3c] leading-tight max-w-xl mt-1">
            Know More About <br className="hidden md:block" />
            Our Legal Firm
          </h2>
          <div className="mt-4 w-12 h-1 bg-[#c9a84c] rounded-full" />
        </motion.div>

        {/* ── STATS GRID ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-12 md:mb-20"
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 16px 40px rgba(26,31,60,0.13)",
                transition: { type: "spring", stiffness: 300, damping: 18 },
              }}
              className={`relative bg-white rounded-2xl px-4 py-5 md:py-7 flex flex-col items-center justify-center shadow-sm border border-gray-100 cursor-default overflow-hidden
                ${i === 4 ? "col-span-2 md:col-span-1" : ""}
              `}
            >
            

              {/* Shimmer sweep on hover */}
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
              />

              {/* Count — BLACK */}
             <div className="text-2xl md:text-4xl font-bold text-black flex items-center justify-center">
  <span className="font-mono tabular-nums">
    {inView ? (
      <CountUp
        start={0}
        end={item.end}
        duration={2.4}
        delay={0.4 + i * 0.1}
        separator=","
      />
    ) : (
      <span>0</span>
    )}
    <span className="text-black">+</span>
  </span>
</div>

              <p className="mt-2 text-gray-500 text-xs md:text-sm text-center leading-snug font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── MAIN CONTENT ── */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* LEFT */}
          <motion.div {...fadeLeft(0.2)} className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-4xl font-bold text-[#1a1f3c] leading-snug">
              We Provide Clear and Trusted Legal Support for Every Client
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our team works closely with you, offering honest advice and simple
              solutions for every legal need — from start to finish.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We provide clear and reliable legal support to help you understand
              your situation and make the right decisions with confidence.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-10 h-[2px] bg-[#c9a84c] origin-left"
              />
              <span className="text-xs tracking-widest uppercase text-gray-400 font-medium">
                Trusted. Clear. Reliable.
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Images */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              {...fadeRight(0.25)}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/court1.png"
                  alt="Court"
                  className="w-full h-40 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm border border-gray-100">
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Honest advice and simple solutions for every legal need.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeRight(0.35)}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex flex-col gap-4 mt-6 group cursor-pointer"
            >
              <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm border border-gray-100">
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Guiding you through each step with confidence and care.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/handshake.jpg"
                  alt="Handshake"
                  className="w-full h-40 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;