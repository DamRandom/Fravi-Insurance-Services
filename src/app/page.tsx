import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Navbar />
      <AboutUs />
      <WhyUs />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
