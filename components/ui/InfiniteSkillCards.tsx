"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "./MovingBorders";

export const InfiniteSkillCards = ({
  skills,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  skills: {
    name: string;
    icon: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

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
  };

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  // Get logo URL with appropriate icon
  const getLogoUrl = (icon: string): string | JSX.Element => {
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

    // Use Simple Icons CDN for tech logos
    return `https://cdn.simpleicons.org/${icon}/white`;
  };

  // Handle image load error
  const handleImageError = (icon: string) => {
    setFailedImages((prev) => ({
      ...prev,
      [icon]: true,
    }));
  };

  // Render custom icons with SVG for specialized skills
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
          width="14"
          height="14"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
          <path d="M11 11h2v6h-2zm0-4h2v2h-2z" />
        </svg>
      ),
      listening: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M12 4a4 4 0 0 0-4 4v3a4 4 0 0 0 8 0V8a4 4 0 0 0-4-4zm2 7a2 2 0 0 1-4 0V8a2 2 0 0 1 4 0v3z" />
          <path d="M17 11a1 1 0 0 0-2 0c0 2.757-2.243 5-5 5s-5-2.243-5-5a1 1 0 0 0-2 0c0 3.859 3.141 7 7 7s7-3.141 7-7z" />
        </svg>
      ),
      responsibility: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M19 5h-2V3H7v2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM7 15l1.6-1.2L9.9 15l-.5-2 1.6-1.3h-2L8.5 9l-.5 2.7h-2l1.6 1.3-.6 2z" />
        </svg>
      ),
      flexibility: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M21 9v2h-2V3h-2v2h-4V3h-2v2H7V3H5v8H3V9H1v12h9v-3c0-1.103.897-2 2-2s2 .897 2 2v3h9V9h-2z" />
        </svg>
      ),
      decision: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z" />
          <path d="m7.076 9.617 1.452-1.13 2.4 3.085a.55.55 0 0 0 .609.194.592.592 0 0 0 .387-.474l.383-3.479 1.878.52-.383 3.479A2.59 2.59 0 0 1 12.131 14c-.601.041-1.187-.104-1.694-.41a2.635 2.635 0 0 1-.929-1.102l-2.432-3.871z" />
        </svg>
      ),
      devtools: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z" />
          <path d="m8 16 4-4-4-4 1.414-1.414L12.828 12l-3.414 3.414z" />
        </svg>
      ),
      vscode: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
        </svg>
      ),
      surjopay: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
        </svg>
      ),
      sslcommerz: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4c1.86 0 3.41 1.28 3.86 3H8.14c.45-1.72 2-3 3.86-3zm-4 6h8v2H8v-2zm2 4h4v2h-4v-2z" />
        </svg>
      ),
      multerjs: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M14 13v-2l-4 5 4 5v-2h6v-6h-6zm-4-2v2H4v6h6v2l-4-5 4-5z" />
          <path d="M12 3c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1m0-2c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
        </svg>
      ),
      bcryptjs: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M17 8V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4v14h16V8h-3zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm4 8.723V18h-2v-2.277c-.595-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723z" />
        </svg>
      ),
      nodemailerjs: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      corsjs: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="white"
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

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {skills.map((skill, idx) => (
          <li key={idx} className="flex-shrink-0">
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="0.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(0.75rem * 0.96)`,
              }}
              borderClassName="h-16 w-16 opacity-[0.6] bg-[radial-gradient(#8463C7_35%,transparent_40%)]"
              containerClassName="!h-auto !w-auto"
              className="text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="p-1.5 flex items-center gap-1">
                {typeof getLogoUrl(skill.icon) === "string" ? (
                  <Image
                    src={getLogoUrl(skill.icon) as string}
                    alt={skill.name}
                    className="h-4 w-4 object-contain"
                    width={16}
                    height={16}
                    onError={() => handleImageError(skill.icon)}
                    unoptimized={skill.icon.includes("cdn.simpleicons.org")}
                  />
                ) : (
                  <div className="h-4 w-4">{getLogoUrl(skill.icon)}</div>
                )}
                <span className="font-medium text-xs whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
