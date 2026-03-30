import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutStats from "./components/AboutStats";
import Blog from "./components/Blog";
import MapSection from "./components/MapSection";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><AboutStats /></section>
      <section id="services"><Services /></section>
      <section id="whychooseus"><WhyChooseUs /></section>
      <section id="team"><Team /></section>
      <section id="blog"><Blog /></section>
      <section id="contact"><Contact /></section>
      <MapSection />
      <Footer />
    </div>
  );
}