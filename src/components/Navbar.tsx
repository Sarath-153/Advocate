import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const links = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Our Team", id: "team" },
    { label: "Blog", id: "blog" },
  ];

  // ✅ Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      const navHeight = navbar ? navbar.getBoundingClientRect().height : 64;

      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i].id);
        if (section) {
          const top = section.getBoundingClientRect().top - navHeight - 10;
          if (top <= 0) {
            setActiveId(links[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector("nav");
    if (section && navbar) {
      const navHeight = navbar.getBoundingClientRect().height;
      const top = section.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActiveId(id); // ✅ Highlight immediately on click
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center px-6 md:px-10 py-4 bg-white fixed w-full z-50 shadow-sm"
      >
        {/* LOGO */}
        <h1
          className="text-xl font-bold cursor-pointer tracking-widest text-gray-800"
          onClick={() => scrollToSection("home")}
        >
          LOGO
        </h1>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-2 font-medium text-gray-700">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-5 py-2 rounded-full transition-all duration-200 text-sm
                ${activeId === link.id
                  ? "bg-[#1a1f3c] text-white"
                  : "hover:text-gray-900 hover:bg-gray-100"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* DESKTOP CONTACT */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block border border-gray-800 text-gray-800 px-5 py-2 rounded text-sm hover:bg-gray-800 hover:text-white transition-all duration-200"
        >
          Contact us
        </button>

        {/* MOBILE RIGHT — Contact + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-gray-800 text-gray-800 px-4 py-1.5 rounded text-sm"
          >
            Contact us
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 p-1">
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[64px] left-0 right-0 bg-white z-40 shadow-lg px-6 py-6 flex flex-col gap-4 md:hidden"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left font-medium text-lg border-b border-gray-100 pb-3 transition-colors
                  ${activeId === link.id
                    ? "text-blue-600 font-semibold"
                    : "text-[#1a1f3c] hover:text-blue-600"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}