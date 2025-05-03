export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Education", link: "#education" },
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
    title: "FeedMe - Personalized Meal Planning & Delivery 🍱",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/data/1.jpg",
    detailsImage: "/data/b2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
    github: "https://github.com/username/solar-system-3d",
    githubBackend: "https://github.com/username/solar-system-3d-api",
    fullDescription:
      "FeedMe is a Meal Planning & Delivery Web Application that allows users to personalize their meal plans and schedule deliveries based on their dietary preferences. Customers can browse available meal options, select meals based on their preferences, and schedule delivery. Meal providers can manage menus, respond to customer orders, and track deliveries.",

    features: [
      "Secure authentication with email/phone and password using JWT and bcrypt",
      "Separate dashboards for customers and meal providers with role-based access",
      "Customers can browse, search, and customize meals based on dietary preferences",
      "Meal providers can post, update, and manage detailed meal menus and orders",
      "Real-time email notifications for order updates and confirmations",
      "Delivery Tracking System",
      "Advanced search and match system based on cuisine, diet type, and availability",
      "Responsive UI built with React, Next.js, Tailwind CSS, and TypeScript",
      "State management with Redux and secure image uploads via Cloudinary",
    ],
    challenges:
      "Ensuring secure, role-based access control and managing real-time data between customers and meal providers was complex. Integrating customizable meal options while maintaining a responsive and intuitive UI required careful planning and modular component design.",
  },
  {
    id: 2,
    title: "Velocity Car Shop",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/data/2.jpg",
    detailsImage: "/data/b3.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
    github: "https://github.com/username/yoom-app",
    githubBackend: "https://github.com/username/yoom-app-backend",
    fullDescription:
      "A modern, responsive e-commerce car shop built with React, TypeScript, and Redux Toolkit. Velocity Car Shop offers a smooth experience for customers to browse, search, and purchase cars while providing a robust admin dashboard for managing products, users, and orders with role-based access",

    features: [
      "JWT-based secure user authentication with role-based access (user/admin)",
      "Responsive public pages: Home, All Products, Product Details, and About Us",
      "Advanced product filtering and real-time search by brand, model, price, and stock",
      "Private checkout page with SurjoPay integration and order validation",
      "User dashboard to view orders, track statuses, and update profiles",
      "Admin dashboard for full CRUD control over products, users, and orders",
      "Optional order tracking with progress bar and delivery estimates",
      "Optimized UI/UX with error handling, loading states, and toast notifications",
    ],
    challenges:
      "Implementing a scalable role-based dashboard system while maintaining clean routing and component separation was challenging. Ensuring smooth real-time updates in order and product management, along with securing user data and tokens, required careful state management with Redux Toolkit and RTK Query.",
  },
  {
    id: 3,
    title: "Contest Creation Platform",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/data/4.png",
    detailsImage: "/data/b4.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
    github: "https://github.com/username/ai-image-saas",
    githubBackend: "https://github.com/username/ai-image-saas-api",
    fullDescription:
      "This SaaS application combines the creative power of AI with intuitive design tools similar to Canva. Users can generate and edit images using AI, with a flexible payment and credits system. The application features user authentication, subscription management, and a dashboard for monitoring usage. I implemented integrations with modern AI image generation APIs and built a robust payment processing system.",
    features: [
      "User authentication and secure login to access and participate in contests",
      "CRUD operations for contests (Create, Read, Update, Delete) with admin access",
      "Users can join contests by making payments (payment gateway integration)",
      "Real-time contest countdown clock that updates until the contest ends",
      "Contest details page showing rules, time remaining, entry fee, and participants",
      "Responsive UI built with React for smooth participation experience",
      "Backend APIs built with Node.js and Express for managing users and contests",
      "MongoDB used for storing contest data, user info, and payment records",
    ],
    challenges:
      "Integrating a secure payment system while validating participation logic was complex. Handling dynamic countdown timers and syncing frontend timers with server-end contest expiry required precise time management and edge-case handling for expired or ongoing contests.",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/data/3.jpg",
    detailsImage: "/data/b1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    github: "https://github.com/username/apple-iphone-3d",
    githubBackend: "https://github.com/username/apple-iphone-3d-server",
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
      "Collaborating with Jabed was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jabed's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jabed is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Jabed was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jabed's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jabed is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Jabed was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jabed's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jabed is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Jabed was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jabed's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jabed is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Jabed was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jabed's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jabed is the ideal partner.",
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
    link: "https://github.com/yourusername",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/yourusername",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/yourusername",
  },
  {
    id: 4,
    img: "/instagram.svg",
    link: "https://instagram.com/yourusername",
  },
  {
    id: 5,
    img: "/fb.svg",
    link: "https://facebook.com/yourusername",
  },
];

export const education = [
  {
    id: 1,
    institution: "Green University of Bangladesh",
    degree: "Bachelor of Science in Computer Science & Engineering (4th Year)",
    duration: "2022 - Present",
    description:
      "Focusing on software development, algorithms, and data structures with a minor in AI.",
    thumbnail: "/Green_University_of_Bangladesh_logo.svg",
  },
  {
    id: 2,
    institution: "Programming Hero",
    degree: "Next Level Web Development Course",
    duration: "2025 - present",
    description:
      "Completed the complete web development Level 2 course with Programming Hero.",
    thumbnail: "/programming-hero.png",
  },
  {
    id: 3,
    institution: "Programming Hero",
    degree: "Complete Web Development Course",
    duration: "2023 - 2024",
    description:
      "Completed the complete web development Level 1 course with Programming Hero.",
    thumbnail: "/programming-hero.png",
  },
];
