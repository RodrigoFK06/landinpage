import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Methodology from "@/components/Methodology";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />
      <Benefits />
      <Methodology />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
