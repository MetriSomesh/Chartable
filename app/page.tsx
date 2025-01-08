import Analytics from "./components/AnalyticsDashboard";
import Attribution from "./components/Attribution";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/NavBar";
import Platfomrs from "./components/Platforms";
import Pricing from "./components/Pricing";
import SmartLinks from "./components/SmartLinks";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <Analytics />
      <SmartLinks />
      <Attribution />
      <Pricing />
      <Testimonials />
      <Platfomrs />
      <Footer/>
   </div>
  );
}
