import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ["nl", "en"],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "cookie"],
      caches: ["localStorage"],
    },
    resources: {
      nl: {
        translation: {
          About: "Over",
          iam: "Ik ben Piet-Hein Schouten,",
          mywholelife:
            "Ik ben gepassioneerd door technologie en het bouwen van digitale oplossingen die echt werken. Met een achtergrond in full stack development combineer ik creativiteit, probleemoplossend denken en een ondernemende mindset in elk project.",
          studyweb:
            "Ik studeer HBO-ICT aan de Hogeschool van Amsterdam en bouw naast mijn studie eigen producten en aan projecten voor opdrachtgevers.",
          experience: "Ervaring",
          hboict: "HBO-ICT",
          hboictYear: "2026 - heden",
          hboictDescription:
            "Eerstejaars HBO-ICT student aan de Hogeschool van Amsterdam. Ik werk aan projecten met JavaScript, Python, Flask, Docker en React. Naast mijn studie bouw ik eigen producten en werk ik aan opdrachten voor opdrachtgevers.",
          entrepeneurship: "Ondernemerschap & Marketing",
          propaedeuticDiploma:
            "Propedeuse Ondernemerschap & Retail Management behaald aan Avans Hogeschool. Hier legde ik de basis in ondernemerschap, marketing en bedrijfsvoering.",
          wordpress: "WordPress & Webdesign",
          trendGigant:
            "Mede-oprichter van TrendGigant, een trendy cadeautjes webshop waar ik leerde om een webshop te runnen en te werken met Wordpress en Woocommerce",
          solvware:
            "Bij Solvware B.V. werkte ik aan het bouwen en optimaliseren van WordPress-websites, gecombineerd met online marketingactiviteiten.",
          ironhack:
            "Ik volgede een intensieve bootcamp gevolgd bij Ironhack (9 weken) in Barcelona met focus op Front-end (HTML, CSS, React) en Back-end (Node.js, MongoDB).",
          create: "Creative Technology",
          creativeTech:
            "Korte periode bij de gezamenlijke opleiding van de VU en Universiteit Twente. Versterkte mijn interesse in de combinatie van technologie, design en creativiteit.",
          iamPietHein: "Ik ben Piet-Hein,",
          personalStatement:
            "Gefocust op het bouwen van moderne, schaalbare websites en applicaties met creativiteit, gebruiksvriendelijkheid en een duidelijk doel",
          aboutMe: "Over mij",
          projects: "Projecten",
          address: "Adres",
          countryCity: "Nederland - Amsterdam",
          workTogether: "Laten we samenwerken!",
          workTogetherText:
            "Ik help je graag bij het ontwikkelen van digitale oplossingen. Of je nu een app, website of andere software zoekt. Laten we het bouwen!",
          fullName: "Volledige naam",
          email: "E-mail",
          companyOptional: "Bedrijf (optioneel)",
          phoneOptional: "Telefoonnummer (optioneel)",
          message: "Bericht",
          sendMessage: "Verstuur bericht",
          description: "Beschrijving",
        },
      },
      en: {
        translation: {
          About: "About",
          iam: "I am Piet-Hein Schouten,",
          mywholelife:
            "I'm passionate about technology and building digital solutions that actually work. With a background in full stack development I combine creativity, problem solving and an entrepreneurial mindset in every project.",
          studyweb:
            "I study HBO-ICT at the Hogeschool van Amsterdam and alongside my studies I build my own products and work on projects for clients.",
          experience: "Experience",
          hboict: "HBO-ICT",
          hboictYear: "2026 - present",
          hboictDescription:
            "First-year HBO-ICT student at the Hogeschool van Amsterdam. I work on projects using JavaScript, Python, Flask, Docker and React. Alongside my studies I build my own products and take on assignments for clients.",
          entrepeneurship: "Entrepreneurship & Marketing",
          propaedeuticDiploma:
            "Obtained my propaedeutic diploma in Entrepreneurship & Retail Management at Avans University of Applied Sciences. Here I built a strong foundation in entrepreneurship, marketing, and business management.",
          wordpress: "WordPress & Web Design",
          trendGigant:
            "Co-founder of TrendGigant, a trendy gift webshop where I learned how to run a webshop and work with WordPress and WooCommerce.",
          solvware:
            "At Solvware B.V., I worked on building and optimising WordPress websites, combined with online marketing activities.",
          ironhack:
            "I followed an intensive 9-week bootcamp at Ironhack in Barcelona, focusing on Front-end (HTML, CSS, React) and Back-end (Node.js, MongoDB).",
          create: "Creative Technology",
          creativeTech:
            "A short period at the joint programme of VU Amsterdam and University of Twente. Strengthened my interest in the combination of technology, design and creativity.",
          iamPietHein: "I'm Piet-Hein,",
          personalStatement:
            "Focused on building modern, scalable websites and applications with creativity, usability, and a clear purpose.",
          aboutMe: "About Me",
          projects: "Projects",
          address: "Address",
          countryCity: "The Netherlands - Amsterdam",
          workTogether: "Let's work together!",
          workTogetherText:
            "I'd love to help you develop digital solutions. Whether you need an app, website, or other software. Let's build it together!",
          fullName: "Full Name",
          email: "Email",
          companyOptional: "Company (optional)",
          phoneOptional: "Phone Number (optional)",
          message: "Message",
          sendMessage: "Send Message",
          description: "Description",
        },
      },
    },
  });

export default i18n;
