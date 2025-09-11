import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import ServiceDetail from "@/components/ServiceDetail";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceDetail />
      <WhyUs />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
