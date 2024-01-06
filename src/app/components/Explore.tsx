import Image from "next/image";
import Link from "next/link";

const Explore = () => {
  return (
    <section className="flex flex-col bg-white px-[173px] pt-[60px] text-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="w-[655px] text-4xl text-black font-[600] mb-[16px]">
          Explore the courses we offer
        </h2>
        <p className="w-[956px] text-[#555] text-center mb-[70px] text-base">
          Lorem ipsum dolor sit amet consectetur. Amet sociis tincidunt feugiat
          nisl dui malesuada pulvinar convallis. Mauris ac est pretium eleifend
          mattis bibendum sed adipiscing natoque.
        </p>
      </div>

      <div className="flex gap-[60px]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center w-[38px] h-[38px] mb-1 border-solid border-2 border-[#cbcbcb]">
            1
          </div>
          <div className="w-0.5 h-[292px] bg-[#cbcbcb] mb-1"></div>
          <div className="flex justify-center items-center w-[38px] h-[38px] mb-1 border-solid border-2 border-[#cbcbcb]">
            2
          </div>
          <div className="w-0.5 h-[292px] bg-[#cbcbcb] mb-1"></div>
          <div className="flex justify-center items-center w-[38px] h-[38px] mb-1 border-solid border-2 border-[#cbcbcb]">
            3
          </div>
          <div className="w-0.5 h-[292px] bg-[#cbcbcb] mb-1"></div>
          <div className="flex justify-center items-center w-[38px] h-[38px] mb-1 border-solid border-2 border-[#cbcbcb]">
            4
          </div>
        </div>

        <div className="flex-col">
          <div className=" flex  w-[1020px] pl-[24px] gap-[32px] rounded-sm shadow border-solid ">
            <div className="flex flex-col my-[24px]">
              <h3 className="text-left text-3xl text-black font-[600]">
                UI/IX Design
              </h3>
              <div className="flex gap-x-2 text-center text-[10px] font-[600] mb-4">
                <p className="px-[8px] py-[6px] bg-[#f5f5f5]">Figma</p>
                <p className="px-[8px] py-[6px] bg-[#f5f5f5]">Wireframing</p>
                <p className="px-[8px] py-[6px] bg-[#f5f5f5]">Prototype</p>
                <p className="px-[8px] py-[6px] bg-[#f5f5f5]">User Research</p>
              </div>
              <p className="text-left mb-[38px] leading-[25px]">
                At NestedTalents, we recognize the power of hands-on,~
                face-to-face learning. In the ever-evolving landscape of
                technology, nothing beats the immersive experience of a physical
                classroom.
              </p>
              <div className="flex justify-between">
                <div className="text-left ">
                  <small className=" text-[14px] font-[600] text-[#101828]">
                    Physical class
                  </small>
                  <br />
                  <small className="text-[14px] font-[400] text-[#667085]">2 weeks</small>
                </div>
                <div>
                  <button className="w-[171px] h-[50px] rounded-sm flex bg-primary text-white items-center justify-center px-[20px] py-[12px]">
                    <Link href="/">Learn More</Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        d="M7 17L17 7M17 7L7 7M17 7V17"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <Image src="/img/ui.svg" alt="ui/ux" width={384} height={310} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
