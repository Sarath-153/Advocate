import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative">

      {/* ───── MOBILE LAYOUT ───── */}
      <div
        className="md:hidden relative w-full bg-cover bg-center flex flex-col justify-end"
        style={{
          backgroundImage: "url('/images/statue1.jpeg')",
          minHeight: "100svh",
          paddingTop: "64px",
        }}
      >
        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3c]/80 via-[#1a1f3c]/30 to-transparent" />

        {/* Text content at bottom of image */}
        <div className="relative z-10 px-6 pb-6">
          <span className="inline-block text-xs font-semibold text-white uppercase tracking-widest border border-white/60 px-3 py-1 rounded-full mb-4 w-fit">
            Trusted Legal Services
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold leading-tight text-white mb-3"
          >
            We're Here to Help You with Your Legal Needs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-white/80 text-sm leading-relaxed mb-6"
          >
            From advice to action, we support you at every step with simple and reliable legal services.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const el = document.getElementById("contact");
              const nav = document.querySelector("nav");
              if (el && nav) {
                const top =
                  el.getBoundingClientRect().top +
                  window.scrollY -
                  nav.getBoundingClientRect().height;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className="w-full bg-white text-[#1a1f3c] py-4 rounded-2xl text-sm font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
          >
            Get Legal Help →
          </motion.button>
        </div>
      </div>

      {/* ───── DESKTOP LAYOUT ───── */}
      <div
        className="hidden md:flex relative items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/statue1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-white/60" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-20 max-w-2xl"
        >
          <h1 className="text-6xl font-bold leading-tight text-[#1a1f3c]">
            We're Here to Help You with Your Legal Needs
          </h1>
          <p className="mt-6 text-gray-600 text-base max-w-md">
            From advice to action, we support you at every step with simple and
            reliable legal services.
          </p>
        </motion.div>

        {/* ✅ Rotating badge is NOW INSIDE the desktop div — never shows on mobile */}
        <div
          className="absolute z-10"
          style={{ right: "26%", top: "11%", width: "160px", height: "160px" }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <svg viewBox="0 0 160 160" className="w-full h-full">
              <defs>
                <path
                  id="circlePathDesktop"
                  d="M 80,80 m -55,0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
                />
              </defs>
              <text fill="#1a1f3c" fontSize="11.5" fontWeight="600" letterSpacing="2.5">
                <textPath href="#circlePathDesktop">
                  ★ Strategic Legal Solutions You Can Trust ★
                </textPath>
              </text>
            </svg>
          </motion.div>
        </div>
      </div>

    </section>
  );
}