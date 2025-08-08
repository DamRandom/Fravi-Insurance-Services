import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Navbar />
      <WhyUs />
      <Testimonials />
      <Footer />
    </>
  );
}
