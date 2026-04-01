import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col">

      {/* ───── MOBILE LAYOUT (unchanged) ───── */}
      <div className="md:hidden flex flex-col" style={{ paddingTop: "64px" }}>

        <div
          className="relative w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/statue1.jpeg')",
            height: "260px",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f3c]/20 via-transparent to-white" />

          <div className="absolute inset-0 flex flex-col justify-center px-5 z-10">
            <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest bg-white/80 px-3 py-1 rounded-full mb-3 w-fit">
              Trusted Legal Services
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-2xl font-bold leading-snug text-[#1a1f3c] max-w-[55%]"
            >
              We're Here to Help You with Your Legal Needs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-gray-700 text-xs leading-relaxed mt-2 max-w-[55%]"
            >
              From advice to action, we support you at every step with simple and reliable legal services.
            </motion.p>
          </div>
        </div>

        <div className="bg-white px-6 pt-6 pb-10">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
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
            className="w-full bg-[#1a1f3c] text-white py-4 rounded-2xl text-sm font-semibold hover:bg-blue-900 transition-all duration-300 shadow-lg"
          >
            Get Legal Help →
          </motion.button>
        </div>
      </div>

      {/* ───── DESKTOP LAYOUT ───── */}
      <div className="hidden md:flex relative items-center h-screen overflow-hidden">

        {/* 
          KEY FIX: Use a real <img> with object-cover instead of CSS background-image.
          
          Root cause: In "desktop site" mode on mobile, the browser renders a virtual
          980px-wide viewport scaled down to fit the phone. This makes 100vh (h-screen)
          compute to ~2000px+. CSS `bg-cover bg-center` places the image at the vertical
          center of this giant container, leaving a large white gap at the top where the
          badge was floating with no image behind it.
          
          A positioned <img> with object-cover always fills inset-0 (the full container)
          regardless of how tall the container is, fixing the alignment for all viewports.
        -->
        */}
        <img
          src="/images/statue1.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* White overlay */}
        <div className="absolute inset-0 bg-white/60" />

        {/* Hero text */}
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
            From advice to action, we support you at every step with simple and reliable legal services.
          </p>
        </motion.div>

        {/* Rotating badge */}
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