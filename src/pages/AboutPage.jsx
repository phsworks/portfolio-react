import "./AboutPage.css";
import diploma from "../assets/diploma.webp";
import { useState, useEffect } from "react";
import scrollUpArrow from "../assets/arrowUp.svg";

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div id="about-section">
      {isVisible && (
        <div className="scroll-up">
          <button onClick={scrollUp}>
            <img src={scrollUpArrow} alt="scroll-up-icon" />
          </button>
        </div>
      )}
      <div className="about-intro">
        <div className="about-picture">
          <img width={230} src={diploma} alt="piet-diploma" />
        </div>
        <div className="about-info">
          <h1>About</h1>
          <h4>I Am Piet-Hein Schouten,</h4>
          <p>
            My whole life, I have been passionate about technology and software.
            Starting out as a Entrepreneurship & Retail Management student, I
            realized I wanted to make a change and pursue a career in software
            development. Following my passion, I am now a Full Stack Developer.
          </p>
          <br></br>
          <p>

            I am especiallyinterested in working on meaningful projects that
            improve our daily lives. I enjoy building applications, websites,
            and games, optimizing performance, and experimenting with creative
            designs.
          </p>
        </div>
      </div>
      <div className="my-story">
        <h2>My Experience</h2>
        <article>
          <h3>2021–2023: Education and Exploration</h3>
          <p>
            Earned a{" "}
            <strong>
              Propaedeutic Diploma in Entrepreneurship & Retail Management
            </strong>{" "}
            at Avans University, where I developed a foundation in
            Entrepreneurship & Retail Management.
          </p>
          <p>
            Gained hands-on experience in market research and digital marketing
            during an internship at Blue Talents and as a Marketeer at Recruit a
            Student.
          </p>
        </article>
        <article>
          <h3>2022–2024: Entrepreneurship and Web Development</h3>
          <p>
            Co-founded <strong>TrendGigant</strong>, an e-commerce business,
            where I built and managed a WordPress webshop.
          </p>
          <p>
            At <strong>Solvware B.V.</strong>, I further developed technical
            skills by balancing WordPress development with online marketing
            activities.
          </p>
        </article>
        <article>
          <h3>2024: Full Stack Web Development Bootcamp</h3>
          <p>
            Completed an intensive 9-week program at <strong>Ironhack</strong>,
            mastering front-end (HTML, CSS, React) and back-end (Node.js,
            MongoDB) technologies. Built real-world applications and discovered
            my passion for creating user-centric digital solutions.
          </p>
        </article>

        <section>
          <h3>Looking Ahead</h3>
          <p>
            Transitioning to web development has been the best decision of my
            career. I’m excited to continue growing, learning new technologies,
            and working on projects that combine creativity and functionality.
          </p>
          <p>Let’s connect and create something impactful together!</p>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
