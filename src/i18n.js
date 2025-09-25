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
            "Ik heb altijd al een passie gehad voor technologie en software. Tijdens mijn studie Entrepreneurship & Retail Management ontdekte ik hoe graag ik mijn ondernemende denkwijze combineer met het bouwen van weboplossingen. Die drive bracht me ertoe een full stack development bootcamp te volgen, en inmiddels studeer ik Creative Technology, waar ik mijn vaardigheden verder ontwikkel en ideeën tot leven breng.",
          experience: "Ervaring",
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
            "Op dit moment studeer ik Creative Technology, een gezamenlijke opleiding van de Vrije Universiteit in Amsterdam en de Universiteit Twente. Ik wil mezelf tijdens deze opleiding blijven ontwikkelen als developer, meer leren over alle vormen van technologie en werken aan projecten die me uitdagen. ",
          iamPietHein: "Ik ben Piet-Hein,",
          personalStatement:
            "Gefocust op het bouwen van moderne, schaalbare websites en applicaties met creativiteit, gebruiksvriendelijkheid en een duidelijk doel",
          aboutMe: "Over mij",
          projects: "Projecten",
          address: "Adres",
          countryCity: "Nederland - Amsterdam",
          workTogether: "Laten we samenwerken!",
          workTogetherText:
            "Ik help je graag bij het ontwikkelen van digitale oplossingen. Of je nu een app, website of andere software zoekt – laten we het bouwen!",
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
            "I’ve always been passionate about technology and software. While studying Entrepreneurship & Retail Management, I discovered how much I enjoy combining entrepreneurial thinking with building web solutions. That drive led me to complete a full stack development bootcamp, and I am now studying Creative Technology where I continue to develop my skills and bring ideas to life.",
          experience: "Experience",
          entrepeneurship: "Entrepreneurship & Marketing",
          propaedeuticDiploma:
            "Obtained my propaedeutic diploma in Entrepreneurship & Retail Management at Avans University of Applied Sciences. Here I built a strong foundation in entrepreneurship, marketing, and business management.",
          wordpress: "WordPress & Web Design",
          trendGigant:
            "Co-founder of TrendGigant, a trendy gift webshop where I learned how to run a webshop and work with WordPress and WooCommerce.",
          solvware:
            "At Solvware B.V., I worked on building and optimizing WordPress websites, combined with online marketing activities.",
          ironhack:
            "I followed an intensive 9-week bootcamp at Ironhack in Barcelona, focusing on Front-end (HTML, CSS, React) and Back-end (Node.js, MongoDB).",
          create: "Creative Technology",
          creativeTech:
            "Currently I'm studying Creative Technology, a shared program by the Vrije Universiteit in Amsterdam and the University of Twente. I’m eager to keep growing as a developer, learning more about technology in all its forms and working on projects that challenge me. ",
          iamPietHein: "I’m Piet-Hein,",
          personalStatement:
            "Focused on building modern, scalable websites and applications with creativity, usability, and a clear purpose.",
          aboutMe: "About Me",
          projects: "Projects",
          address: "Address",
          countryCity: "The Netherlands - Amsterdam",
          workTogether: "Let’s work together!",
          workTogetherText:
            "I’d love to help you develop digital solutions. Whether you need an app, website, or other software. Let’s build it together!",
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
