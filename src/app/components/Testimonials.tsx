"use client";

import Link from "next/link";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    avatar: require("../../../public/img/about.svg"),
    twoWordsDesc: "Amazing Place",
    comment:
      "So thoughtful and wise, and vulnerable in sharing her own challenges with me. Dani is wonderful!",
    fullname: "Mozeedat Adediran",
    field: "Web3 Builder",
    bgColor: "#BFE7FB",
  },
  {
    id: 2,
    avatar: require("../../../public/img/profile.png"),
    twoWordsDesc: "Educative Hub",
    comment:
      "So thoughtful and wise, and vulnerable in sharing her own challenges with me. Dani is wonderful!",
    fullname: "Mozeedat Adediran",
    field: "Backend Developer",
    bgColor: "#FFA630",
  },
  {
    id: 3,
    avatar: require("../../../public/img/profile.png"),
    twoWordsDesc: "Powerful Tools",
    comment:
      "So thoughtful and wise, and vulnerable in sharing her own challenges with me. Dani is wonderful!",
    fullname: "Mozeedat Adediran",
    field: "Product Designer",
    bgColor: "#dda0dd",
  },
  {
    id: 4,
    avatar: require("../../../public/img/profile.png"),
    twoWordsDesc: "Sophisticated Community",
    comment:
      "So thoughtful and wise, and vulnerable in sharing her own challenges with me. Dani is wonderful!",
    fullname: "Mozeedat Adediran",
    field: "Fullsatck Developer",
    bgColor: "#2898FF",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { id, avatar, twoWordsDesc, comment, fullname, field, bgColor } =
    testimonials[index];

  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      return setIndex(testimonials.length - 1);
    }
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1);

    if (index >= testimonials.length - 1) {
      return setIndex(0);
    }
  };

  return (
    <section className="py-[99px] pl-28 pr-[206px] bg-white ">
      <div className="flex justify-center items-center static">
        <Image
          src="/img/quote-left.svg"
          alt="quote left icon"
          width={202}
          height={143}
        />
      </div>
      <div className="justify-center items-center inline-flex gap-[216px] ">
        <div className="w-96 flex-col justify-start items-start gap-6 inline-flex">
          <h4 className="text-zinc-900 text-5xl font-bold font-['Inter'] leading-10">
            What our Student say!
          </h4>
          <p className="w-96 text-neutral-600 text-base font-normal font-['Inter'] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Amet sociis tincidunt
            feugiat nisl dui malesuada pulvinar convallis. Mauris ac est pretium
            eleifend mattis bibendum sed adipiscing natoque.
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
          <div
            key={id}
            style={{ background: bgColor }}
            className="flex flex-col justify-center items-center w-[413px] h-[442px] px-[48px] py-[34px] absolute right-14 -top-20">
            <div className="flex gap-16 mb-[28px] cursor-pointer">
              <button onClick={prevTestimonialHandler}>
                <FaArrowLeft />
              </button>
              <Image
                src={avatar}
                alt={fullname}
                width={82}
                height={82}
                style={{ borderRadius: "100%" }}
              />
              <button onClick={nextTestimonialHandler}>
                <FaArrowRight />
              </button>
            </div>
            <h5 className="mb-[21px] text-black text-xl font-semibold">
              {twoWordsDesc}
            </h5>
            <p className="mb-[21px] text-[#343434] text-xl text-center">
              {comment}
            </p>
            <h6 className="mb-[17px] text-base text-black font-medium">
              {fullname}
            </h6>
            <small className="text-[#222] text-xs">{field}</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
