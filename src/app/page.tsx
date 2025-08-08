import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Methodology from "@/components/Methodology";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />
      <Benefits />
      <Methodology />
      <Services />
      <Testimonials />
      <CTA />
    </main>
  );
}
