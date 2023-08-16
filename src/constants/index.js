import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    java,
    nextjs,
    figma,
    docker,
    meta,
    starbucks,
    teach,
    tute,
    star,
    tesla,
    shopify,
    carrent,
    foodsite,
    digitalmarket,
    metaverse,
    threads,
    sound,
    chatgpt,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "nextjs",
      icon: nextjs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "tailwind",
      icon: tailwind,
    },
    {
      name: "java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "System Engineer",
      company_name: " Space Technology and Aeronautical Rocketry",
      icon: star,
      iconBg: "#383E56",
      date: "May 2022 - July 2022",
      points: [
        "Innovatively designed Dipole Antenna for CubeSat utilizing Arduino Uno and Blynk IoT on Proteus 8, showcasing prowess.",
        "Skill-fully utilized Python functions to program the Arduino Uno, thus facilitating seamless communication with Blynk IOT.",
        "Integrating remote control capabilities through Blynk IoT, thereby optimizing control mechanisms via a mobile application.",
        "Establishment of a robust operational framework, thereby guarantee the successful functional execution of the designed.",
      ],
    },
    {
      title: "MERN Stack Developer",
      company_name: "TuteDude",
      icon: tute,
      iconBg: "#E6DEDD",
      date: "June 2023 - Aug 2023",
      points: [
        "Crafted a food delivery website through HTML, CSS, Bootstrap, and   jQuery, enhancing user engagement and experience.",
        "Innovatively developed a To-Do list: EJS, CSS, jQuery evolved into advanced version with React, MongoDB via Mongoose.",
        "Used React and MongoDB to create Keeper website that store and delete notes, highlighting application of full-stack skills.",
        "Crafted weather website it shows accurate info, integrating external data via weather API for comprehensive information.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "TeachNook",
      icon: teach,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Diverse Web Skills: Proficient in HTML, JavaScript, Bootstrap, jQuery, React, CSS, and more, hands-on front-end expertise.",
        "Security Integration: Implemented CSS, authentication, and security techniques for robust user-friendly experiences.",
        "UI Proficiency: Mastered HTML, JavaScript, and CSS for engaging interfaces, while exploring authentication and security.",
        "Development: Developed “Sound-Hub” Ecommerce site, and completed “Social-Media-Marketing” projects using techs. ",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typecript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/jaydeeprana049/Car_Hub",
    },
    {
      name: "Healthy Food Site",
      description:
      "Indulge in a delightful journey to wellness with our diverse selection of wholesome, delicious, and nourishing recipes. Embrace a healthier lifestyle today!",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "jquery",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: foodsite,
      source_code_link: "https://github.com/jaydeeprana049/Food_App",
    },
    {
      name: "E-commerce",
      description:
      "Sound-Hub, an engaging ecommerce website that provides a seamless shopping experience for audio enthusiasts. Users can easily browse and purchase a variety of headphones, earbuds, and related products.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: sound,
      source_code_link: "https://github.com/jaydeeprana049/Sound_Hub",
    },
    {
      name: "Metaverse MaDNeSS",
      description:
      "Introducing my Next.js masterpiece: a boundary-pushing Metaverse frontend. Immerse yourself in a world of limitless potential, where Next.js expertise meets the forefront of digital innovation.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: metaverse,
      source_code_link: "https://github.com/jaydeeprana049/Metaverse",
    },
    {
      name: "Chat-GPT clone",
      description:
      "Discover a conversational marvel with my ChatGPT clone website. Seamlessly mimicking human-like interactions, this platform showcases my skill in AI integration, enabling dynamic conversations and personalized experiences.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: chatgpt,
      source_code_link: "https://github.com/jaydeeprana049/Metaverse",
    },
    {
      name: "Threads-Clone",
      description:
      "Experience dynamic discussions with my Next.js Threads clone. Elevating online conversations, this project exemplifies my proficiency in crafting real-time, engaging platforms that foster meaningful interactions.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: threads,
      source_code_link: "https://github.com/jaydeeprana049/Threads",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };