import { motion } from "framer-motion";

export default function Navbar() {
  const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  const navbar = document.querySelector("nav");
  if (section && navbar) {
    const navHeight = navbar.getBoundingClientRect().height;
    const top = section.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

  const links = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Our Team", id: "team" },
    { label: "Blog", id: "blog" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-10 py-4 bg-white fixed w-full z-50 shadow-sm"
    >
      {/* LOGO */}
      <h1
        className="text-xl font-bold cursor-pointer tracking-widest text-gray-800"
        onClick={() => scrollToSection("home")}
      >
        LOGO
      </h1>

      {/* NAV LINKS */}
      <div className="hidden md:flex items-center gap-2 font-medium text-gray-700">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`px-5 py-2 rounded-full transition-all duration-200 text-sm
              ${link.id === "home"
                ? "bg-[#1a1f3c] text-white"
                : "hover:text-gray-900"
              }`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* CONTACT BUTTON */}
      <button
        onClick={() => scrollToSection("contact")}
        className="border border-gray-800 text-gray-800 px-5 py-2 rounded text-sm hover:bg-gray-800 hover:text-white transition-all duration-200"
      >
        Contact us
      </button>
    </motion.nav>
  );
}