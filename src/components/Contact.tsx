import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "info">("form");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "37373191-67c4-438b-9a0b-09bad9a35474",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const offices = [
    { type: "Head Office", address: "No.D-88 Sampath Nagar, Erode - 638 011" },
    { type: "Branch Offices", address: "Coimbatore | Chennai | Madurai | New Delhi" },
  ];

  const inputClass = "w-full px-3 md:px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1a1f3c] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a1f3c] transition";
  const labelClass = "text-xs font-semibold text-gray-400 uppercase tracking-wide";

  return (
    <section id="contact" ref={ref} className="bg-[#f8f9fc] py-12 md:py-20 px-5 md:px-20 scroll-mt-20">

      {/* Header */}
      <div className={`text-center mb-8 md:mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f3c]">Contact Us</h2>
        <p className="text-gray-500 mt-2 max-w-md mx-auto text-sm">
          Have a question? Fill out the form and we'll get back to you shortly.
        </p>
      </div>

      {/* MOBILE: Tab switcher */}
      <div className="md:hidden mb-6">
        <div className="flex bg-white rounded-2xl p-1 shadow-sm border border-gray-100">
          <button onClick={() => setActiveTab("form")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === "form" ? "bg-[#1a1f3c] text-white shadow" : "text-gray-400"}`}>
            Send Message
          </button>
          <button onClick={() => setActiveTab("info")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === "info" ? "bg-[#1a1f3c] text-white shadow" : "text-gray-400"}`}>
            Our Info
          </button>
        </div>
      </div>

      {/* MOBILE: Form Tab */}
      {activeTab === "form" && (
        <div className="md:hidden">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-10 gap-4">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1f3c]">Message Sent!</h3>
                <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
                <button onClick={resetForm} className="mt-1 text-sm text-blue-600 font-semibold hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-base font-bold text-[#1a1f3c] mb-5">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>Name</label>
                      <input name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>Phone</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" className={inputClass} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Email</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Tell us how we can help..." className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full bg-[#1a1f3c] hover:bg-blue-900 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-md text-sm disabled:opacity-60">
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* MOBILE: Info Tab */}
      {activeTab === "info" && (
        <div className="md:hidden space-y-4">
          <a href="tel:+91 95005 73949" className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div className="w-11 h-11 rounded-xl bg-[#1a1f3c] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Phone</p>
              <p className="text-[#1a1f3c] font-semibold text-sm mt-0.5">+91 95005 73949</p>
            </div>
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          <a href="mailto:sriarjunac@gmail.com" className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div className="w-11 h-11 rounded-xl bg-[#1a1f3c] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Email</p>
              <p className="text-[#1a1f3c] font-semibold text-sm mt-0.5">sriarjunac@gmail.com</p>
            </div>
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {offices.map((office) => (
            <div key={office.type} className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <div className="w-11 h-11 rounded-xl bg-[#1a1f3c] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">{office.type}</p>
                <p className="text-[#1a1f3c] font-semibold text-sm mt-0.5">{office.address}</p>
              </div>
            </div>
          ))}

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Business Hours</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Mon – Fri</span>
                <span className="text-[#1a1f3c] font-semibold">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Saturday</span>
                <span className="text-[#1a1f3c] font-semibold">10:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Sunday</span>
                <span className="text-red-400 font-semibold">Closed</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DESKTOP: Two-column layout */}
      <div className={`hidden md:grid max-w-5xl mx-auto grid-cols-2 gap-10 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

        {/* Left — Info */}
        <div className="flex flex-col justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#1a1f3c] mb-2">Get in Touch for Trusted Legal Assistance</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Whether you have a question about our services, pricing, or anything else — our team is ready to answer.
            </p>
          </div>

          <div className="space-y-5">
            {[
              { label: "Phone", value: "+91 95005 73949", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
              { label: "Email", value: "sriarjunac@gmail.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
              { label: "Head Office", value: "No. D-88 Sampath Nagar, Erode - 638 011", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" },
              { label: "Branch Offices", value: "Coimbatore | Chennai | Madurai | New Delhi", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
            ].map(({ label, value, icon }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1a1f3c] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">{label}</p>
                  <p className="text-[#1a1f3c] font-semibold text-sm mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Business Hours</p>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Mon – Fri</span>
                <span className="text-[#1a1f3c] font-semibold">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Saturday</span>
                <span className="text-[#1a1f3c] font-semibold">10:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Sunday</span>
                <span className="text-red-400 font-semibold">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12 gap-4">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1f3c]">Message Sent!</h3>
              <p className="text-gray-500 text-sm">Thanks for reaching out. We'll get back to you within 24 hours.</p>
              <button onClick={resetForm} className="mt-2 text-sm text-blue-600 font-semibold hover:underline">
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-bold text-[#1a1f3c] mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Phone</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" className={inputClass} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Email</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us how we can help..." className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full bg-[#1a1f3c] hover:bg-blue-900 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-md text-sm tracking-wide disabled:opacity-60">
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}