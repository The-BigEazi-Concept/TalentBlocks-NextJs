// Rendered inside Hero component.
"use client";

import Link from "next/link";
import { Dropdown, Logo } from "./index";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "About Us",
    route: "#about-us",
  },
  {
    title: "Programs ⌵",
    children: [
      {
        title: "UI/UX Design",
        route: "/product-design",
      },
      {
        title: "Frontend Development",
        route: "/frontend-dev",
      },
      {
        title: "Backend Development",
        route: "/backend-dev",
      },
      {
        title: "Fullstack Development",
        route: "/fullstack-dev",
      },
      {
        title: "Web3, Blockchain & Crypto Bootcamp",
        route: "/Wweb3-blockchain",
      },
    ],
  },
  { title: "FAQs", route: "#faqs" },
  { title: "Blogs", route: "/blogs" },
];

const Navbar = () => {
  return (
    <nav className="fixed z-40 bg-black bg-opacity-70 flex items-center justify-between h-[90px] w-[100%] mb-[162px] px-[120px] py-[40px] text-white">
      <Logo
      img={"/img/logo.svg"}
        color={"text-white"}
        fontSize={"text-2xl"}
        fontWeight={"font-[700]"}
      />

      {menuItems.map((item) =>
        item.hasOwnProperty("children") ? (
          <Dropdown item={item} />
        ) : (
          <ul
            key={item.title}
            className="items-center flex gap-[30px] text-white text-base font-[500] leading-relaxed">
            <li>
              <Link href={item?.route || ""}>{item.title}</Link>
            </li>
          </ul>
        )
      )}

      <div className="w-[278px] h-[50px] justify-start items-center gap-[30px] inline-flex ml-20">
        <button className="text-white text-base font-medium leading-none">
          <Link href="#contacts">Contacts</Link>
        </button>
        <button className="w-[164px] h-[50px] px-8 py-4 bg-blue-500 rounded justify-center items-center gap-2.5 inline-flex">
          <Link href="/available-courses"> Get started</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
