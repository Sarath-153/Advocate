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
    threshold: 0.3,
  });

  const stats: StatItem[] = [
    { end: 5, label: "Years of Experience" },
    { end: 50, label: "Cases Handled" },
    { end: 10, label: "Practice Areas" },
  ];

  return (
    <section id="about" ref={ref} className="bg-white py-5 px-6 md:px-20 overflow-hidden scroll-mt-11">
      {/* ABOUT US HEADING */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="text-left mb-14"
      >
        <h3 className="text-4xl md:text-4xl font-bold mt-3 text-[#1a1f3c]">
          ABOUT US
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold mt-3">
          Know More About Our Legal Firm
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* LEFT COUNTER SECTION */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-14 justify-center"
        >
          {stats.map((item: StatItem, index: number) => (
            <div
              key={index}
              className="group flex items-center gap-6 justify-start"
            >
              <div className="h-20 w-14 border-l-2 border-b-2 border-gray-300 rounded-bl-full"></div>

              <div>
                <h2 className="text-5xl font-semibold transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110">
                  {inView && (
                    <CountUp start={0} end={item.end} duration={2} />
                  )}
                  +
                </h2>
                <p className="text-gray-500 text-sm mt-2">{item.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-2">
          {/* TITLE ANIMATION */}
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-12 text-center md:text-left"
          >
            WE PROVIDE CLEAR AND TRUSTED LEGAL SUPPORT FOR EVERY CLIENT
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* COURT IMAGE */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <img
                src="/images/court.png"
                alt="court"
                className="rounded-lg shadow-lg hover:scale-105 transition duration-500 w-full h-64 object-cover"
              />

              <p className="mt-4 text-gray-600">
                Our team works closely with you, offering honest advice and
                simple solutions for every legal need.
              </p>
            </motion.div>

            {/* HANDSHAKE */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
              className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <p className="text-gray-600">
                We provide clear and reliable legal support to help you
                understand your situation and make the right decisions.
              </p>

              <img
                src="/images/handshake.jpg"
                alt="handshake"
                className="rounded-lg shadow-lg hover:scale-105 transition duration-500 w-full h-64 object-cover"
              />

              <p className="text-gray-600">
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