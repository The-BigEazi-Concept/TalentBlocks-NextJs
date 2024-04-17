import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";
import { useEffect, useState } from "react";
import Image from "next/image";

type Feedbacks = {
  _id?: string;
  avatar?: string;
  title?: string;
  comment?: string;
  fullname?: string;
  field?: string;
  favColor?: string; // Add favColor property to Feedbacks type
};

function Feedbacks() {
  const [index, setIndex] = useState(0);
  const [feedbacks, setFeedbacks] = useState<Feedbacks[] | null>(null);

  const getAllFeedbacks = async () => {
    try {
      const res = await fetch("http://localhost:8500/api/v1/feedbacks");
      const data = await res.json();
      setFeedbacks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFeedbacks();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (feedbacks?.length || 1)); // Increment index cyclically
    }, 20000); // Slide every 1 minute

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [feedbacks]);

  const prevTestimonialHandler = () => {
    setIndex(
      (prev) => (prev - 1 + (feedbacks?.length || 1)) % (feedbacks?.length || 1)
    ); // Decrement index cyclically
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => (prev + 1) % (feedbacks?.length || 1)); // Increment index cyclically
  };

  return (
    <>
      {!feedbacks ||
        (feedbacks.length === 0 && <h2>No feedbacks to display</h2>)}
      {feedbacks && (
        <div className="flex gap-x-4">
          <button
            onClick={prevTestimonialHandler}
            style={{ color: "#2898FF", fontSize: "2.5rem" }}>
            <VscChevronLeft />
          </button>
          <div
            key={feedbacks[index]?._id}
            style={{ backgroundColor: `${feedbacks[index]?.favColor}` }}
            className="flex flex-col justify-center items-left w-[434px] max-h-[289px] px-[41px] py-[47px] rounded-xl">
            <h5 className="mb-[8px] text-xl font-semibold">
              {feedbacks[index]?.title}
            </h5>
            <p className="mb-[18px] italic text-base font-normal">
              ❝&nbsp;{feedbacks[index]?.comment}&nbsp;❞
            </p>
            <div className="flex gap-2">
              <div className="relative rounded-full border-primary border-2">
                {feedbacks[index]?.avatar && feedbacks[index]?.fullname && (
                  <Image
                    src={feedbacks[index]?.avatar}
                    alt={feedbacks[index]?.fullname}
                    objectFit="cover"
                    width={46}
                    height={46}
                    style={{
                      borderRadius: "50%",
                      height: "46px",
                      width: "46px",
                    }}
                  />
                )}
              </div>
              <div className="flex flex-col item-start">
                <h6 className="mb-[2px] text-sm font-medium">
                  {feedbacks[index]?.fullname}
                </h6>
                <small className="text-xs">{feedbacks[index]?.field}</small>
              </div>
            </div>
          </div>
          <button
            onClick={nextTestimonialHandler}
            style={{ color: "#2898FF", fontSize: "2.5rem" }}>
            <VscChevronRight />
          </button>
        </div>
      )}
    </>
  );
}

export default Feedbacks;
