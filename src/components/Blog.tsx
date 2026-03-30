import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const posts = [
  {
    tags: ["Civil Law", "Property Law"],
    title: "Understanding Civil Law Basics",
    desc: "A simple guide to handling property and contract disputes with clarity.",
    extraDesc: "Explore how civil law governs relationships between individuals and organizations.",
    img: "/images/Blog1.jpg",
  },
  {
    tags: ["Disputes", "Legal Process"],
    title: "Steps to Handle Legal Disputes",
    desc: "Learn the key steps to manage legal issues in a clear and structured way.",
    extraDesc: "From filing a complaint to reaching a settlement, every step matters.",
    img: "/images/Blog2.jpg",
  },
  {
    tags: ["Legal Help"],
    title: "When to Seek Legal Help",
    desc: "Know the right time to consult a legal expert for better decisions.",
    extraDesc: "Early consultation can save time, money, and unnecessary stress.",
    img: "/images/Blog3.png",
  },
  {
    tags: ["Rights"],
    title: "Know Your Legal Rights",
    desc: "Understand your rights and how to protect them in different situations.",
    extraDesc: "Being informed empowers you to act confidently in legal matters.",
    img: "/images/Blog4.png",
  },
];

export default function Blog() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (i: number) => setExpandedIndex(expandedIndex === i ? null : i);

  return (
    <section id="blog" ref={ref} className="bg-white py-16 md:py-20 px-5 md:px-20">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex flex-row items-center justify-between md:justify-center md:gap-4 mb-10 md:mb-16"
      >
        <div className="text-left md:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold text-sm mb-1">Blog</h2>
          <p className="text-3xl md:text-4xl font-bold text-[#1a1f3c]">
            Read our latest updates and learn more about important legal topics.
          </p>
        </div>
        <img
          src="/images/weightequal.png"
          alt="scales"
          className="w-14 h-14 md:w-20 md:h-20 object-contain flex-shrink-0"
        />
      </motion.div>

      {/* MOBILE LAYOUT */}
      <div className="flex flex-col gap-5 md:hidden">
        {posts.map((post, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              layout
              style={{ minHeight: "256px" }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* TOP — Tags + Arrow */}
              <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10">
                <div className="flex flex-row flex-wrap gap-1">
                  {post.tags.map((tag, t) => (
                    <span key={t} className="bg-[#1a1f3c]/80 text-white text-xs px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-8 h-8 rounded-full bg-[#1a1f3c] flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white group-hover:text-[#1a1f3c] -rotate-45 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* BOTTOM — Title + desc + extra + button */}
              <div className="relative pt-16 pb-4 px-4 mt-40 z-10">
                <h3 className="text-white font-bold text-base leading-snug mb-1">{post.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed">{post.desc}</p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.p
                      key="extra-mobile"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="text-gray-300 text-xs leading-relaxed overflow-hidden"
                    >
                      {post.extraDesc}
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => toggle(i)}
                  className="mt-3 w-full border border-white/60 text-white text-xs py-2 rounded-full hover:bg-white hover:text-[#1a1f3c] transition-all duration-300 font-medium"
                >
                  {isExpanded ? "Read Less ∧" : "Read More >"}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {posts.map((post, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              layout
              style={{ height: isExpanded ? "580px" : "520px" }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer transition-[height] duration-500 ease-in-out"
            >
              {/* Background image */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-all duration-500" />
              </div>

              {/* TOP — Tags + Arrow */}
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
                <div className="flex flex-col gap-2">
                  {post.tags.map((tag, t) => (
                    <span key={t} className="bg-[#1a1f3c]/80 text-white text-xs px-3 py-1 rounded-full w-fit">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1a1f3c] flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white group-hover:text-[#1a1f3c] transition-colors duration-300 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* BOTTOM — Title + desc + extra + button */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3 className="text-white font-bold text-xl leading-snug mb-2">{post.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{post.desc}</p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.p
                      key="extra-desktop"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-gray-300 text-sm leading-relaxed overflow-hidden"
                    >
                      {post.extraDesc}
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => toggle(i)}
                  className="mt-4 w-full border border-white/60 text-white text-sm py-2.5 rounded-full hover:bg-white hover:text-[#1a1f3c] transition-all duration-300 font-medium"
                >
                  {isExpanded ? "Read Less ∧" : "Read More >"}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}