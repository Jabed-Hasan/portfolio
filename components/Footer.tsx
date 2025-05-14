"use client";

import {
  FaLocationArrow,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileDownload,
  FaCodeBranch,
  FaCertificate,
} from "react-icons/fa";
import Image from "next/image";

import { socialMedia, navItems } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  // Function to get current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -z-10 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          width={1920}
          height={500}
        />
      </div>

      <div className="w-full">
        {/* Get in Touch Section - Redesigned */}
        <div className="relative mb-24">
          {/* Background blur effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple/5 to-transparent rounded-3xl blur-xl"></div>

          <div className="max-w-5xl mx-auto relative z-10 px-4 py-16 sm:py-20 backdrop-blur-sm border border-white/10 rounded-3xl bg-black/20">
            <div className="flex flex-col items-center text-center">
              <div className="inline-block mb-5 bg-purple/10 px-4 py-2 rounded-full">
                <h3 className="text-sm font-medium text-purple">
                  Get in Touch
                </h3>
              </div>

              <h1 className="heading lg:max-w-[45vw] text-center mb-6">
                Ready to take <span className="text-purple">your</span> digital
                presence to the next level?
              </h1>

              <p className="text-white-200 my-5 text-center max-w-2xl mb-8">
                Reach out to me today and let&apos;s discuss how I can help you
                achieve your goals with modern web solutions.
              </p>

              <div className="flex gap-5 flex-wrap justify-center">
                <a href="mailto:jabed8441@gmail.com">
                  <MagicButton
                    title="Send an Email"
                    icon={<FaEnvelope />}
                    position="left"
                    otherClasses="hover:scale-105 transition-transform"
                  />
                </a>
                <a
                  href="https://wa.me/+8801743770253"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MagicButton
                    title="Contact on WhatsApp"
                    icon={<FaPhone />}
                    position="left"
                    otherClasses="hover:scale-105 transition-transform"
                  />
                </a>
              </div>

              {/* Social media links in the contact section */}
              <div className="flex gap-4 mt-8 justify-center">
                <a
                  href="https://github.com/Jabed-Hasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-30 rounded-md border border-zinc-800 transition-all hover:bg-gray-700"
                >
                  <Image
                    src="/git.svg"
                    alt="GitHub"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
                <a
                  href="https://bd.linkedin.com/in/developer-jabed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-30 rounded-md border border-zinc-800 transition-all hover:bg-blue-600"
                >
                  <Image
                    src="/link.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
                <a
                  href="https://facebook.com/jabed.hasan.698609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-30 rounded-md border border-zinc-800 transition-all hover:bg-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    fill="white"
                    className="w-5 h-5"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-5 -top-10 -right-10 w-40 h-40 bg-purple/30 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -z-5 -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Footer links and info section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-white/10 pt-10 px-2 sm:px-4">
          {/* About Column */}
          <div className="md:col-span-1 lg:col-span-1 pl-4 sm:pl-6 md:pl-10">
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-white-200 text-sm mb-4">
              A passionate full-stack developer specializing in creating modern,
              responsive web applications with cutting-edge technologies.
            </p>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/Jabed-Hasan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Image
                  src="/git.svg"
                  alt="GitHub"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://bd.linkedin.com/in/developer-jabed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Image
                  src="/link.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  fill="white"
                  className="w-5 h-5"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-white-200 hover:text-purple transition-colors text-sm flex items-center"
                  >
                    <FaLocationArrow className="mr-2 text-purple text-[8px]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-purple bg-opacity-10 rounded-full mr-3 mt-1">
                  <FaEnvelope className="text-purple" size={14} />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Email</p>
                  <a
                    href="mailto:jabed8441@gmail.com"
                    className="text-white-200 text-sm hover:text-purple transition-colors"
                  >
                    jabed8441@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-purple bg-opacity-10 rounded-full mr-3 mt-1">
                  <FaPhone className="text-purple" size={14} />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">WhatsApp</p>
                  <a
                    href="https://wa.me/+8801743770253"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-200 text-sm hover:text-purple transition-colors"
                  >
                    +880 1743-770253
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-purple bg-opacity-10 rounded-full mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-purple"
                    width="14"
                    height="14"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">LinkedIn</p>
                  <a
                    href="https://bd.linkedin.com/in/developer-jabed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-200 text-sm hover:text-purple transition-colors"
                  >
                    developer-jabed
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-purple bg-opacity-10 rounded-full mr-3 mt-1">
                  <FaMapMarkerAlt className="text-purple" size={14} />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Location</p>
                  <p className="text-white-200 text-sm">Dhaka, Bangladesh</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Resources Section (Replacing Newsletter) */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-purple bg-opacity-10 rounded-full mr-3 mt-1">
                  <FaFileDownload className="text-purple" size={14} />
                </div>
                <div>
                  <a
                    href="https://drive.google.com/file/d/1PNlB0Oc_FUXpy0s3LrXhE3lgIjJOqjks/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium text-sm flex items-center hover:text-purple transition-colors"
                  >
                    Download Resume
                    <span className="px-2 py-1 ml-2 text-xs bg-purple bg-opacity-20 rounded-md">
                      PDF
                    </span>
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-purple bg-opacity-10 rounded-full mr-3 mt-1">
                  <FaCodeBranch className="text-purple" size={14} />
                </div>
                <div>
                  <a
                    href="https://github.com/Jabed-Hasan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium text-sm hover:text-purple transition-colors"
                  >
                    GitHub Repositories
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-purple bg-opacity-10 rounded-full mr-3 mt-1">
                  <FaCertificate className="text-purple" size={14} />
                </div>
                <div>
                  <a
                    href="#"
                    className="text-white font-medium text-sm hover:text-purple transition-colors"
                  >
                    Certifications
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center">
          <p className="text-sm font-light">
            © {currentYear} | Designed & Developed by{" "}
            <span className="text-purple">Jabed Hasan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
