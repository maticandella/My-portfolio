import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Matías Candella — Desarrollador Web",
  author: "Matías Candella",
  description:
    "",
  lang: "es",
  siteLogo: "/maticandella.jpg",
  navLinks: [
    // { text: "Experiencia", href: "#experience" },
    { text: "Proyectos", href: "#projects" },
    { text: "Sobre mí", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/matiascandella/" },
    { text: "Github", href: "https://github.com/maticandella" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://maticandella-portfolio.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Matías Candella",
    specialty: "Desarrollador Web",
    summary:
      "Aquí va una descripción personal.",
    email: "matiascandella@hotmail.com",
  },
  experience: [
    // {
    //   company: "Zalmart",
    //   position: "Lead Android Developer",
    //   startDate: "May 2018",
    //   endDate: "Sept 2020",
    //   summary: [
    //     "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
    //     "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
    //     "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
    //   ],
    // }
  ],
  projects: [
    {
      name: "EditoriApp",
      summary: "Gestor para Editorial de Libros. Con Panel Administrativo y simulación de Carrito de Compras.",
      linkPreview: "https://editoriapp.vercel.app/",
      linkSource: "https://github.com/maticandella/EditoriAPP",
      linkApis: "https://editorial-api.vercel.app/api/docs/",
      image: "/mockup4.jpg",
      technologies: ["Angular", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "Sequelize", "Swagger"]  
    },
    // {
    //   name: "APIS para EditoriApp",
    //   summary: "Permite gestionar las operaciones del lado del servidor para una Editorial de Libros.",
    //   linkPreview: "https://editorial-api.vercel.app/api/docs/",
    //   linkSource: "https://github.com/maticandella/Editorial-API",
    //   image: "/shopify-clon.png",
    //   technologies: ["Node.js", "PostgreSQL", "Sequelize", "Swagger"]  
    // },
  ],
  about: {
    description: `
      Hola, soy Matías Candella, desarrollador web con un enfoque en la mejora continua, tanto a nivel personal como profesional. Disfruto trabajar en equipo, compartiendo conocimientos 
      y aprendiendo de los demás.

      Siempre busco desarrollar soluciones eficientes, seguras y escalables, haciendo mucho foco en el rendimiento y la usabilidad.
      
      Me considero un buen compañero, dispuesto a ayudar y a consultar cuando es necesario. Mi motivación es superar desafíos y encontrar nuevas formas de combinar creatividad y tecnología para ofrecer productos de calidad.
    `,
    image: "/maticandella.jpg",
  },
};

// #5755ff
