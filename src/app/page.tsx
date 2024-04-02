import {
  Hero,
  About,
  Explore,
  CTAcontent,
  WhyUs,
  Testimonials,
  Accordion,
  CTAsection,
} from "./components/index";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Hero />
      <About />
      <Explore />
      <CTAcontent />
      <WhyUs />
      <Testimonials />
      <Accordion />
      <CTAsection />
    </main>
  );
}
