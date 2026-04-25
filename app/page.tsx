import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-hidden">
        <Hero />
        <Trust />
        <Services />
        <Process />
        <Work />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
