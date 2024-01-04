"use client";

import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "About Us",
    route: "/about-us",
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
    ],
  },
  { title: "FAQs", route: "/faqs" },
  { title: "Blogs", route: "/blogs" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-[90px] px-[120px] py-[40px] text-white">
      <Link href="/">
        <div className="items-center gap-3 flex mr-20">
          <Image
            src="/img/logo.svg"
            alt="TalentsArray logo"
            width={36}
            height={36}
          />
          <h5 className="text-white text-2xl font-[700]">TalentsArray</h5>
        </div>
      </Link>

      {menuItems.map((item, index) =>
        item.hasOwnProperty("children") ? (
          <Dropdown item={item} />
        ) : (
          <ul
            key={index}
            className="items-center flex gap-[30px] text-white text-base font-[500] leading-relaxed">
            <li>
              <Link href={item?.route || ""}>{item.title}</Link>
            </li>
          </ul>
        )
      )}

      <div className="w-[278px] h-[50px] justify-start items-center gap-[30px] inline-flex ml-20">
        <button className="text-white text-base font-medium leading-none">
          <Link href="/contacts">Contacts</Link>
        </button>
        <button className="w-[164px] h-[50px] px-8 py-4 bg-blue-500 rounded justify-center items-center gap-2.5 inline-flex">
          <Link href="/available-courses"> Get started</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
