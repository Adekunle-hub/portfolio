"use client";
import {
  SheetContent,
  Sheet,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
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
  {
    name: "hire me",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Main menu</SheetTitle>
        <div className="mt-32 mb-32 text-[13px] lg:text-base text-center text-2xl">
          <Link className="items-center text-center" href="/">
            <h1 className="text-3xl inline font-semibold text-white">
              {" "}
              Mujeeb Ishola
            </h1>
            <span className="text-accent">.</span>
          </Link>
        </div>
        <nav className="flex flex-col gap-3 items-center justify-center">
          {links.map((link, index) => {
            return (
              <SheetClose asChild key={link.path}>
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.path === pathname && " border-b-2 border-accent "
                  }text-sm capitalize hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
