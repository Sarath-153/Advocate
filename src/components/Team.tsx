import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const team = [
  { name: "A C Srinivas", role: "Partner", img: "/images/mem1.png" },
  { name: "A Vivek", role: "Partner", img: "/images/mem2.png" },
  { name: "P Eswaramoorthy", role: "Partner", img: "/images/mem3.png" },
  { name: "Kavin ", role: "Associate", img: "/images/mem5.png" },
];

export default function Team() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="team" ref={ref} className="bg-white py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-left mb-16"
      >
        <p className="text-2xl md:text-4xl font-semibold text-sm mb-1">Our Team</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f3c]">Meet Our Legal Experts</h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="text-center group"
          >
            {/* Image container — fits any image size */}
           <div className="overflow-hidden rounded-xl mb-4 w-full aspect-[4/4] bg-gray-100">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-[#1a1f3c] text-lg">{member.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}