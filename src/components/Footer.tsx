export default function Footer() {
  return (
    <footer className="bg-[#1a1f3c] text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">LOGO</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Trusted legal support for every client. Clear, reliable, and strategic.
          </p>
        </div>
        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Home", "About Us", "Services", "Our Team", "Blog", "Contact"].map((l) => (
              <li key={l} className="hover:text-white cursor-pointer transition-colors">{l}</li>
            ))}
          </ul>
        </div>
        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Practice Areas</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Criminal Law", "Family Law", "Corporate Law", "Property Law", "Civil Litigation"].map((s) => (
              <li key={s} className="hover:text-white cursor-pointer transition-colors">{s}</li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📍 123 Legal Street, Chennai</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ info@legalfirm.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs gap-2">
        <p>© 2026 Legal Firm. All rights reserved.</p>
        <p>Privacy Policy · Terms of Service</p>
      </div>
    </footer>
  );
}