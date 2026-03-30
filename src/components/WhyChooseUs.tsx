import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cards = [
  {
    title: "Trusted Support",
    desc: "We provide honest and reliable legal guidance you can depend on.",
    icon: "🛡️",
  },
  {
    title: "Client First",
    desc: "We focus on your needs and work towards the best outcome.",
    icon: "🤝",
  },
  {
    title: "Clear Advice",
    desc: "Simple and easy-to-understand solutions for every legal matter.",
    icon: "💡",
  },
  {
    title: "Experienced Team",
    desc: "Our lawyers bring years of expertise across all practice areas.",
    icon: "⚖️",
  },
];

const DesktopCard = ({ title, desc }: { title: string; desc: string }) => (
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
      className="bg-white py-16 md:py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center text-[#1a1f3c] mb-10 md:mb-16 tracking-wide"
      >
        WHY CHOOSE US
      </motion.h2>

      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden">
        {/* Scales image on top for mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9 }}
          className="flex justify-center mb-8"
        >
          <img
            src="/images/weightequal.png"
            alt="Legal scales"
            className="w-48 object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* 2x2 card grid on mobile */}
        <div className="grid grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group rounded-2xl p-4 border border-gray-200 shadow-sm cursor-pointer
                bg-white hover:bg-[#1a1f3c] transition-colors duration-300"
            >
              <div className="text-2xl mb-2">{card.icon}</div>
              <h3 className="font-bold text-sm mb-1 text-[#1a1f3c] group-hover:text-white transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:flex flex-row items-center justify-center">

        {/* LEFT CARDS */}
        <div className="flex flex-col gap-12 w-1/3 items-end">
          {cards.slice(0, 2).map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="flex items-center"
            >
              <DesktopCard title={card.title} desc={card.desc} />
              <div className="h-px w-12 bg-gray-300 flex-shrink-0" />
            </motion.div>
          ))}
        </div>

        {/* CENTER IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9 }}
          className="w-1/3 flex justify-center z-10"
        >
          <img
            src="/images/weightequal.png"
            alt="Legal scales"
            className="w-90 object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* RIGHT CARDS */}
        <div className="flex flex-col gap-12 w-1/3 items-start">
          {cards.slice(2, 4).map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="flex items-center"
            >
              <div className="h-px w-12 bg-gray-300 flex-shrink-0" />
              <DesktopCard title={card.title} desc={card.desc} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}