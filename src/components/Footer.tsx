export default function Footer() {

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home",     id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Our Team", id: "team" },
    { label: "Blog",     id: "blog" },
    { label: "Contact",  id: "contact" },
  ];

  const practiceAreas = ["Criminal Law", "Family Law", "Corporate Law", "Property Law", "Civil Litigation"];

  const contactItems = [
    { icon: "📍", text: "No. D-88 Sampath Nagar, Erode-63811" },
    { icon: "📞", text: "+91 95005 73949" },
    { icon: "✉️", text: "sriarjunac@gmail.com" },
  ];

  return (
    <footer className="bg-[#1a1f3c] text-white py-12 px-6 md:px-20">

      {/* Unified Grid — 1 col mobile, 4 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:mb-10 text-center md:text-left items-center md:items-start">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-3 md:mb-4">EVS Legal</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Trusted legal support for every client. Clear, reliable, and strategic.
          </p>
        </div>

        {/* Quick Links — hidden on mobile */}
        <div className="hidden md:block">
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map(({ label, id }) => (
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

        {/* Practice Areas — hidden on mobile */}
        <div className="hidden md:block">
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Practice Areas</h3>
          <ul className="space-y-2.5 text-gray-400 text-sm">
            {practiceAreas.map((s) => (
              <li key={s} className="hover:text-white cursor-pointer transition-colors flex items-center gap-1.5">
                <span className="text-blue-400 text-xs">›</span> {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start border-t border-white/10 pt-6 md:border-0 md:pt-0">
          <h3 className="font-semibold mb-3 md:mb-4 text-sm uppercase tracking-wider">Contact</h3>
          <ul className="space-y-2.5 text-gray-400 text-sm">
            {contactItems.map(({ icon, text }) => (
              <li key={text} className="flex items-start justify-center md:justify-start gap-2">
                <span>{icon}</span>
                <span>{text}</span>
              </li>
            ))}
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