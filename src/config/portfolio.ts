import { PortfolioConfig } from './portfolio.example';

// Language-specific content
const content = {
  en: {
    personal: {
      name: "Daniel",
      title: "Ingeniero en sistemas",
      subtitle: "Danielch",
      greeting: "Hello, I'm",
      profilePhoto: "/profile-photo.png",
      cvUrl: "/path-to-your-cv.pdf"
    },
    about: {
      description: "",
      experience: "",
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
        github: "https://github.com/Daniel ch/project",
        demo: "https://project-demo.vercel.app"
      }
      // Add more projects as needed
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "React", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 88 },
            { name: "Vue.js", level: 75 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 88 },
            { name: "Python", level: 82 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "GraphQL", level: 78 }
          ]
        },
        {
          title: "Tools & Others",
          skills: [
            { name: "AWS", level: 85 },
            { name: "Docker", level: 82 },
            { name: "Git", level: 92 },
            { name: "Jest", level: 88 },
            { name: "Figma", level: 75 }
          ]
        }
      ],
      technologies: [
        "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", 
        "MongoDB", "GraphQL", "Jest", "Tailwind CSS", "Next.js", "Vue.js"
      ]
    },
    meta: {
      title: "Daniel - Ingeniero en sistemas",
      description: "Personal portfolio of Daniel, a ingeniero en sistemas specializing in modern web technologies.",
      keywords: ["ingeniero en sistemas", "web development", "portfolio", "react", "typescript"]
    }
  },
  es: {
    personal: {
      name: "Daniel",
      title: "Ingeniero en sistemas",
      subtitle: "Soporte IT",
      greeting: "Hola, soy",
      profilePhoto: "/profile-photo.png",
      cvUrl: "/path-to-your-cv.pdf"
    },
    about: {
      description: "",
      experience: "",
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
        github: "https://github.com/Daniel ch/project",
        demo: "https://project-demo.vercel.app"
      }
      // Agrega más proyectos según sea necesario
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "React", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 88 },
            { name: "Vue.js", level: 75 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 88 },
            { name: "Python", level: 82 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "GraphQL", level: 78 }
          ]
        },
        {
          title: "Herramientas y Otros",
          skills: [
            { name: "AWS", level: 85 },
            { name: "Docker", level: 82 },
            { name: "Git", level: 92 },
            { name: "Jest", level: 88 },
            { name: "Figma", level: 75 }
          ]
        }
      ],
      technologies: [
        "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", 
        "MongoDB", "GraphQL", "Jest", "Tailwind CSS", "Next.js", "Vue.js"
      ]
    },
    meta: {
      title: "Daniel - Ingeniero en sistemas",
      description: "Portfolio personal de Daniel, un ingeniero en sistemas especializado en tecnologías web modernas.",
      keywords: ["ingeniero en sistemas", "desarrollo web", "portfolio", "react", "typescript"]
    }
  }
};

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Daniel",
    title: "Ingeniero en sistemas",
    subtitle: "Danielch",
    greeting: "Hello, I'm",
    profilePhoto: "/profile-photo.png",
    cvUrl: "/path-to-your-cv.pdf" // Optional - update this path
  },

  contact: {
    email: "dchcampo@gmail.com",
    phone: "3127589036",
    location: "cali,colombia",
    social: {
      github: "https://github.com/Daniel ch",
      linkedin: "https://linkedin.com/in/Daniel Campo Chaguendo",
      twitter: "https://twitter.com/Daniel ch", // Optional - update if different
      instagram: "https://instagram.com/Daniel ch" // Optional - update if different
    }
  },

  about: {
    description: "",
    experience: "",
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
      github: "https://github.com/Daniel ch/project",
      demo: "https://project-demo.vercel.app"
    }
    // Add more projects as needed
  ],

  skills: {
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "React", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "Next.js", level: 85 },
          { name: "Tailwind CSS", level: 88 },
          { name: "Vue.js", level: 75 }
        ]
      },
      {
        title: "Backend",
        skills: [
          { name: "Node.js", level: 88 },
          { name: "Python", level: 82 },
          { name: "PostgreSQL", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "GraphQL", level: 78 }
        ]
      },
      {
        title: "Tools & Others",
        skills: [
          { name: "AWS", level: 85 },
          { name: "Docker", level: 82 },
          { name: "Git", level: 92 },
          { name: "Jest", level: 88 },
          { name: "Figma", level: 75 }
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
    title: "Daniel - Ingeniero en sistemas",
    description: "Personal portfolio of Daniel, a ingeniero en sistemas specializing in modern web technologies.",
    keywords: ["ingeniero en sistemas", "web development", "portfolio", "react", "typescript"]
  }
};

// Export the content for use in components
export { content };
