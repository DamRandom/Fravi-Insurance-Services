import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"; // o Header si así se llama tu componente
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div
        id="navbar-trigger"
        className="h-0 overflow-hidden opacity-0 pointer-events-none absolute"
      />
      <Navbar />
      <Footer />
    </>
  );
}
