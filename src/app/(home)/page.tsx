import AboutUs from "./components/AboutUs";
import CertifiedTraining from "./components/CertifiedTraining";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import MissionVision from "./components/MissionVision";
import OurProducts from "./components/OurProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <OurProducts />
      <MissionVision />
      <CertifiedTraining />
      <ContactUs />
    </div>
  );
}
