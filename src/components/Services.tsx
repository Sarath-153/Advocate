import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const services = [
  { title: "Civil Law",               img: "/images/services/civillaw.png" },
  { title: "Criminal Law",            img: "/images/services/criminallaw.png" },
  { title: "Consumer Law",            img: "/images/services/consumer.png" },
  { title: "GST Complainces",         img: "/images/services/gst.png" },
  { title: "Arbitration Matters",     img: "/images/services/arbitration.png" },
  { title: "Taxation Law",            img: "/images/services/taxation.png" },
  { title: "IPR Law",                 img: "/images/services/ipr.png" },
  { title: "Employment And Labour Laws", img: "/images/services/employment1.png" },
];

const CARDS_PER_PAGE = 4;

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(services.length / CARDS_PER_PAGE);
  const visible = services.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  return (
    <section id="services" ref={ref} className="relative bg-[#f4f4f6] py-10 px-6 md:px-20 scroll-mt-10 overflow-hidden">
      {/* Watermark gavel - bottom left */}
      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none select-none">
        <img src="/images/statue1.jpeg" alt="" className="w-72 grayscale" />
      </div>

      {/* Watermark statue - right */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none select-none h-full">
        <img src="/images/statue1.jpeg" alt="" className="h-full object-cover grayscale" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-left mb-14"
      >
        <p className=" text-3xl md:text-4xl font-semibold text-sm mb-1">Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f3c]">Legal Support We Offer</h2>
      </motion.div>

      {/* Cards — staggered layout like design */}
      <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]">
        {visible.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            // Stagger: even index cards go up, odd go down (like design)
            className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-md
              ${i % 2 === 0 ? "mt-0 mb-12" : "mt-12 mb-0"}
            `}
            style={{ height: "260px" }}
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            {/* Title */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-semibold text-base leading-snug">{service.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation arrows + progress bar */}
      <div className="flex items-center justify-between mt-2">
        {/* Progress bar */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              onClick={() => setPage(i)}
              className={`h-1 rounded-full cursor-pointer transition-all duration-300 ${
                i === page ? "w-16 bg-[#1a1f3c]" : "w-8 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center
              hover:bg-[#1a1f3c] hover:text-white hover:border-[#1a1f3c] transition-all duration-300
              disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full bg-[#1a1f3c] text-white flex items-center justify-center
              hover:bg-blue-800 transition-all duration-300
              disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}