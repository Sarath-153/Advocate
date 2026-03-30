export default function Footer() {

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a1f3c] text-white py-12 px-6 md:px-20">

      {/* MOBILE LAYOUT */}
      <div className="md:hidden flex flex-col items-center text-center gap-6 mb-8">
        <h2 className="text-2xl font-bold">LOGO</h2>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
          Trusted legal support for every client. Clear, reliable, and strategic.
        </p>
        <div className="w-full border-t border-white/10 pt-6 flex flex-col gap-3 text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-2">📍 No.:D-88 Sampath Nagar, Erode-63811</p>
          <p className="flex items-center justify-center gap-2">📞 +91 98765 43210</p>
          <p className="flex items-center justify-center gap-2">✉️ sriarjunac@gmail.com</p>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:grid grid-cols-4 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">LOGO</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Trusted legal support for every client. Clear, reliable, and strategic.
          </p>
        </div>

        {/* ✅ Quick Links — smooth scroll */}
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: "Home",          id: "home" },
              { label: "About Us",      id: "about" },
              { label: "Services",      id: "services" },
              { label: "Our Team",      id: "team" },
              { label: "Blog",          id: "blog" },
              { label: "Contact",       id: "contact" },
            ].map(({ label, id }) => (
              <li key={id} className="flex items-center gap-1.5">
                <span className="text-blue-400 text-xs">›</span>
                <button
                  onClick={() => scrollTo(id)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Practice Areas</h3>
          <ul className="space-y-2.5 text-gray-400 text-sm">
            {["Criminal Law", "Family Law", "Corporate Law", "Property Law", "Civil Litigation"].map((s) => (
              <li key={s} className="hover:text-white cursor-pointer transition-colors flex items-center gap-1.5">
                <span className="text-blue-400 text-xs">›</span> {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-2"><span>📍</span><span>No. D-88 Sampath Nagar, Erode-63811</span></li>
            <li className="flex items-center gap-2"><span>📞</span><span>+91 98765 43210</span></li>
            <li className="flex items-center gap-2"><span>✉️</span><span>sriarjunac@gmail.com</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs gap-3">
        <p className="text-center sm:text-left">© 2026 Legal Firm. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="text-white/20">·</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>

    </footer>
  );
}