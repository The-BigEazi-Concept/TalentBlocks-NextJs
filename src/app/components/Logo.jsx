import Image from "next/image";
import Link from "next/link";

const Logo = ({ img, color, fontSize, fontWeight }) => {
  return (
    <Link href="/">
      <div className="items-center gap-3 flex mr-20">
        <Image src={`${img}`} alt="TalentsArray logo" width={36} height={36} />
        <h5 className={`${color} ${fontSize} ${fontWeight}`}>TalentsArray</h5>
      </div>
    </Link>
  );
};

export default Logo;
