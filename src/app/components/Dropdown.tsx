import { useState } from "react";
import Link from "next/link";

import { MenuItem } from "./Navbar";

interface Props {
  item: MenuItem;
}

export default function Dropdown(props: Props) {
  const { item } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = item?.children ? item.children : [];

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const transClass = isOpen ? "flex" : "hidden";

  return (
    <>
      <ul className="relative justify-center items-center gap-[30px] flex text-white text-base font-medium leading-relaxed">
        <li onClick={toggle}>
          <button>{item.title}</button>
        </li>
        <div
          className={`absolute top-8 w-[321px] h-[336px] p-[30px] bg-white flex-col justify-start items-start gap-5 inline-flex ${transClass}`}>
          {menuItems.map((item) => (
            <Link
              key={item.route}
              className="text-zinc-900 text-base font-semibold hover:bg-[#E7F7FF] px-[15px] py-[20px] w-[100%]"
              href={item?.route || ""}>
              {item.title}
            </Link>
          ))}
        </div>
      </ul>
    </>
  );
}
