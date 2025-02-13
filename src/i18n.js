import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "nl", // Stel de standaardtaal in
    debug: true,
    interpolation: {
      escapeValue: false, // React doet al escapen
    },
    resources: {
      en: {
        translation: {
          About: "About me",
          iam: "I Am Piet-Hein Schouten,",
          mywholelife:
            "My whole life, I have been passionate about technology and software. Starting out as a Entrepreneurship & Retail Management student, I realized I wanted to make a change and pursue a career in software development. Following my passion, I am now a Full Stack Developer.",
          interestedin:
            "I am especially interested in working on meaningful projects that improve our daily lives. I enjoy building applications, websites, and games, optimizing performance, and experimenting with creative designs.",
          experience: "My Experience",
          entrepeneurship: "Entrepeneurship & Marketing",
          propaedeuticDiploma:
            "Earned my Propaedeutic Diploma in Entrepreneurship & Retail Management at Avans University, where I developed a foundation in Entrepreneurship & Retail Management.",
          internshipExperience:
            "Gained hands-on experience in market research and digital marketing during an internship at Blue Talents and as a Marketeer at Recruit a Student.",
          wordpress: " Wordpress & Web Design experience",
          trendGigant:
            "Co-founded TrendGigant together with a friend, an e-commerce business, where I built and managed a WordPress webshop.",
          solvware:
            "At Solvware B.V., I further developed technical skills by balancing WordPress development with online marketing activities.",
          ironhack:
            "Completed an intensive 9-week program at Ironhack, mastering front-end (HTML, CSS, React) and back-end (Node.js, MongoDB) technologies. Built real-world applications and discovered my passion for creating user-centric digital solutions.",
          future: "Looking Ahead",
          lookingAhead:
            "Transitioning to web development has been the best decision of my career. I’m excited to continue growing, learning new technologies, and working on projects that combine creativity and functionality.",
          iamPietHein: "I am Piet-Hein,",
          personalStatement:
            "“With a passion for building websites and full-stack applications, I combine creativity, problem-solving, and a results-driven approach to bring ideas to life.”",
          aboutMe: "About Me",
          skills: "Skills",
          projects: "Projects",
          address: "Address",
          countryCity: "Netherlands - Breda",
          workTogether: "Let's work together!",
          workTogetherText:
            "I’m passionate about designing and coding because I love bringing ideas to life through software!",
          fullName: "Full Name",
          email: "Email",
          companyOptional: "Company (Optional)",
          phoneOptional: "Phone Number (Optional)",
          message: "Message",
          sendMessage: "Send Message",
          projectDescriptions: {
            "007Legacy":
              "A James Bond-themed browser game based on the movies.",
            IronHub: "A forum platform for the Ironhack community.",
            BookQuest:
              "A personal app for organizing the books you own and the ones you want to read.",
            GuessMyNumber:
              "A React Native game where your phone tries to guess your number.",
            RecipeApp: "A React Native app to manage and explore recipes.",
            Solvware: "A modern interactive business website for Solvware.",
            Mietis: "A mobile user flow for shopping bags at Mietis.",
            HouseInTuscany: "A stylish booking website for House in Tuscany.",
            BucketlistPosters: "A modern webshop for Bucketlistposters.nl.",
          },
        },
      },
      nl: {
        translation: {
          About: "Over mij",
          iam: "Ik ben Piet-Hein Schouten,",
          mywholelife:
            "Mijn hele leven ben ik gepassioneerd geweest door technologie en software. Na een tijdje als student Ondernemerschap & Retail Management, besefte ik dat ik een verandering wilde maken en een carrière in softwareontwikkeling wilde nastreven. Door mijn passie te volgen, ben ik nu een Full Stack Developer.",
          interestedin:
            "Ik ben bijzonder geïnteresseerd in het werken aan betekenisvolle projecten die ons dagelijks leven verbeteren. Ik houd van het bouwen van applicaties, websites en games, het optimaliseren van prestaties en het experimenteren met creatieve designs.",
          experience: "Mijn ervaring",
          entrepeneurship: "Ondernemerschap & Marketing",
          propaedeuticDiploma:
            "Behaalde mijn Propedeuse in Ondernemerschap & Retail Management aan Avans Hogeschool, waar ik een basis ontwikkelde in Ondernemerschap & Retail Management.",
          internshipExperience:
            "Verkreeg praktijkervaring in marktonderzoek en digitale marketing tijdens een stage bij Blue Talents en als Marketeer bij Recruit a Student.",
          wordpress: " Wordpress & Web Design ervaring",
          trendGigant:
            "Mede-oprichter van TrendGigant, een e-commerce bedrijf, waar ik samen met een vriend een WordPress webshop bouwde en beheerde.",
          solvware:
            "Bij Solvware B.V. heb ik mijn technische vaardigheden verder ontwikkeld door WordPress-ontwikkeling te combineren met online marketingactiviteiten.",
          ironhack:
            "Voltooide een intensief 9-weken durende Bootcamp bij Ironhack, waarbij ik front-end (HTML, CSS, React) en back-end (Node.js, MongoDB) technologieën leerde. Bouwde echte toepassingen en ontdekte mijn passie voor het creëren van gebruikersgerichte digitale oplossingen.",
          future: "Een blik op de toekomst",
          lookingAhead:
            "De overstap naar webontwikkeling is voor mij mijn beste beslissing geweest. Ik ben enthousiast om door te groeien, nieuwe technologieën te leren en te werken aan projecten die creativiteit en functionaliteit combineren.",
          iamPietHein: "Ik ben Piet-Hein,",
          personalStatement:
            "“Met een passie voor het bouwen van websites en full-stack applicaties, combineer ik creativiteit, probleemoplossend vermogen en een resultaatgerichte aanpak om ideeën tot leven te brengen.”",
          aboutMe: "Over mij",
          skills: "Vaardigheden",
          projects: "Projecten",
          address: "Adres",
          countryCity: "Nederland - Breda",
          workTogether: "Laten we samenwerken!",
          workTogetherText:
            "Ik ben gepassioneerd over ontwerpen en coderen omdat ik ervan houd om ideeën tot leven te brengen met software!",
          fullName: "Volledige naam",
          email: "E-mail",
          companyOptional: "Bedrijf (Optioneel)",
          phoneOptional: "Telefoonnummer (Optioneel)",
          message: "Bericht",
          sendMessage: "Verstuur Bericht",
        },
      },
    },
  });

export default i18n;
