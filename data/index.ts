export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Journey", link: "#journey" },
  { name: "Projects", link: "#projects" },
  { name: "Blogs", link: "#blogs" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
    github: "https://github.com/username/solar-system-3d",
    fullDescription:
      "This project is an interactive 3D simulation of our solar system built with Three.js and React. Users can explore the planets in detail, learning about their characteristics and features. The application features realistic textures, orbital mechanics, and informative data about each celestial body. I implemented smooth camera transitions and interactive controls to create an engaging educational experience.",
    features: [
      "Realistic 3D planet models with accurate textures",
      "Interactive orbital paths and planet rotation",
      "Detailed information panels for each planet",
      "Smooth camera transitions and zoom functionality",
      "Responsive design for various screen sizes",
    ],
    challenges:
      "Implementing accurate orbital mechanics while maintaining performance was challenging. I had to optimize the 3D rendering process and use level of detail techniques to ensure smooth performance across different devices.",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
    github: "https://github.com/username/yoom-app",
    fullDescription:
      "Yoom is a modern video conferencing application built with Next.js and Stream API. It offers a seamless and intuitive interface for users to connect with colleagues and friends. The app features high-quality video and audio, screen sharing capabilities, chat functionality, and meeting scheduling. I focused on creating a clean, user-friendly interface that makes video conferencing accessible to everyone.",
    features: [
      "High-quality video and audio streaming",
      "Screen sharing and presentation mode",
      "In-meeting chat and reactions",
      "Meeting scheduling and calendar integration",
      "Recording functionality and cloud storage",
    ],
    challenges:
      "Ensuring real-time communication with minimal latency across different network conditions was a significant challenge. I implemented adaptive streaming quality and optimized the WebRTC connection process to create a reliable experience.",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
    github: "https://github.com/username/ai-image-saas",
    fullDescription:
      "This SaaS application combines the creative power of AI with intuitive design tools similar to Canva. Users can generate and edit images using AI, with a flexible payment and credits system. The application features user authentication, subscription management, and a dashboard for monitoring usage. I implemented integrations with modern AI image generation APIs and built a robust payment processing system.",
    features: [
      "AI-powered image generation and editing",
      "Drag-and-drop design interface",
      "Template library and asset management",
      "Subscription tiers and pay-as-you-go options",
      "Usage analytics and dashboard",
    ],
    challenges:
      "Balancing the computational requirements of AI processing with responsive user experience was challenging. I implemented background processing queues and optimized the frontend to provide real-time feedback while AI operations run.",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    github: "https://github.com/username/apple-iphone-3d",
    fullDescription:
      "This project is a recreation of Apple's iPhone 15 Pro website, featuring stunning animations and 3D effects. I used GSAP for smooth, timeline-based animations and Three.js for interactive 3D models. The website showcases the iPhone from multiple angles with animated transitions and feature highlights. I paid special attention to performance optimization to ensure smooth scrolling and transitions even with complex 3D elements.",
    features: [
      "Realistic 3D iPhone model with interactive rotation",
      "Scroll-triggered animations and reveals",
      "Feature showcase with animated transitions",
      "Color selection with real-time 3D model updates",
      "Responsive design that adapts to all screen sizes",
    ],
    challenges:
      "Creating smooth transitions between complex 3D scenes while maintaining high performance was difficult. I implemented techniques like model instancing, texture compression, and progressive loading to optimize the experience.",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const blogPosts = [
  {
    slug: "mastering-react-performance",
    quote:
      "Learn how to identify and fix performance bottlenecks in your React applications using profiling tools, memoization, and code-splitting techniques for optimal user experience.",
    name: "Mastering React Performance Optimization",
    title: "June 15, 2023",
    image: "/images/react-performance.webp",
    tag: "React",
    author: "Md Jabed Hasan",
    authorRole: "MERN stack developer",
    authorImage: "/profile.svg",
  },
  {
    slug: "building-accessible-web-applications",
    quote:
      "A comprehensive guide to creating inclusive web experiences that work for everyone, covering ARIA attributes, keyboard navigation, and screen reader compatibility.",
    name: "Building Accessible Web Applications",
    title: "May 22, 2023",
    image: "/images/accessibility-web-application.webp",
    tag: "Accessibility",
    author: "Md Jabed Hasan",
    authorRole: "MERN stack developer",
    authorImage: "/profile.svg",
  },
  {
    slug: "future-of-frontend-development",
    quote:
      "Exploring emerging trends like AI-assisted coding, Web Components, and micro-frontends that are shaping the future of web development and what skills to learn.",
    name: "The Future of Frontend Development",
    title: "April 10, 2023",
    image: "/images/Future-of-Frontend-Development.webp",
    tag: "Frontend",
    author: "Md Jabed Hasan",
    authorRole: "MERN stack developer",
    authorImage: "/profile.svg",
  },
  {
    slug: "css-to-tailwind-journey",
    quote:
      "How I transitioned from writing custom CSS to embracing utility-first frameworks and the significant productivity benefits I've experienced in my development workflow.",
    name: "From CSS to Tailwind: My Journey",
    title: "March 5, 2023",
    image: "/images/From-CSS-to-Tailwind-My-Journey.webp",
    tag: "CSS",
    author: "Md Jabed Hasan",
    authorRole: "MERN stack developer",
    authorImage: "/profile.svg",
  },
  {
    slug: "building-nextjs-fullstack-app",
    quote:
      "A step-by-step tutorial on creating a modern web application with server components, data fetching, and authentication using the latest Next.js features.",
    name: "Building a Full-Stack App with Next.js 14",
    title: "February 18, 2023",
    image: "/images/Building-a-Full-Stack-App-with-Next.js-14.jpg",
    tag: "Next.js",
    author: "Md Jabed Hasan",
    authorRole: "MERN stack developer",
    authorImage: "/profile.svg",
  },
  {
    slug: "sql-vs-nosql-database-choice",
    quote:
      "An exploration of SQL vs NoSQL databases, their key differences, and how to choose the right one for your specific application needs and use cases.",
    name: "SQL vs NoSQL: Choosing the Right Database",
    title: "January 30, 2023",
    image: "/images/sql-vs-nosql.jpg",
    tag: "Databases",
    author: "Md Jabed Hasan",
    authorRole: "MERN stack developer",
    authorImage: "/profile.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
