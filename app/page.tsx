import AITools from "./Components/AIToolsSection";
import Analytics from "./Components/AnalyticsSection";
import FAQ from "./Components/FAQSection";
import Features from "./Components/FeaturesSection";
import Footer from "./Components/Footer";
import Hero from "./Components/HeroSection";
import Nav from "./Components/NavBar";
import Pricing from "./Components/PricingSection";
import Testimonials from "./Components/Testimonials";




export default function Home() {
  return (
    <div className=" bg-[#171717] ">
      <Nav />
      <Hero />
      <Features />
      <Analytics />
      <AITools />
      <Pricing />
      <Testimonials />
      <Footer/>
      {/* <FAQ/> */}
    </div>
  );
}
