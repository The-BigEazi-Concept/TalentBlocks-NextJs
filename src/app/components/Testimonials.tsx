import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const Testimonials = () => {
  return (
    // py-24
    <section className="py-[99px] px-28 bg-white justify-center items-center inline-flex gap-[216px]">
      <div className="w-96 flex-col justify-start items-start gap-6 inline-flex">
        <h4 className="text-zinc-900 text-5xl font-bold font-['Inter'] leading-10">
          What our Student say!
        </h4>
        <p className="w-96 text-neutral-600 text-base font-normal font-['Inter'] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Amet sociis tincidunt feugiat
          nisl dui malesuada pulvinar convallis. Mauris ac est pretium eleifend
          mattis bibendum sed adipiscing natoque.
        </p>
        <button className="text-white w-40 h-12 px-5 py-4 bg-orange">
          <Link
            href="/register"
            className=" rounded justify-center items-center gap-2.5 inline-flex">
            Enroll Now <FiExternalLink />
          </Link>
        </button>
      </div>
      <div className="w-96 h-96 relative">
        <h1>Hello</h1>
      </div>
    </section>
  );
};

export default Testimonials;
