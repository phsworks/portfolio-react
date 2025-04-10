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
            "Ik ben altijd gepassioneerd geweest over technologie en software. Tijdens het volgen van de studie Ondernemerschap & Retail Management kwam ik erachter dat ik me echt hierop wilde focussen. Daarom besloot ik te stoppen met die opleiding en ben ik na het afronden van een full-stack development bootcamp gepassioneerd om een betere developer te worden.",
          interestedin:
            "Ik werk graag aan projecten die het dagelijks leven verbeteren, of het nu gaat om websites, webapps, games of andere creatieve projecten. Ik combineer technische kennis met een scherp oog voor design en gebruiksvriendelijkheid.",
          experience: "Ervaring",
          entrepeneurship: "Ondernemerschap & Marketing",
          propaedeuticDiploma:
            "Propedeuse Ondernemerschap & Retail Management behaald aan Avans Hogeschool. Hier legde ik de basis in ondernemerschap, marketing en bedrijfsvoering.",
          internshipExperience:
            "Werkervaring opgedaan in marktonderzoek en digitale marketing bij Blue Talents en als marketeer bij Recruit a Student.",
          wordpress: "Ervaring met WordPress & Webdesign",
          trendGigant:
            "Mede-oprichter van TrendGigant, een trendy cadeautjes webshop waar ik leerde om een webshop te runnen en te werken met Wordpress en Woocommerce",
          solvware:
            "Bij Solvware B.V. werkte ik aan het bouwen en optimaliseren van WordPress-websites, gecombineerd met online marketingactiviteiten.",
          ironhack:
            "Intensieve bootcamp gevolgd bij Ironhack (9 weken) met focus op Front-end (HTML, CSS, React) en Back-end (Node.js, MongoDB).",
          future: "Toekomstvisie",
          lookingAhead:
            "Ik wil blijven groeien en mezelf uitdagen met het leren van nieuwe technologieën en het bouwen van nog meer mooie digitale producten",
          iamPietHein: "Ik ben Piet-Hein,",
          personalStatement:
            "Gefocust op het bouwen van moderne, schaalbare websites en applicaties met creativiteit, gebruiksvriendelijkheid en een duidelijk doel",
          aboutMe: "Over mij",
          projects: "Projecten",
          address: "Adres",
          countryCity: "Nederland - Breda",
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
            "I’ve always been passionate about technology and software. While studying Entrepreneurship & Retail Management, I realized I wanted to fully focus on this field. So I decided to stop that program and, after completing a full-stack development bootcamp, I’m now driven to become an even better developer.",
          interestedin:
            "I enjoy working on projects that improve daily life—whether it's websites, web apps, games, or other creative projects. I combine technical knowledge with a keen eye for design and usability.",
          experience: "Experience",
          entrepeneurship: "Entrepreneurship & Marketing",
          propaedeuticDiploma:
            "Obtained my propaedeutic diploma in Entrepreneurship & Retail Management at Avans University of Applied Sciences. Here I built a strong foundation in entrepreneurship, marketing, and business management.",
          internshipExperience:
            "Gained work experience in market research and digital marketing at Blue Talents, and as a marketer at Recruit a Student.",
          wordpress: "Experience with WordPress & Web Design",
          trendGigant:
            "Co-founder of TrendGigant, a trendy gift webshop where I learned how to run a webshop and work with WordPress and WooCommerce.",
          solvware:
            "At Solvware B.V., I worked on building and optimizing WordPress websites, combined with online marketing activities.",
          ironhack:
            "Completed an intensive 9-week bootcamp at Ironhack, focusing on Front-end (HTML, CSS, React) and Back-end (Node.js, MongoDB).",
          future: "Vision for the Future",
          lookingAhead:
            "I want to keep growing and challenging myself by learning new technologies and building even more impactful digital products.",
          iamPietHein: "I’m Piet-Hein,",
          personalStatement:
            "Focused on building modern, scalable websites and applications with creativity, usability, and a clear purpose.",
          aboutMe: "About Me",
          projects: "Projects",
          address: "Address",
          countryCity: "The Netherlands - Breda",
          workTogether: "Let’s work together!",
          workTogetherText:
            "I’d love to help you develop digital solutions. Whether you need an app, website, or other software – let’s build it together!",
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
