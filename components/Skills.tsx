"use client";

import React, { useState } from "react";
import Image from "next/image";

const Skills = () => {
  // Define all skills in a single array
  const allSkills = [
    { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    { name: "Mongoose", icon: "mongoose", color: "#880000" },
    { name: "Firebase", icon: "firebase", color: "#FFCA28" },
    { name: "Node.js", icon: "nodedotjs", color: "#339933" },
    { name: "Next.js", icon: "nextdotjs", color: "#ffffff" },
    { name: "Express.js", icon: "express", color: "#ffffff" },
    { name: "HTML", icon: "html5", color: "#E34F26" },
    { name: "CSS", icon: "css3", color: "#1572B6" },
    { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    { name: "TypeScript", icon: "typescript", color: "#3178C6" },
    { name: "React.js", icon: "react", color: "#61DAFB" },
    { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
    { name: "Redux", icon: "redux", color: "#764ABC" },
    { name: "React Query", icon: "reactquery", color: "#FF4154" },
    { name: "Git", icon: "github", color: "#F05032" },
    { name: "VS Code", icon: "vscode", color: "#007ACC" },
    { name: "Vercel", icon: "vercel", color: "#ffffff" },
    { name: "Stripe", icon: "stripe", color: "#008CDD" },
    { name: "JWT", icon: "jsonwebtokens", color: "#000000" },
  ];

  // Split skills into two rows
  const firstRowSkills = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const secondRowSkills = allSkills.slice(Math.ceil(allSkills.length / 2));

  // Local logos available in the project
  const localLogos = {
    typescript: "/ts.svg",
    tailwindcss: "/tail.svg",
    react: "/re.svg",
    nextdotjs: "/next.svg",
    threejs: "/three.svg",
    framermotion: "/fm.svg",
    gsap: "/gsap.svg",
    cloudinary: "/cloud.svg",
    github: "/git.svg",
    stream: "/stream.svg",
    docker: "/dock.svg",
    mongoose: "/mongoose.png",
  };

  // Track images that fail to load
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Define a union type for the icon return type
  type IconResult = string | JSX.Element;

  // Get logo URL with appropriate icon
  const getLogoUrl = (icon: string, name: string): IconResult => {
    // Special case for mongoose - always use SVG instead of trying to load an image
    if (icon === "mongoose") {
      return renderMongooseIcon();
    }

    // Check if we have a local logo first
    if (localLogos[icon as keyof typeof localLogos] && !failedImages[icon]) {
      return localLogos[icon as keyof typeof localLogos];
    }

    // Special case for interpersonal skills - use custom icons
    if (
      [
        "curiosity",
        "listening",
        "responsibility",
        "flexibility",
        "decision",
        "devtools",
        "vscode",
        "surjopay",
        "sslcommerz",
        "multerjs",
        "bcryptjs",
        "nodemailerjs",
        "corsjs",
      ].includes(icon)
    ) {
      return renderCustomIcon(icon);
    }

    // Special case for dev tools which doesn't have a standard icon
    if (icon === "devtools") {
      return renderCustomIcon("devtools");
    }

    // Use Simple Icons CDN for tech logos
    return `https://cdn.simpleicons.org/${icon}`;
  };

  // Handle image load error
  const handleImageError = (icon: string) => {
    setFailedImages((prev) => ({
      ...prev,
      [icon]: true,
    }));
  };

  // Render mongoose icon as SVG
  const renderMongooseIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        fill="#880000"
        style={{ minWidth: "24px", minHeight: "24px" }}
      >
        <path d="M13.74 4.23c-.04-.41-.32-1.24-.48-1.58-.18-.38-.28-.47-.28-.47C12.83.95 12.07.07 12.07.07l-.03.03c0 .05-.17 1.46-.17 1.46-.36 1.86-.52 3.7-.51 5.56 0 .41 0 .82.01 1.23 0 .01-.11.76-.11.76-.25.5-.47 1.96-.23 3.48.31 1.95.56 3.28 1.39 4.67.118 0 .14-1.312.14-1.312.57.227.97 2.55 1.08 3.907 0 0 .23.01.38-.12.0893-.5173.3853-1.4987.817-2.16 1.014-1.55 1.624-3.297 1.781-5.127.113-.813.133-1.633.06-2.448-.09-.95-.32-1.784-.74-2.73-.42-.944-1.29-2.64-1.26-3.87z" />
      </svg>
    );
  };

  // Render custom icons with SVG for interpersonal skills
  const renderCustomIcon = (type: string) => {
    // Define the possible icon keys
    type IconKey =
      | "curiosity"
      | "listening"
      | "responsibility"
      | "flexibility"
      | "decision"
      | "devtools"
      | "vscode"
      | "surjopay"
      | "sslcommerz"
      | "multerjs"
      | "bcryptjs"
      | "nodemailerjs"
      | "corsjs";

    const icons: Record<IconKey, JSX.Element> = {
      curiosity: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
          <path d="M11 11h2v6h-2zm0-4h2v2h-2z" />
        </svg>
      ),
      listening: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 4a4 4 0 0 0-4 4v3a4 4 0 0 0 8 0V8a4 4 0 0 0-4-4zm2 7a2 2 0 0 1-4 0V8a2 2 0 0 1 4 0v3z" />
          <path d="M17 11a1 1 0 0 0-2 0c0 2.757-2.243 5-5 5s-5-2.243-5-5a1 1 0 0 0-2 0c0 3.859 3.141 7 7 7s7-3.141 7-7z" />
        </svg>
      ),
      responsibility: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 5h-2V3H7v2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM7 15l1.6-1.2L9.9 15l-.5-2 1.6-1.3h-2L8.5 9l-.5 2.7h-2l1.6 1.3-.6 2z" />
        </svg>
      ),
      flexibility: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 9v2h-2V3h-2v2h-4V3h-2v2H7V3H5v8H3V9H1v12h9v-3c0-1.103.897-2 2-2s2 .897 2 2v3h9V9h-2z" />
        </svg>
      ),
      decision: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z" />
          <path d="m7.076 9.617 1.452-1.13 2.4 3.085a.55.55 0 0 0 .609.194.592.592 0 0 0 .387-.474l.383-3.479 1.878.52-.383 3.479A2.59 2.59 0 0 1 12.131 14c-.601.041-1.187-.104-1.694-.41a2.635 2.635 0 0 1-.929-1.102l-2.432-3.871z" />
        </svg>
      ),
      devtools: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z" />
          <path d="m8 16 4-4-4-4 1.414-1.414L12.828 12l-3.414 3.414z" />
        </svg>
      ),
      vscode: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
        </svg>
      ),
      surjopay: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
        </svg>
      ),
      sslcommerz: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4c1.86 0 3.41 1.28 3.86 3H8.14c.45-1.72 2-3 3.86-3zm-4 6h8v2H8v-2zm2 4h4v2h-4v-2z" />
        </svg>
      ),
      multerjs: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14 13v-2l-4 5 4 5v-2h6v-6h-6zm-4-2v2H4v6h6v2l-4-5 4-5z" />
          <path d="M12 3c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1m0-2c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
        </svg>
      ),
      bcryptjs: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17 8V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4v14h16V8h-3zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm4 8.723V18h-2v-2.277c-.595-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723z" />
        </svg>
      ),
      nodemailerjs: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      corsjs: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-3.032c-.25-2.69-1.152-5.177-2.528-7.004A8.01 8.01 0 0 1 19.931 11zM13 4.062V11h-2V4.062a8.079 8.079 0 0 1 2 0zm0 8.938v6.938a8.079 8.079 0 0 1-2 0V13h2zm-3.469-9.942c-1.376 1.827-2.278 4.314-2.528 7.004H3.971a8.01 8.01 0 0 1 5.56-7.004zM3.971 13h3.032c.25 2.69 1.152 5.177 2.528 7.004A8.01 8.01 0 0 1 3.971 13zm11.998 7.004c1.376-1.827 2.278-4.314 2.528-7.004h3.032a8.01 8.01 0 0 1-5.56 7.004z" />
        </svg>
      ),
    };

    // Safely cast and return the icon or default
    const iconKey = type as IconKey;
    return icons[iconKey] || icons.curiosity;
  };

  // Create a reusable SkillRow component
  const SkillRow = ({
    skills,
    direction,
  }: {
    skills: typeof allSkills;
    direction: "left" | "right";
  }) => {
    return (
      <div className="flex overflow-hidden mb-6">
        <div
          className={`flex gap-3 sm:gap-6 animate-marquee-${direction} whitespace-nowrap`}
        >
          {/* Double the skills array to create a seamless loop effect */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-20 sm:w-28 md:w-36 flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-[rgb(18,18,45)] border border-[rgba(67,67,153,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(125,90,255,0.4)]"
            >
              <div className="h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center mb-2 sm:mb-4">
                {skill.icon === "mongoose" ? (
                  <div className="h-8 w-8 sm:h-12 sm:w-12 flex items-center justify-center">
                    {renderMongooseIcon()}
                  </div>
                ) : [
                    "curiosity",
                    "listening",
                    "responsibility",
                    "flexibility",
                    "decision",
                    "devtools",
                    "vscode",
                    "surjopay",
                    "sslcommerz",
                    "multerjs",
                    "bcryptjs",
                    "nodemailerjs",
                    "corsjs",
                  ].includes(skill.icon) ? (
                  <div
                    className="h-8 w-8 sm:h-12 sm:w-12"
                    style={{ color: skill.color || "#fff" }}
                  >
                    {renderCustomIcon(skill.icon)}
                  </div>
                ) : (
                  <Image
                    src={getLogoUrl(skill.icon, skill.name) as string}
                    alt={skill.name}
                    className="h-8 w-8 sm:h-12 sm:w-12 object-contain"
                    width={48}
                    height={48}
                    onError={() => handleImageError(skill.icon)}
                    unoptimized={true}
                  />
                )}
              </div>
              <span className="font-medium text-xs sm:text-sm text-center truncate w-full">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-12 sm:py-20 w-full overflow-hidden">
      <style jsx global>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-marquee-left {
            animation: marquee-left 20s linear infinite;
          }

          .animate-marquee-right {
            animation: marquee-right 20s linear infinite;
          }
        }
      `}</style>

      <div className="w-full px-4 sm:px-6 sm:px-10">
        <h1 className="heading mb-8 sm:mb-12 text-center">
          My <span className="text-purple">Skill Set</span>
        </h1>

        {/* Two rows of skills scrolling in opposite directions */}
        <div className="relative">
          {/* First row - scrolls left */}
          <SkillRow skills={firstRowSkills} direction="left" />

          {/* Second row - scrolls right */}
          <SkillRow skills={secondRowSkills} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
