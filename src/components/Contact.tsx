export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

      <form className="max-w-xl mx-auto space-y-4">
        <input className="w-full p-4 border rounded" placeholder="Name" />
        <input className="w-full p-4 border rounded" placeholder="Email" />
        <textarea className="w-full p-4 border rounded" placeholder="Message" />
        <button className="bg-black text-white px-8 py-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}