import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const leftCards = [
  {
    title: "Trusted Support",
    desc: "We provide honest and reliable legal guidance you can depend on.",
  },
  {
    title: "Client First",
    desc: "We focus on your needs and work towards the best outcome.",
  },
];

const rightCards = [
  {
    title: "Clear Advice",
    desc: "Simple and easy-to-understand solutions for every legal matter.",
  },
  {
    title: "Experienced Team",
    desc: "Our lawyers bring years of expertise across all practice areas.",
  },
];

const Card = ({ title, desc }: { title: string; desc: string }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="group rounded-2xl p-6 w-64 border border-gray-200 shadow-sm cursor-pointer
      bg-white hover:bg-[#1a1f3c] transition-colors duration-300"
  >
    <h3 className="font-bold text-lg mb-2 text-[#1a1f3c] group-hover:text-white transition-colors duration-300">
      {title}
    </h3>
    <p className="text-sm leading-relaxed text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
      {desc}
    </p>
  </motion.div>
);

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="why"
      ref={ref}
      className="bg-white py-24 px-6 md:px-20 scroll-mt-20 overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center text-[#1a1f3c] mb-16 tracking-wide"
      >
        WHY CHOOSE US
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center">

        {/* LEFT CARDS */}
        <div className="flex flex-col gap-12 w-full md:w-1/3 items-end">
          {leftCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="flex items-center"
            >
              <Card title={card.title} desc={card.desc} />
              <div className="hidden md:block h-px w-12 bg-gray-300 flex-shrink-0" />
            </motion.div>
          ))}
        </div>

        {/* CENTER IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9 }}
          className="w-full md:w-1/3 flex justify-center my-10 md:my-0 z-10"
        >
          <img
            src="/images/weightequal.png"
            alt="Legal scales"
            className="w-100 md:w-140 object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* RIGHT CARDS */}
        <div className="flex flex-col gap-12 w-full md:w-1/3 items-start">
          {rightCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="flex items-center"
            >
              <div className="hidden md:block h-px w-12 bg-gray-300 flex-shrink-0" />
              <Card title={card.title} desc={card.desc} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}