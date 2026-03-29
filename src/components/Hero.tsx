import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center scroll-mt-20"
      style={{ backgroundImage: "url('/images/statue1.jpeg')" }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* LEFT-ALIGNED TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-10 md:px-20 max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#1a1f3c]">
          We're Here to Help You with Your Legal Needs
        </h1>
        <p className="mt-6 text-gray-600 text-base max-w-md">
          From advice to action, we support you at every step with simple and reliable legal services.
        </p>
      </motion.div>

      {/* CIRCULAR ROTATING BADGE — positioned at statue's hand */}
      <div
        className="absolute z-10"
        style={{
          right: "28%",   // horizontally near the sword/hand
          top: "28%",     // vertically at the hand level
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
                id="circlePath"
                d="M 80,80 m -55,0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
              />
            </defs>
            <text fill="#1a1f3c" fontSize="11.5" fontWeight="600" letterSpacing="2.5">
              <textPath href="#circlePath">
                ★ Strategic Legal Solutions You Can Trust ★
              </textPath>
            </text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}