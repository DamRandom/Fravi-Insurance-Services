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

      <div
        id="navbar-trigger"
        className="h-0 overflow-hidden opacity-0 pointer-events-none absolute"
      />

      <Footer />
    </>
  );
}
