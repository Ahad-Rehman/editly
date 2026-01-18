import Header from "./components/Header";
import Hero from "./components/Hero";
import OurVideos from "./components/OurVideos";
import OurWork from "./components/OurWork";
import About from "./components/About";
import Reviews from "./components/Reviews";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <OurVideos />
      <OurWork />
      <About />
      <Reviews />
      <FAQs />
      <Footer />
    </div>
  );
}
