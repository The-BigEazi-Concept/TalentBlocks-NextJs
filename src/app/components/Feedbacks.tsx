import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";

const feedbacks = [
  {
    id: 1,
    avatar: require("../../../public/img/about.svg"),
    title: "Amazing Place",
    comment:
      "So thoughtful and wise, and vulnerable in sharing her own challenges with me. Dani is wonderful!",
    fullname: "Mozeedat Adediran",
    field: "Web3 Builder",
    bgColor: "#BFE7FB",
    textColor: "#1c1c1c",
  },
  {
    id: 2,
    avatar: require("../../../public/img/profile.png"),
    title: "Educative Hub",
    comment:
      "So thoughtful and wise, and vulnerable in sharing her own challenges with me. Dani is wonderful!",
    fullname: "Mozeedat Adediran",
    field: "Backend Developer",
    bgColor: "#FFA630",
    textColor: "#FFFFFF",
  },
  {
    id: 3,
    avatar: require("../../../public/img/profile.png"),
    title: "Powerful Tools",
    comment:
      "So thoughtful and wise, and vulnerable in sharing her own challenges with me. Dani is wonderful!",
    fullname: "Mozeedat Adediran",
    field: "Product Designer",
    bgColor: "#dda0dd",
    textColor: "#222",
  },
  {
    id: 4,
    avatar: require("../../../public/img/profile.png"),
    title: "Sophisticated Community",
    comment:
      "So thoughtful and wise, and vulnerable in sharing her own challenges with me. Dani is wonderful!",
    fullname: "Mozeedat Adediran",
    field: "Fullsatck Developer",
    bgColor: "#2898FF",
    textColor: "#FFFFFF",
  },
];

type Feedbacks = {
  _id?: string;
  avatar?: string;
  title?: string;
  comment?: string;
  fullname?: string;
  field?: string;
};

function Feedbacks() {
  const [index, setIndex] = useState(0);
  const [feedbacks, setFeedbacks] = useState<Feedbacks[] | null>(null); // Updated type to an array of Feedbacks or null

  const getAllFeedbacks = async () => {
    try {
      const res = await fetch("http://localhost:8500/api/v1/feedbacks");
      const data = await res.json();
      console.log(data);
      console.log(data[0]);
      setFeedbacks(data); // Updated to set the array of feedbacks
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFeedbacks();
  }, []); // Added an empty dependency array to run the effect only once

  // Check if feedbacks is null before accessing its properties
  const feedback = feedbacks && feedbacks[index];
  const { _id, avatar, title, comment, fullname, field } = feedback || {}; // Use object destructuring with default empty object

  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      return setIndex(feedbacks.length - 1);
    }
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1);

    if (index >= feedbacks.length - 1) {
      return setIndex(0);
    }
  };

  return (
    <div
      key={_id}
      className="flex flex-col justify-center items-center bg-light-blue w-[434px] px-[48px] py-[34px]">
      <div className="flex gap-16 mb-[28px] cursor-pointer">
        <button onClick={prevTestimonialHandler}>
          <FaArrowLeft />
        </button>
        <div style={{ position: "relative" }}>
          {avatar && fullname && (
            <Image
              src={avatar}
              alt={fullname}
              objectFit="cover"
              width={200}
              height={200}
              style={{ borderRadius: "50%" }}
            />
          )}
        </div>
        <button onClick={nextTestimonialHandler}>
          <FaArrowRight />
        </button>
      </div>
      <h5 className="mb-[21px] text-xl font-semibold">{title}</h5>
      <p className="mb-[21px] text-xl text-center">{comment}</p>
      <h6 className="mb-[17px]  text-base font-medium">{fullname}</h6>
      <small className="text-xs">{field}</small>
    </div>
  );
}

export default Feedbacks;

// I had a wonderful experience attending the bootcamp. The instructors were knowledgeable and supportive, and the curriculum was well-structured. I learned a lot and gained valuable skills that will help me in my career.
// As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.
