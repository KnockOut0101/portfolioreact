import { picture } from "motion/react-client";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Certifcations and Awards", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Hi, I'm a guy who's always been intrigued by tech and it's related aspects ",
      description: "Explore more to know more about me",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 min-[690px]:max-[690px]:col-span-5 lg:min-h-[60vh] sm:col-span-6 sm:row-span-5",
      imgClassName: "w-full h-full -z-0",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm a persona with varied interests, from tech to art.",
      description: "I have a various interests other than tech, let's connect over coffee?",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/Coffee.svg",
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
      className: "lg:col-span-3 md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Want to talk more with me?",
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
      title: "AR Projection of a room on phone",
      des: "Implemented an Augmented Reality projection of a room on a phone using Unity",
      img: "/MyProjects/AR_Project.jpg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 2,
      title: "Implementation of Alexnet",
      des: "A deep learning project implementing the AlexNet architecture for image path identification using PyTorch.",
      img: "/MyProjects/AlexNetDemonstration.jpg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
      id: 3,
      title: "A* Algorithm Visualizer",
      des: "Created a Unity project to visualize the A* pathfinding algorithm, showcasing its efficiency in finding optimal paths.",
      img: "/MyProjects/AStarMapNavigation.jpg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Created a FPS Game",
      des: "Created a first-person shooter game using Unity, implementing various game mechanics and features.",
      img: "/MyProjects/BoxShooter.jpg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/adrianhajdin/iphone",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Recepient of \'Applause\' award, for my contributions towards the development of internal applications and tools to improve team productivity.",
      name: "Deloitte",
      title: "Applause Award",
      picture:"/AwardsAndCertifications/Deloitte.svg",
    },
    {
      quote:
        "Got Certified for AZ-900: Microsoft Azure Fundamentals, demonstrating my foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
      name: "Microsoft",
      title: "AZ-900: Microsoft Azure Fundamentals",
      picture:"/AwardsAndCertifications/Microsoft.svg"
    },
    {
      quote:
        "Leading Safe Certified, demonstrating my knowledge of the Scaled Agile Framework (SAFe) and its principles for scaling agile practices across large enterprises.",
      name: "Scaled Agile",
      title: "Leading Safe Certified",
      picture:"/AwardsAndCertifications/SAFe.svg"
    },
    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    // },
    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    // },
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
      title: "Software Engineer - Intern",
      desc: "Helped in developing internal applications and tools to improve team productivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Software Developer - .Net Angular",
      desc: "Wokred on 6 different projects, enhancing my skills in .NET and Angular development.",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "IOT Raspberry Pi Developer",
      desc: "Created an IoT project using Raspberry Pi, integrating sensors and actuators for real-time data processing.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Software Engineer - Frontend",
      desc: "Created a responsive web application using Angular and Tailwind CSS, focusing on user experience and performance.",
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