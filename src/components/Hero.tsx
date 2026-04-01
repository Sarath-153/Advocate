import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col">

      {/* ───── MOBILE LAYOUT (unchanged) ───── */}
      <div className="md:hidden flex flex-col" style={{ paddingTop: "64px" }}>
        <div
  className="hidden md:flex items-center h-screen"
  style={{
    backgroundImage: "url('/images/statue1.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
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
                const top = el.getBoundingClientRect().top + window.scrollY - nav.getBoundingClientRect().height;
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
      {/* All critical styles are inline to avoid Tailwind resolution issues
          in desktop-site mode on mobile browsers. */}
      <div
        className="hidden md:flex"
        style={{
          position: "relative",
          alignItems: "center",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background image — <img> with objectFit fills the full container
            reliably even when 100vh computes to 2000px+ in desktop-site mode */}
        <img
          src="/images/statue1.jpeg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />

        {/* White overlay — inline rgba so it is never overridden by browser themes */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.60)",
            zIndex: 1,
          }}
        />

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: "relative", zIndex: 2, paddingLeft: "5rem", maxWidth: "42rem" }}
        >
          <h1
            style={{
              fontSize: "3.75rem",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#1a1f3c",
            }}
          >
            We're Here to Help You with Your Legal Needs
          </h1>
          <p style={{ marginTop: "1.5rem", color: "#4b5563", fontSize: "1rem", maxWidth: "28rem" }}>
            From advice to action, we support you at every step with simple and reliable legal services.
          </p>
        </motion.div>

        {/* Rotating badge — positioned relative to this container */}
        <div
          style={{
            position: "absolute",
            right: "26%",
            top: "11%",
            width: "160px",
            height: "160px",
            zIndex: 2,
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ width: "100%", height: "100%" }}
          >
            <svg viewBox="0 0 160 160" style={{ width: "100%", height: "100%" }}>
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