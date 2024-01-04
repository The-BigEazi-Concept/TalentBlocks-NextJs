import Navbar from "./Navbar";

const Hero = () => {
  return (
    <header className="bg-[url('/img/hero.jpg')] bg-center bg-no-repeat bg-cover ">
      <div className="pb-[252px] bg-black bg-opacity-40 flex-col justify-start items-center gap-[162px]">
        <Navbar />
      </div>
    </header>
  );
};

export default Hero;
