import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-[#E8EAEC] px-[121px] py-14">
      <div className="flex gap-96">
        <div className="flex-col">
          <h4 className="text-black text-[32px] font-bold">Join With Us</h4>
          <small className="text-base font-normal">We'll send you Daily special offers.</small>
        </div>
        <div className="flex-col">
          <input type="text" placeholder="Enter your email" />
          <button>Join Now</button> <br />
          <small>
            We care about your data. Check our{" "}
            <Link href="/privacy">privacy policy</Link>
          </small>
        </div>
      </div>
    </section>
  );
};

export default Footer;
