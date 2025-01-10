import AITools from "./AIToolsSection";
import Analytics from "./AnalyticsSection";
import Features from "./FeaturesSection";
import Footer from "./Footer";
import Hero from "./HeroSection";
import Nav from "../NavBar";
import Pricing from "./PricingSection";
import Testimonials from "./Testimonials";



export default async function Home() {
    return (
      
        <div className=" bg-[#171717] ">
          <Nav />
          <Hero />
          <Features />
          <Analytics />
          <AITools />
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
      
    );
}