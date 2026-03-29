import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/statue1.jpeg')" }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* MOBILE LAYOUT */}
      <div className="md:hidden relative z-10 w-full flex flex-col items-center text-center px-6 pt-10">
        
        {/* Rotating badge — centered on mobile */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="w-28 h-28 mb-6"
        >
          <svg viewBox="0 0 160 160" className="w-full h-full">
            <defs>
              <path
                id="circlePathMobile"
                d="M 80,80 m -55,0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
              />
            </defs>
            <text fill="#1a1f3c" fontSize="11.5" fontWeight="600" letterSpacing="2.5">
              <textPath href="#circlePathMobile">
                ★ Strategic Legal Solutions You Can Trust ★
              </textPath>
            </text>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold leading-tight text-[#1a1f3c] mb-4">
            We're Here to Help You with Your Legal Needs
          </h1>
          <p className="text-gray-600 text-sm max-w-xs mx-auto">
            From advice to action, we support you at every step with simple and reliable legal services.
          </p>

          {/* CTA button for mobile */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const el = document.getElementById("contact");
              const nav = document.querySelector("nav");
              if (el && nav) {
                const top = el.getBoundingClientRect().top + window.scrollY - nav.getBoundingClientRect().height;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className="mt-6 bg-[#1a1f3c] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all duration-300"
          >
            Get Legal Help →
          </motion.button>
        </motion.div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:block">
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

        {/* Rotating badge — fixed position on desktop */}
        <div
          className="absolute z-10"
          style={{
            right: "26%",
            top: "11%",
            width: "160px",
            height: "160px",
          }}
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