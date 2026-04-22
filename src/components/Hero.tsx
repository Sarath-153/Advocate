import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    const nav = document.querySelector("nav");
    if (el && nav) {
      const top = el.getBoundingClientRect().top + window.scrollY - nav.getBoundingClientRect().height;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative flex flex-col">

      {/* ───── MOBILE LAYOUT ───── */}
      <div className="md:hidden flex flex-col">

        {/* Image block — pt-20 safely clears the mobile navbar */}
        <div
          className="relative w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/statue1.jpeg')",
            paddingTop: "80px",   // clears mobile navbar height
            minHeight: "360px",
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f3c]/20 via-transparent to-white" />

          {/* Text — relative so it never clips behind navbar */}
          <div className="relative z-10 flex flex-col px-5 pb-8">

            {/* ✅ Badge — now visible on mobile */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest bg-white/85 px-3 py-1 rounded-full mb-3 w-fit"
            >
              Trusted Legal Services
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-2xl font-bold leading-snug text-[#1a1f3c] max-w-[55%]"
            >
              We're Here to Help You with Your Legal Needs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-700 text-xs leading-relaxed mt-2 max-w-[55%]"
            >
              From advice to action, we support you at every step with simple and reliable legal services.
            </motion.p>
          </div>
        </div>

        {/* Button — below image on mobile */}
        <div className="bg-white px-6 pt-6 pb-10">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="w-full bg-[#1a1f3c] text-white py-4 rounded-2xl text-sm font-semibold hover:bg-blue-900 transition-all duration-300 shadow-lg"
          >
            Get Legal Help →
          </motion.button>
        </div>
      </div>

      {/* ───── DESKTOP LAYOUT ───── */}
      <div className="hidden md:block relative w-full h-screen overflow-hidden">

        {/* Background image */}
        <img
          src="/images/statue1.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* White overlay */}
        <div className="absolute inset-0 bg-white/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full pl-20 max-w-2xl">

          {/* ✅ Badge on desktop */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest bg-white/85 px-3 py-1 rounded-full mb-4 w-fit"
          >
            Trusted Legal Services
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl font-bold leading-tight text-[#1a1f3c]"
          >
            We're Here to Help You with Your Legal Needs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-gray-600 text-base max-w-sm"
          >
            From advice to action, we support you at every step with simple and reliable legal services.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="w-fit bg-[#1a1f3c] text-white py-4 px-8 rounded-2xl text-sm font-semibold hover:bg-blue-900 transition-all duration-300 shadow-lg mt-8"
          >
            Get Legal Help →
          </motion.button>
        </div>

        {/* Rotating badge */}
        <div className="absolute right-[26%] top-[11%] w-[160px] h-[160px] z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <svg viewBox="0 0 160 160" className="w-full h-full">
              <defs>
                <path id="circlePath" d="M 80,80 m -55,0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0" />
              </defs>
              <text fill="#1a1f3c" fontSize="11.5" fontWeight="600" letterSpacing="2.5">
                <textPath href="#circlePath">★ Strategic Legal Solutions You Can Trust ★</textPath>
              </text>
            </svg>
          </motion.div>
        </div>
      </div>

    </section>
  );
}