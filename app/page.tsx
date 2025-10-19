"use client";
import Container from "@/components/Container";
import Photos from "@/components/Photos";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <Container>
      <section className="h-full w-[90%] mx-auto ">
        <div className="flex flex-col lg:flex-row gap-y-[3rem] justify-between items-center">
          <div className="text-center w-full order-2 lg:order-none lg:text-left">
            <span className="text-base ">Software Developer</span>
            <h1 className="my-6 flex flex-col gap-4">
              Hello I'm <br />
              <span className="text-accent">Mujeeb</span>
            </h1>
            <p className="text-white/80 text-sm mb-8 ">
              I specialize in building fast, responsive, and accessible web
              interfaces using React, Next.js, and other modern tools.{" "}
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <a href="/MUJEEB RESUME.pdf" download>
                {" "}
                <Button
                  variant="outline"
                  size="md"
                  className="uppercase cursor-pointer flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload />
                </Button>
              </a>

              <div>
                <Socials />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-none  mb:8 xl:mb-0">
            <Photos />
          </div>
        </div>
        <Stats />
      </section>
    </Container>
  );
}
