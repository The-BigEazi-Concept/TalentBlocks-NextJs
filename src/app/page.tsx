import About from "./components/About";
import CTAcontent from "./components/CTAcontent";
import Explore from "./components/Explore";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Hero />
      <About />
      <Explore />
      <CTAcontent />
      <WhyUs />
    </main>
  );
}
