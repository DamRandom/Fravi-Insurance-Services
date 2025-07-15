import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import ConverageDetails from "@/components/CoverageDetails";
import FAQItems from "@/components/FAQItem";
import TestimonialCard from "@/components/TestimonialCard";
import ContactInfo from "@/components/ContactInfo";
import MapEmbed from "@/components/MapEmbed";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <SectionTitle title="Our Services" subtitle="What we offer" />
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard title="Auto Insurance" description="Coverage for your car or truck, personal or commercial." />
          <ServiceCard title="Home Insurance" description="Protect your house, apartment or rental property." />
          <ServiceCard title="Business Insurance" description="Tailored protection for your business needs." />
        </div>
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <SectionTitle title="Coverage Details" />
        <ConverageDetails />
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <SectionTitle title="Frequently Asked Questions" />
        <FAQItems question="Do you offer services outside Tampa?" answer="Yes, we cover all of Florida, Texas and Virginia." />
        <FAQItems question="Do you insure trucks for business use?" answer="Absolutely. We specialize in commercial vehicle coverage." />
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <SectionTitle title="What Our Clients Say" />
        <div className="grid gap-6 md:grid-cols-2">
          <TestimonialCard name="John D." quote="Fravi helped me insure my delivery trucks with no hassle." />
          <TestimonialCard name="Maria G." quote="Great service, super friendly and professional." />
        </div>
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <SectionTitle title="Get In Touch" />
        <ContactInfo />
        <MapEmbed />
      </section>

      <Footer />
    </>
  );
}
