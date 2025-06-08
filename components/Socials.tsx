"use client";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedin />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/_softgee?s=21",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/Adekunle-hub",
  },
  {
    icon: <FaWhatsapp />,
    path: "https://Wa.me/+2348036645078",
  },
];
const Socials = () => {
  return (
    <section className="flex gap-3">
      {socials.map((social, index) => {
        return (
          <Link
            className="w-7 h-7 flex items-center hover:transition-all duration:400 justify-center hover:bg-accent hover:text-primary border border-accent rounded-full text-accent"
            href={social.path}
            key={index}
          >
            {social.icon}
          </Link>
        )
      })}
    </section>
  );
};

export default Socials;
