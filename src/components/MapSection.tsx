export default function MapSection() {
  const lat = 11.356290;
  const lng = 77.319398;
  const embedUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  const mapsUrl = `https://maps.google.com/maps?q=${lat},${lng}`;

  return (
    <section className="bg-white px-4 sm:px-8 md:px-20 py-12 md:py-16">
      
      {/* Header */}
      <div className="mb-6 md:mb-10">
        <p className="text-2xl md:text-4xl font-semibold text-sm mb-1">
          Visit Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f3c]">
          How to find us
        </h2>
      </div>

      {/* Card wrapper */}
      <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">

        {/* Info bar on mobile */}
        <div className="flex items-center gap-3 bg-[#1a1f3c] px-4 py-3 md:hidden">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-tight">Our Location</p>
            <p className="text-blue-300 text-xs">Tap the map to get directions</p>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 shrink-0"
          >
            Directions ↗
          </a>
        </div>

        {/* Map */}
        <div className="relative w-full" style={{ height: "280px" }}>
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen={true}
            loading="lazy"
            title="Our Location"
          />
        </div>

        {/* Bottom bar — desktop only */}
        <div className="hidden md:flex items-center justify-between bg-gray-50 border-t border-gray-100 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1a1f3c] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <p className="text-[#1a1f3c] text-sm font-semibold">Our Location</p>
              <p className="text-gray-400 text-xs">11.3563° N, 77.3194° E</p>
            </div>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1f3c] hover:bg-blue-900 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-md"
          >
            Open in Google Maps ↗
          </a>
        </div>

      </div>
    </section>
  );
}