"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "work",
    path: "/work",
  },

];
const Nav = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {Links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathName && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all text-[13px] lg:text-base `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
