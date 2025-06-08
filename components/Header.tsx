import Link from "next/link";
import { Button } from "./ui/button";
import Container from "./Container";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <Container>
      <header className=" w-[90%] py-8 lg:pt-12 lg:pb-[4rem] mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <h1 className="text-xl lg:mb-0 lg:text-2xl ">
              Mujeeb Ishola<span className="text-accent">.</span>{" "}
            </h1>
          </Link>
        </div>
        <div className="hidden lg:flex gap-8 items-center">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </header>
    </Container>
  );
};

export default Header;
