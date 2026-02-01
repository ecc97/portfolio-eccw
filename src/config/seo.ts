export const SEO_CONFIG = {
  site: "https://edwincarmona.com",
  title: "Edwin Carmona | Desarrollador Frontend",
  description: "Portafolio de Edwin Carmona - Desarrollador Frontend especializado en React, Astro y tecnologías modernas. Transformo ideas en experiencias web interactivas.",
  author: "Edwin Carmona",
  email: "ecc9703@gmail.com",
  keywords: [
    "desarrollador frontend",
    "React",
    "Astro",
    "JavaScript",
    "TypeScript",
    "web development",
    "UI/UX",
    "portfolio"
  ],
  social: {
    github: "https://github.com/edwincarmona",
    linkedin: "https://linkedin.com/in/edwincarmona",
    twitter: "https://twitter.com/edwincarmona"
  },
  ogImage: "/og-image.png",
  locale: "es_ES"
};

export function generateMetaTags(page: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) {
  return {
    title: page.title || SEO_CONFIG.title,
    description: page.description || SEO_CONFIG.description,
    image: page.image || SEO_CONFIG.ogImage,
    url: page.url || SEO_CONFIG.site
  };
}
