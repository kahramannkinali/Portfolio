/* 
  PORTFOLIO DATA FILE - DARK THEME EDITION
  ----------------------------------------
  Update this file to change content. 
  No HTML knowledge required.
*/
const portfolioData = {
  // --- General Info ---
  name: "Kahraman KINALI",
  role: "Electrical & Electronics Engineering Student",
  location: "İstanbul, Türkiye / Turkey",
  // --- Hero Section ---
  hero: {
    headline: "Engineering Focuses",
    subheadline: "An EEE student with a focus on IoT, robotics and sustainable technology/energy.",
    ctaText: "View My Projects",
    ctaLink: "#projects",
    profileImage: "./Profil.jpg"
  },
  // --- About Section ---
  about: {
    title: "About Me",
    description: `
      I am an Electrical and Electronics Engineering student passionate about robotics and efficiency. 
      My academic background has provided me with a strong foundation in circuit analysis and coding in Java, while my personal projects have pushed me to learn about many different topics like sustainable energy, infrastructure and grids. I am also capable of designing in 3D since middle school.
      I am interested in topics like Sustainability, Renewable Energy and IoT.
    `,
    skills: ["Java", "3D Design", "IoT"]
  },
  // --- Projects Section ---
  projects: [
    {
      title: "Optifarm",
      category: "Startup / AI & IoT",
      description: "My two friends and I had a chance to develop a startup idea in an event our university hosted. In that event, I designed a website meant to analyse the weather, soil and terrain of a specific area. With this input, the AI would give advice that optimises the yield from the farm.",
      technologies: ["Python", "IoT Sensors", "Machine Learning", "Data Analytics"],
      link: "https://kahramannkinali.github.io/OPTIFARM/"
    },
    {
      title: "Parts&Prints",
      category: "Solo Project / 3D Printing",
      description: "Parts&Prints is my solo 3D printing service. If you need a custom part for a specific task, I will design it, print it and send it to you. Or if you found a model online and want it in real life but don't own a 3D printer, I can simply print the existing file for you.",
      technologies: ["3D Design", "3D Manufacturing"],
      link: "https://kahramannkinali.github.io/PartsandPrints/" 
    }
  ],
  // --- CV / Resume Section ---
  cv: {
    title: "Curriculum Vitae",
    text: "Interested in my full professional background? Download my resume to see my education, certifications, and detailed experience.",
    buttonText: "Download Resume",
    fileURL: "./Kahraman_KINALI_CV.pdf"
  },
  // --- Contact Section ---
  contact: {
    title: "Get In Touch",
    description: "I am currently open to internships and collaborative projects. Feel free to reach out via email or connect on professional platforms.",
    email: "kinalik@mef.edu", 
    // --- Personal Contacts (Revealed via Easter Egg) ---
    phone: "+90 532 301 32 93",
    instagram: "https://instagram.com/yourhandle",
    social: {
      linkedin: "https://www.linkedin.com/in/kahraman-kinali/",
      github: "https://github.com/kahramannkinali",
      twitter: "" 
    }
  },
  // --- Footer ---
  footer: {
    text: "© 2026 Kahraman KINALI. Built with precision."
  }
};
