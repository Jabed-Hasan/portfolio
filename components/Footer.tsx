import {
  FaLocationArrow,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileDownload,
  FaCodeBranch,
  FaCertificate,
} from "react-icons/fa";

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
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="w-full mx-auto px-0">
        {/* Main content */}
        <div className="flex flex-col items-center mb-16">
          <h1 className="heading lg:max-w-[45vw] text-center">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center max-w-2xl">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals with modern web solutions.
          </p>
          <a href="mailto:youremail@example.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* Footer links and info section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-white/10 pt-10 px-6 md:px-12 lg:px-20">
          {/* About Column */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-white-200 text-sm mb-4">
              A passionate full-stack developer specializing in creating modern,
              responsive web applications with cutting-edge technologies.
            </p>
            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              {socialMedia.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-30 rounded-full border border-white/10 transition-all hover:bg-purple hover:bg-opacity-10 hover:scale-110"
                >
                  <img src={item.img} alt="social" className="w-5 h-5" />
                </a>
              ))}
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
                    href="mailto:youremail@example.com"
                    className="text-white-200 text-sm hover:text-purple transition-colors"
                  >
                    youremail@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-purple bg-opacity-10 rounded-full mr-3 mt-1">
                  <FaPhone className="text-purple" size={14} />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="text-white-200 text-sm hover:text-purple transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-purple bg-opacity-10 rounded-full mr-3 mt-1">
                  <FaMapMarkerAlt className="text-purple" size={14} />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Location</p>
                  <p className="text-white-200 text-sm">City, Country</p>
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
                    href="/resume.pdf"
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
                    href="https://github.com/yourusername"
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
