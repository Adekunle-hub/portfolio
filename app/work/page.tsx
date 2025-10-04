"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperClass } from "swiper/react";

import "swiper/css";
import {
  TooltipTrigger,
  Tooltip,
  TooltipProvider,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    categore: "Quick Cart",
    title: "quick cart",
    description:
      "Quick-Cart is a modern ecommerce platform designed to make online shopping fast, simple, and reliable. With a clean interface and smart navigation, customers can browse a wide range of products, add items to their cart seamlessly, and enjoy a secure checkout experience.",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "TailwindCss",
      },
      {
        name: "Typescript",
      },
      {
        name: "Next.Js",
      },
    ],
    image: "/Capture.PNG",
    live: "https://soft-cart.vercel.app/",
    github: "https://github.com/Adekunle-hub/soft-cart",
  },
  {
    num: "02",
    categore: "Sobisay Studios",
    title: "Sobisay Studios",
    description:
      "Sobisay Studios Grow Double, Triple, or Even 10X Your Business Online—Fast. At Sobisay Studios, we specialize in crafting high-impact videos that captivate your audience and generate traffic, alongside conversion-focused websites that turn visitors into loyal customers. Take charge of your online presence and scale with confidence.",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "TailwindCss",
      },
      {
        name: "Typescript",
      },
      {
        name: "React.Js",
      },
    ],
    image: "/sobisay1.png",
    live: "https://sobisay-1oyl.vercel.app/",
    github: "https://github.com/Adekunle-hub/sobisay",
  },
  {
    num: "03",
    categore: "Rent Up",
    title: "Rent Up",
    
    description:
      "RentUp is a modern property rental web app designed to help users explore available apartments and homes with ease. Built using React and styled with Tailwind CSS, the platform features a clean, responsive interface, property listings with key details, and intuitive navigation. This project showcases my ability to build real-world applications with a focus on layout, component reuse, and user experience.",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "TailwindCss",
      },
      {
        name: "Typescript",
      },
      {
        name: "React.Js",
      },
    ],
    image: "/Rent UP.png",
    live: "https://rentup-sigma.vercel.app/",
    github: "https://github.com/Adekunle-hub/rentup",
  },
 
   
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] w-[90%] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className=" w-full items-start  lg:items-center">
          <div className="flex flex-col lg:flex-row lg:gap-[30px]">
            <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
              <div className="flex flex-col gap-[20px] h-[50%]">
                <div className="text-[42px] leading-none font-extrabold text-transparent text-outline ">
                  {project.num}
                </div>
                <h2 className=" text-2xl font-bold leading-none text-white group-hover:text-accent transition-all duration-300 capitalize">
                  {project.categore}
                </h2>
                <p className="text-white/60 text-xs/5 text-[13px] lg:text-base  ">
                  {project.description}
                </p>
                <ul className="flex">
                  {project.stack.map((item, index) => {
                    return (
                      <li className="text-accent text-[12px]" key={index}>
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs bg-white p-2 text-black">
                            Live Project
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs bg-white p-2 text-black">
                            Github repo
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%] order-1">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="lg:h-[340px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide className="w-fit" key={index}>
                      <div className="h-[300px] relative group flex  justify-center">
                        <div className="relative h-full w-full">
                          <Image
                            fill
                            src={project.image}
                            className="object-contain"
                            alt="image"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-1/2 translate-y-1/2 lg:translate-y-0 lg:bottom-0 z-100 w-full justify-between lg:w-max lg:justify-none"
                  btnStyles="bg-accent disabled:opacity-20 disabled:cursor-not-allowed hover:bg-accent-hover text-primary text-[18px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  iconsStyles="p-0"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Work;
