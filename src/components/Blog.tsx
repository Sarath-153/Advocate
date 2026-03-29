import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const posts = [
  {
    tags: ["Civil Law", "Property Law"],
    title: "Understanding Civil Law Basics",
    desc: "A simple guide to handling property and contract disputes with clarity.",
    img: "/images/Blog1.jpg",
  },
  {
    tags: ["Disputes", "Legal Process"],
    title: "Steps to Handle Legal Disputes",
    desc: "Learn the key steps to manage legal issues in a clear and structured way.",
    img: "/images/Blog2.jpg",
  },
  {
    tags: ["Legal Help"],
    title: "When to Seek Legal Help",
    desc: "Know the right time to consult a legal expert for better decisions.",
    img: "/images/Blog3.png",
  },
  {
    tags: ["Rights"],
    title: "Know Your Legal Rights",
    desc: "Understand your rights and how to protect them in different situations.",
    img: "/images/Blog4.png",
  },
];

export default function Blog() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="blog" ref={ref} className="bg-white py-18 px-6 md:px-20 scroll-mt-13">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 text-center"
      >
        <div>
          <h2 className="text-4xl font-semibold text-[#1a1f3c]">Blog</h2>
          <p className="text-gray-500 mt-2 max-w-md">
            Read our latest updates and learn more about important legal topics.
          </p>
        </div>
        {/* Scales decoration */}
        <img
          src="/images/weightequal.png"
          alt="scales"
          className="w-20 h-20 object-contain"
        />
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative rounded-2xl overflow-hidden h-[520px] group cursor-pointer"
          >
            {/* Background image with zoom on hover */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-all duration-500" />
            </div>

            {/* TOP — Tags + Arrow */}
            <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
              <div className="flex flex-col gap-2">
                {post.tags.map((tag, t) => (
                  <span
                    key={t}
                    className="bg-[#1a1f3c]/80 text-white text-xs px-3 py-1 rounded-full w-fit"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Arrow button */}
              <div className="w-10 h-10 rounded-full bg-[#1a1f3c] flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white group-hover:text-[#1a1f3c] transition-colors duration-300 -rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* BOTTOM — Title, desc, button */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              <h3 className="text-white font-bold text-xl leading-snug mb-2">{post.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{post.desc}</p>
              <button className="w-full border border-white/60 text-white text-sm py-2.5 rounded-full hover:bg-white hover:text-[#1a1f3c] transition-all duration-300 font-medium">
                Explore More &gt;
              </button>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}