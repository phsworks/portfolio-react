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
            "Ik ben altijd gepassioneerd geweest over technologie en software. Na een studie Ondernemerschap & Retail Management heb ik bewust gekozen voor een carrière in softwareontwikkeling. Die beslissing bracht me naar waar ik nu ben: Full Stack Developer en oprichter van PHS Development.",
          interestedin:
            "Ik werk graag aan betekenisvolle digitale oplossingen die het dagelijks leven verbeteren. Of het nu gaat om websites, webapps of creatieve tools – ik combineer technische kennis met een scherp oog voor design en gebruiksvriendelijkheid.",
          experience: "Ervaring",
          entrepeneurship: "Ondernemerschap & Marketing",
          propaedeuticDiploma:
            "Propedeuse Ondernemerschap & Retail Management behaald aan Avans Hogeschool. Hier legde ik de basis in ondernemerschap, marktanalyse en innovatie.",
          internshipExperience:
            "Werkervaring opgedaan in marktonderzoek en digitale marketing bij Blue Talents en als marketeer bij Recruit a Student.",
          wordpress: "Ervaring met WordPress & Webdesign",
          trendGigant:
            "Mede-oprichter van TrendGigant, een e-commerce project waarin ik samen met een vriend een WordPress webshop bouwde en beheerde.",
          solvware:
            "Bij Solvware B.V. werkte ik aan het bouwen en optimaliseren van WordPress-websites, gecombineerd met online marketingactiviteiten.",
          ironhack:
            "Intensieve bootcamp gevolgd bij Ironhack (9 weken) met focus op Front-end (HTML, CSS, React) en Back-end (Node.js, MongoDB). Hier ontstond mijn passie voor het bouwen van schaalbare digitale toepassingen.",
          future: "Toekomstvisie",
          lookingAhead:
            "De overstap naar webontwikkeling is mijn beste beslissing geweest. Ik blijf groeien, leer nieuwe technologieën en bouw graag aan digitale producten die impact maken.",
          iamPietHein: "Ik ben Piet-Hein,",
          personalStatement:
            "Gefocust op het bouwen van moderne, schaalbare websites en applicaties met creativiteit, gebruiksvriendelijkheid en een duidelijk doel",
          aboutMe: "Over mij",
          projects: "Projecten",
          address: "Adres",
          countryCity: "Nederland - Breda",
          workTogether: "Laten we samenwerken!",
          workTogetherText:
            "Ik help je graag bij het ontwikkelen van digitale oplossingen. Of je nu een app, website of MVP nodig hebt – laten we bouwen!",
          fullName: "Volledige naam",
          email: "E-mail",
          companyOptional: "Bedrijf (optioneel)",
          phoneOptional: "Telefoonnummer (optioneel)",
          message: "Bericht",
          sendMessage: "Verstuur bericht",
          description: "Beschrijving",
          seegithub: "Bekijk Github",
        },
      },
      en: {
        translation: {
          About: "About",
          iam: "I am Piet-Hein Schouten,",
          mywholelife:
            "I’ve always had a passion for technology and software. After studying Entrepreneurship & Retail Management, I decided to switch gears and pursue a career in software development. That choice led me to where I am today: a Full Stack Developer and founder of PHS Development.",
          interestedin:
            "I enjoy working on meaningful digital solutions that improve daily life. Whether it’s websites, web apps, or creative tools – I combine technical skills with a sharp eye for design and usability.",
          experience: "Experience",
          entrepeneurship: "Entrepreneurship & Marketing",
          propaedeuticDiploma:
            "Earned a Propaedeutic Diploma in Entrepreneurship & Retail Management at Avans University, where I built a solid foundation in market analysis and innovation.",
          internshipExperience:
            "Gained hands-on experience in market research and digital marketing during internships at Blue Talents and Recruit a Student.",
          wordpress: "WordPress & Web Design Experience",
          trendGigant:
            "Co-founded TrendGigant, an e-commerce venture where I developed and maintained a WordPress webshop with a friend.",
          solvware:
            "At Solvware B.V., I combined WordPress development with online marketing, helping businesses improve their digital presence.",
          ironhack:
            "Completed an intensive 9-week coding bootcamp at Ironhack, mastering Front-end (HTML, CSS, React) and Back-end (Node.js, MongoDB) technologies. This is where I discovered my passion for building scalable digital products.",
          future: "Looking Ahead",
          lookingAhead:
            "Transitioning into web development was the best decision I made. I’m excited to keep learning, growing, and building digital products that have a real impact.",
          iamPietHein: "I am Piet-Hein,",
          personalStatement:
            "Focused on building modern, scalable websites and applications with creativity, usability, and purpose.",
          aboutMe: "About Me",
          projects: "Projects",
          address: "Address",
          countryCity: "Netherlands - Breda",
          workTogether: "Let’s work together!",
          workTogetherText:
            "I'm passionate about helping you build digital solutions. Whether you need an app, website, or MVP – let’s build it together.",
          fullName: "Full Name",
          email: "Email",
          companyOptional: "Company (Optional)",
          phoneOptional: "Phone Number (Optional)",
          message: "Message",
          sendMessage: "Send Message",
          description: "Description",
          seegithub: "View Github",
        },
      },
    },
  });

export default i18n;
