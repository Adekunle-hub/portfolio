"use client";
import Container from "@/components/Container";
import { describe } from "node:test";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    descrption:
      "I build fast, responsive, and scalable websites using modern technologies like React, Next.js, and Vue. From landing pages to full web apps, I focus on performance and user experience.",
    href: "",
  },

  {
    num: "02",
    title: "UI/UX Design",
    descrption:
      "I design intuitive, user-friendly interfaces that blend aesthetics with functionality—ensuring users enjoy every click, scroll, and tap.",
    href: "",
  },
  {
    num: "03",
    title: "Web Consultation",
    descrption:
      "Need clarity or direction for your web project? I offer expert advice on development strategy, tech stacks, design, and performance best practices.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    descrption:
      "I optimize websites to rank better on search engines, using clean code, semantic HTML, and smart on-page strategies to drive organic traffic.",
    href: "",
  },
];
const Services = () => {
  return (
    <Container>
      <section className="w-[90%] min-h-[80vh] flex-col justify-center flex  translate-0 ">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-1 flex gap-[2rem] flex-col justify-center group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-xl font-extrabold text-outline 
                  group-hover:[-webkit-text-stroke:1px_#00ff99] text-transparent
                  transition-all duration-500
                  ">
                    {service.num}
                  </div>
                  <Link href={service.href}
                  className="w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent 
                  transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-xl" />
                  </Link>
                </div>
                <h2 className="lg:text-[36px] text-[24px] font-bold leading-none text-white 
                hover:text-accent transition-all">{service.title}</h2>
                <p className="text-[10px] md:text-[13px]">{service.descrption}</p>

                <div className="border-white/20 w-full border-b"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default Services;
