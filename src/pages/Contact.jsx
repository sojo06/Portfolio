import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Sectiontitle from "@/components/Sectiontitle";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { leftSideVariants, rightSideVariants } from "@/constants/motion";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";
import { constact } from "@/constants/assets";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-[#1f2937] to-black py-20 px-4 flex flex-col items-center justify-center w-full"
    >
      <Sectiontitle title="Contact Me" sub="Get In Touch" />

      {/* Contact Form + Image */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl mt-30">
        {/* Contact Form */}
        <motion.div
          variants={leftSideVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-[50%]"
        >
          <form
            className="flex flex-col gap-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message Sent!");
            }}
          >
            <Input
              type="text"
              placeholder="Your Name"
              required
              className="bg-black border border-gray-700 text-white placeholder:text-gray-400 h-14"
            />
            <Input
              type="email"
              placeholder="Your Email"
              required
              className="bg-black border border-gray-700 text-white placeholder:text-gray-400 h-14"
            />
            <Textarea
              rows={6}
              placeholder="Your Message"
              required
              className="bg-black border border-gray-700 text-white placeholder:text-gray-400"
            />
            <InteractiveHoverButton className="bg-[#1465FF] text-white w-40">
              Send Email
            </InteractiveHoverButton>
          </form>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={rightSideVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-[90%] flex justify-center items-center"
        >
          <img
            src={constact}
            alt="Contact Illustration"
            className="w-[100%] md:w-[85%] lg:w-[80%] max-w-[600px] bg-transparent"
          />
        </motion.div>
      </div>

      {/* Social Icons - Centered at Bottom */}
      <div className="mt-16 flex gap-6 border border-gray-700 rounded-2xl px-6 py-4 justify-center text-white ">
        <a
          href="https://github.com/sojo06"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#999]"
        >
          <GithubIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/sajoshi06"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0077b5]"
        >
          <LinkedinIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/sohamjoshi06"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#e1306c]"
        >
          <InstagramIcon className="w-6 h-6" />
        </a>
        <a
          href="https://x.com/sajoshi_06"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#1DA1F2]"
        >
          <TwitterIcon className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
