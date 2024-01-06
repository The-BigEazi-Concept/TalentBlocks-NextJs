import About from "./components/About";
import Explore from "./components/Explore";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Hero />
      <About />
      <Explore />
    </main>
  );
}
