"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";

import emailjs from "@emailjs/browser";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const serviceIdKey: string = process.env.SERVICE_ID!;
const publicKey: string = process.env.PUBLIC_KEY!;
const templateKey: string = process.env.TEMPLATE_KEY!;

console.log(publicKey)

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234)8162031480",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "isholamujeebadekunle@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "no 3,airport road,alaakia,Ibadan.",
  },
];

const Contact = () => {
  const defaultData = {
    first_name: "",
    last_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(defaultData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const isFormValid = Object.values(formData).every((val) => val.trim() !== "");

  const form = useRef<HTMLFormElement | null>(null);

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(serviceIdKey);
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(serviceIdKey, templateKey, form.current, publicKey).then(
      () => {
        toast.success("Message Sent Succesfully!");
        setFormData(defaultData);
        form.current?.reset();
      },
      (error) => {
        toast.error( error || "Message not sent");
      }
    );
  };
  return (
    <Container>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6 w-[90%]"
      >
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col lg:flex-row gap-[30px]">
            <div className="lg:w-[60%] w-full order-2 lg:order-none">
              <form
                ref={form}
                onSubmit={sendMail}
                className="flex flex-col gap-6 py-10 px-3  bg-[#27272c] rounded-xl"
              >
                <h3 className="text-2xl w-full lg:text-start text-center text-accent">
                  Let's work together
                </h3>
                <p className="text-white/60 text-sm">
                  Let's build something great together—reach out and let's make
                  it happen.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    value={formData.first_name}
                    onChange={handleChange}
                    name="first_name"
                    placeholder="Firstname"
                  />
                  <Input
                    type="text"
                    value={formData.last_name}
                    onChange={handleChange}
                    name="last_name"
                    placeholder="Lastname"
                  />
                  <Input
                    type="text"
                    value={formData.user_email}
                    onChange={handleChange}
                    name="user_email"
                    placeholder="Email Address"
                  />
                  <Input
                    type="text"
                    value={formData.user_phone}
                    onChange={handleChange}
                    name="user_phone"
                    placeholder="Phone Number"
                  />
                </div>

                <Select name="service">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>select a service</SelectLabel>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="SEO">SEO</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  className="h-[200px]"
                  placeholder="type your message here"
                ></Textarea>
                <Button
                  disabled={!isFormValid}
                  type="submit"
                  value="send"
                  className="w-[150px] disabled:opacity-30"
                  size="md"
                >
                  Send message
                </Button>
              </form>
            </div>
            <div className="flex flex-1 items-center lg:justify-start order-1 lg:order-none ">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className=" text-accent rounded-md flex items-center gap-8">
                        <div className="bg-[#27272c] text-[28px] w-[52px] h-[52px] rounded-md flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div className="flex-1 flex gap-4 flex-col justify-center">
                          <p className="text-xs text-white/60">{item.title}</p>
                          <h3 className="text-xs  ">{item.description}</h3>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </Container>
  );
};

export default Contact;
