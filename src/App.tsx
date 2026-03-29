import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutStats from "./components/AboutStats";
import Blog from "./components/Blog";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <AboutStats />
      <Services />
      <WhyChooseUs />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}