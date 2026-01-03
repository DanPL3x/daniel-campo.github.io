import { PortfolioConfig } from './portfolio.example';

// Language-specific content
const content = {
  en: {
    personal: {
      name: "Daniel Campo Chaguendo",
      title: "Tecnologo en sistemas",
      subtitle: "Administración de Sistemas & Soporte IT",
      greeting: "Hello, I'm",
      profilePhoto: "/profile-photo.png",
      cvUrl: "/path-to-your-cv.pdf"
    },
    about: {
      description: "Me defino como un profesional impulsado por la curiosidad y la excelencia técnica. Mi enfoque se centra en el alto rendimiento y la mejora continua, destacándome tanto en la resolución analítica de problemas como en el desarrollo de código eficiente y estructurado.",
      experience: "Cuento con 2 años de experiencia en el área de soporte IT, desempeñándome como administrador de sistemas en Spectra Ingeniería.",
      highlights: [
        {
          icon: "Code2",
          title: "5+ Years",
          description: "Professional Experience"
        },
        {
          icon: "Users",
          title: "20+ Projects",
          description: "Successfully Delivered"
        },
        {
          icon: "Lightbulb",
          title: "Modern Tech",
          description: "Latest Technologies"
        },
        {
          icon: "Award",
          title: "Quality Focus",
          description: "Best Practices"
        }
      ]
    },
    projects: [
      {
        title: "Project Name",
        description: "Describe your project here. What it does, what problems it solves, and what technologies you used.",
        image: "/project-image.jpg",
        technologies: ["React", "TypeScript", "Node.js"],
        github: "https://github.com/DanPL3x/project",
        demo: "https://project-demo.vercel.app"
      }
      // Add more projects as needed
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "React", level: 0 },
            { name: "TypeScript", level: 0 },
            { name: "Next.js", level: 0 },
            { name: "Tailwind CSS", level: 0 },
            { name: "Vue.js", level: 0 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 0 },
            { name: "Python", level: 5 },
            { name: "PostgreSQL", level: 15 },
            { name: "MongoDB", level: 5 },
            { name: "GraphQL", level: 0 }
          ]
        },
        {
          title: "Tools & Others",
          skills: [
            { name: "AWS", level: 15 },
            { name: "Docker", level: 5 },
            { name: "Git", level: 15 },
            { name: "Jest", level: 0 },
            { name: "Figma", level: 0 }
          ]
        }
      ],
      technologies: [
        "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", 
        "MongoDB", "GraphQL", "Jest", "Tailwind CSS", "Next.js", "Vue.js"
      ]
    },
    meta: {
      title: "Daniel Campo Chaguendo - Tecnologo en sistemas",
      description: "Personal portfolio of Daniel Campo Chaguendo, a tecnologo en sistemas specializing in modern web technologies.",
      keywords: ["tecnologo en sistemas", "web development", "portfolio", "react", "typescript"]
    }
  },
  es: {
    personal: {
      name: "Daniel Campo Chaguendo",
      title: "'Tecnologo en sistemas'",
      subtitle: "Soporte IT",
      greeting: "Hola, soy",
      profilePhoto: "/profile-photo.png",
      cvUrl: "/path-to-your-cv.pdf"
    },
    about: {
      description: "Me defino como un profesional impulsado por la curiosidad y la excelencia técnica. Mi enfoque se centra en el alto rendimiento y la mejora continua, destacándome tanto en la resolución analítica de problemas como en el desarrollo de código eficiente y estructurado.",
      experience: "2 años",
      highlights: [
        {
          icon: "Code2",
          title: "5+ Años",
          description: "Experiencia Profesional"
        },
        {
          icon: "Users",
          title: "20+ Proyectos",
          description: "Entregados Exitosamente"
        },
        {
          icon: "Lightbulb",
          title: "Tecnología Moderna",
          description: "Últimas Tecnologías"
        },
        {
          icon: "Award",
          title: "Enfoque en Calidad",
          description: "Mejores Prácticas"
        }
      ]
    },
    projects: [
      {
        title: "Nombre del Proyecto",
        description: "Describe tu proyecto aquí. Qué hace, qué problemas resuelve y qué tecnologías usaste.",
        image: "/project-image.jpg",
        technologies: ["React", "TypeScript", "Node.js"],
        github: "https://github.com/DanPL3x/project",
        demo: "https://project-demo.vercel.app"
      }
      // Agrega más proyectos según sea necesario
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "React", level: 0 },
            { name: "TypeScript", level: 0 },
            { name: "Next.js", level: 0 },
            { name: "Tailwind CSS", level: 0 },
            { name: "Vue.js", level: 0 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 0 },
            { name: "Python", level: 5 },
            { name: "PostgreSQL", level: 15 },
            { name: "MongoDB", level: 0 },
            { name: "GraphQL", level: 0 }
          ]
        },
        {
          title: "Herramientas y Otros",
          skills: [
            { name: "AWS", level: 5 },
            { name: "Docker", level: 5 },
            { name: "Git", level: 15 },
            { name: "Jest", level: 0 },
            { name: "Figma", level: 0 }
          ]
        }
      ],
      technologies: [
        "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", 
        "MongoDB", "GraphQL", "Jest", "Tailwind CSS", "Next.js", "Vue.js"
      ]
    },
    meta: {
      title: "Daniel Campo Chaguendo - 'Tecnologo en sistemas'",
      description: "Portfolio personal de Daniel Campo Chaguendo, un 'tecnologo en sistemas' especializado en tecnologías web modernas.",
      keywords: ["'tecnologo en sistemas'", "desarrollo web", "portfolio", "react", "typescript"]
    }
  }
};

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Daniel Campo Chaguendo",
    title: "Tecnologo en sistemas",
    subtitle: "Administración de Sistemas & Soporte IT",
    greeting: "Hello, I'm",
    profilePhoto: "/profile-photo.png",
    cvUrl: "/path-to-your-cv.pdf" // Optional - update this path
  },

  contact: {
    email: "dchcampo@gmail.com",
    phone: "3127589036",
    location: "Cali, Colombia",
    social: {
      github: "https://github.com/DanPL3x",
      linkedin: "https://linkedin.com/in/daniel-campo-chaguendo-a43bb02b4",
      twitter: "https://twitter.com/DanPL3x", // Optional - update if different
      instagram: "https://instagram.com/DanPL3x" // Optional - update if different
    }
  },

  about: {
    description: "Me defino como un profesional impulsado por la curiosidad y la excelencia técnica. Mi enfoque se centra en el alto rendimiento y la mejora continua, destacándome tanto en la resolución analítica de problemas como en el desarrollo de código eficiente y estructurado.",
    experience: "Cuento con 2 años de experiencia en el área de soporte IT, desempeñándome como administrador de sistemas en Spectra Ingeniería.",
    highlights: [
      {
        icon: "Code2",
        title: "5+ Years",
        description: "Professional Experience"
      },
      {
        icon: "Users",
        title: "20+ Projects",
        description: "Successfully Delivered"
      },
      {
        icon: "Lightbulb",
        title: "Modern Tech",
        description: "Latest Technologies"
      },
      {
        icon: "Award",
        title: "Quality Focus",
        description: "Best Practices"
      }
    ]
  },

  projects: [
    {
      title: "Project Name",
      description: "Describe your project here. What it does, what problems it solves, and what technologies you used.",
      image: "/project-image.jpg",
      technologies: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/DanPL3x/project",
      demo: "https://project-demo.vercel.app"
    }
    // Add more projects as needed
  ],

  skills: {
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "React", level: 0 },
          { name: "TypeScript", level: 0 },
          { name: "Next.js", level: 0 },
          { name: "Tailwind CSS", level: 0 },
          { name: "Vue.js", level: 0 }
        ]
      },
      {
        title: "Backend",
        skills: [
          { name: "Node.js", level: 5 },
          { name: "Python", level: 5 },
          { name: "PostgreSQL", level: 15 },
          { name: "MongoDB", level: 5 },
          { name: "GraphQL", level: 0 }
        ]
      },
      {
        title: "Tools & Others",
        skills: [
          { name: "AWS", level: 5 },
          { name: "Docker", level: 2 },
          { name: "Git", level: 10 },
          { name: "Jest", level: 0 },
          { name: "Figma", level: 0 }
        ]
      }
    ],
    technologies: [
      "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", 
      "MongoDB", "GraphQL", "Jest", "Tailwind CSS", "Next.js", "Vue.js"
    ]
  },

  footer: {
    copyright: "All rights reserved.",
    builtWith: "Built with ❤️ using React & TypeScript"
  },

  meta: {
    title: "Daniel Campo Chaguendo - Tecnologo en sistemas",
    description: "Personal portfolio of Daniel Campo Chaguendo, a tecnologo en sistemas specializing in modern web technologies.",
    keywords: ["tecnologo en sistemas", "web development", "portfolio", "react", "typescript"]
  }
};

// Export the content for use in components
export { content };
