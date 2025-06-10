"use client";
import Container from "@/components/Container";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaVuejs,

} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I'm a frontend developer who helps businesses turn ideas into polished, high-performing digital experiences. I build responsive, user-friendly websites and interfaces using tools like React, Next.js, TypeScript, and Vue. Whether you need a fast-loading landing page, a clean dashboard, or a custom web app, I bring both technical skill and creative thinking to the table.I've also worked in leadership roles where I managed small teams, kept projects organized, and ensured clear communication between developers and clients. I’m easy to work with, responsive, and committed to delivering results that make your business look good—and work better online.Let’s collaborate to bring your next web project to life.",
  info: [
    {
      fieldName: "Name",
      filedValue: "Mujeeb Ishola",
    },
   
    {
      fieldName: "Nationality",
      filedValue: "Nigerian",
    },
 
    {
      fieldName: "Freelance",
      filedValue: "Available",
    },
  ],
};

const experience = {
  icon: "/vanlife.png",
  title: "My Experience",
  description:
    "As a Frontend Developer that has worked on several projects including Balanceè Auto Services, I was responsible for designing and implementing a smart car repair booking interface. Leveraging React, TypeScript, and Tailwind CSS, I developed a real-time scheduling platform that managed availability across more than 40 repair stations.Previously, I served as Technical Lead for the NAMMES KWASU Chapter (Sept 2023 – May 2024), where I led the development of a student portal that streamlined communication and event coordination. I also provided mentorship in version control, Git workflows, and frontend development, while automating routine technical processes to enhance team efficiency.Additionally, I’ve worked as a Freelance Web Developer since 2023, delivering responsive, SEO-optimized websites for small businesses using modern frameworks such as Next.js and Astro. I prioritize client satisfaction by offering ongoing support and ensuring scalable, user-friendly design.",
  items: [
    {
      company: "Upworks",
      position: "Freelancer",
      duartion: "2023-present",
    },

    {
      company: "Lush Allure",
      position: "Frontend Developer",
      duartion: "2023-present",
    },
    
  ],
};
const education = {
  icon: "/vanlife.png",
  title: "My Education",
  description:
    "B.Eng in materials science and enginnering at Kwara state university — Expected Graduation: 2025. Currently focused on frontend technologies, UI/UX design, and building real-world web projects.",
  items: [
    {
      company: "Online course platform",
      position: "HTML, CSS and Javascript",
      duartion: "2022",
    },
    {
      company: "Codeacademy",
      position: "Frontend Developer",
      duartion: "2023",
    },
    {
      company: "Scrimba",
      position: "React, Next.JS",
      duartion: "2023",
    },
    {
      company: "Codeacademy",
      position: "Vue",
      duartion: "2023",
    },
  
  ],
};

const skills = {
  icon: "/vanlife.png",
  title: "My Skills",
  description:
    "I’m skilled in frontend development using React, Next.js, and Vue, along with solid expertise in HTML5, CSS3, JavaScript, and TypeScript. I have a good understanding of UI/UX principles and responsive design, often working with design tools like Figma. I’m comfortable with Git, REST APIs, Webpack, and have a foundational knowledge of SEO and performance optimization to build efficient, user-friendly web applications.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
     {
      icon: <FaVuejs />,
      name: "vue",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] w-[90%] flex items-center justify-center py-12 lg:py-0"
      >
        <div className="w-full mx-auto">
          <Tabs
            defaultValue="about"
            className="flex flex-col w-full lg:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
              <TabsTrigger className="cursor-pointer hover:bg-accent/30" value="about">About me</TabsTrigger>
              <TabsTrigger className="cursor-pointer hover:bg-accent/30" value="experience">Experience</TabsTrigger>
              <TabsTrigger className="cursor-pointer hover:bg-accent/30" value="education">Education</TabsTrigger>
              <TabsTrigger className="cursor-pointer hover:bg-accent/30" value="skills">Skills</TabsTrigger>
              
            </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent value="about" className="w-full text-center lg:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="font-bold  text-2xl">{about.title}</h3>
                  <p className="max-w-[600px] text-justify text-white/60 mx-auto lg:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 w-full  lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                    {about.info.map((item, index)=>{
                      return(
                        <li className="flex items-center justify-start lg:justify-start gap-2" key={index}>
                          <span className="text-white/60 text-xs">{item.fieldName}</span>
                          <span>{item.filedValue}</span>

                        </li>
                      )
                    })}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="experience" className="w-full ">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="font-bold ">{experience.title}</h3>
                  <p className="text-[13px] text-justify lg:text-base max-w-[600px] text-white/60 mx-auto lg:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex flex-col py-6 px-10 rounded-xl gap-[10px] bg-[#232329] h-[184px] justify-center items-center lg:items-start "
                          >
                            <span className="text-[13px] lg:text-base text-accent">{item.duartion}</span>
                            <h3 className="text-[13px] lg:text-base max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-xl text-whitel/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
               <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="font-bold ">{education.title}</h3>
                  <p className="text-[13px] lg:text-base max-w-[600px] text-white/60 mx-auto lg:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] min-h-[400px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex flex-col py-6 px-10 rounded-xl gap-[10px] bg-[#232329] h-[184px] justify-center items-center lg:items-start "
                          >
                            <span className="text-[13px] lg:text-base text-accent">{item.duartion}</span>
                            <h3 className="text-[13px] lg:text-base max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-xl text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-justify lg:text-left ">
                    <h3 className="text-center"> {skills.title}</h3>
                    <p className="text-[13px] lg:text-base leading-5">{skills.description}</p>
                  </div>
                
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:py-[2rem] md:grid-cols-4 gap-[15px]">
                      {skills.skillList.map((skill, index)=>{
                        return(
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300]:">{skill.icon}</div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="bg-white capitalize text-[10px] text-black py-1 px-2 rounded-sm">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        )
                      })}
                </ul>
               </div>
              </TabsContent>
              
            </div>
          </Tabs>
        </div>
      </motion.div>
    </Container>
  );
};

export default About;
