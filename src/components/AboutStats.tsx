import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type StatItem = {
  end: number;
  label: string;
};

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats: StatItem[] = [
    { end: 10, label: "Years of Experience" },
    { end: 500, label: "Cases Disposed" },
    { end: 100, label: "Due Diligence Assisted" },
    { end: 1000, label: "Opinions Delivered" },
    { end: 100, label: "Agreements Drafted" },
  ];

  return (
    <section id="about" ref={ref} className="bg-white py-12 md:py-16 px-6 md:px-20 overflow-hidden">

      {/* ABOUT US HEADING */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="text-left mb-10 md:mb-14"
      >
        <h3 className="text-2xl md:text-4xl font-semibold text-[#1a1f3c]">
          About Us
        </h3>
        <h1 className="text-xl md:text-4xl font-bold mt-2 text-gray-700">
          Know More About Our Legal Firm
        </h1>
      </motion.div>

      {/* STATS ROW — horizontal on mobile */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-row justify-between md:hidden mb-10 bg-gray-50 rounded-2xl px-4 py-6 shadow-sm"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <h2 className="text-3xl font-bold text-[#1a1f3c] group-hover:text-blue-600 transition-colors duration-300">
              {inView && <CountUp start={0} end={item.end} duration={2} />}+
            </h2>
            <p className="text-gray-500 text-xs mt-1 text-center">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 items-start">

        {/* LEFT COUNTER — desktop only */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="hidden md:flex flex-col gap-14 justify-center"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex items-center gap-6 cursor-pointer"
            >
              <div className="h-20 w-14 border-l-2 border-b-2 border-gray-300 rounded-bl-full group-hover:border-blue-400 transition-colors duration-300" />
              <div>
                <h2 className="text-5xl font-semibold group-hover:text-blue-600 transition-all duration-300">
                  {inView && <CountUp start={0} end={item.end} duration={2} />}+
                </h2>
                <p className="text-gray-500 text-sm mt-2">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-2">

          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-5xl font-bold leading-tight mb-8 md:mb-12 text-center md:text-left"
          >
            WE PROVIDE CLEAR AND TRUSTED LEGAL SUPPORT FOR EVERY CLIENT
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* COURT IMAGE */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/images/court1.png"
                  alt="court"
                  className="w-full h-52 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-gray-600 text-sm md:text-base">
                Our team works closely with you, offering honest advice and
                simple solutions for every legal need.
              </p>
            </motion.div>

            {/* HANDSHAKE */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <p className="text-gray-600 text-sm md:text-base">
                We provide clear and reliable legal support to help you
                understand your situation and make the right decisions.
              </p>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/images/handshake.jpg"
                  alt="handshake"
                  className="w-full h-52 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                From start to finish, we guide you through each step and support
                you with confidence and care.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;