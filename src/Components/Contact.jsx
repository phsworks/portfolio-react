import "./Contact.css";
import { useState } from "react";
import mail from "../assets/mail.svg"
import map from "../assets/map.svg"
import phone from "../assets/phone.svg"
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3528c7e8-626a-4414-8c64-28210efa7ae3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-method">
          <div className="contact-icon">
            <img src={phone} alt="phone" />
          </div>
          <div className="contact-text">
            <p>
              Tel
            </p>
            <p>
              <b>+31 615309763</b>
            </p>
          </div>
        </div>
        <div className="contact-method">
          <div className="contact-icon">
            <img src={mail} alt="mail" />
          </div>
          <div className="contact-text">
            <p>{t("email")}</p>
            <p>
              <b>piethein@phsdevelopment.nl</b>
            </p>
          </div>
        </div>
        <div className="contact-method">
          <div className="contact-icon">
            <img src={map} alt="map" />
          </div>
          <div className="contact-text">
            <p>{t("address")}</p>
            <p>
              <b>{t("countryCity")}</b>
            </p>
          </div>
        </div>
      </div>
      <div className="form-section">
        <div className="form-intro">
          <h3>{t("workTogether")}</h3>
          <p>{t("workTogetherText")}</p>
        </div>
        <div className="form">
          <form onSubmit={onSubmit} className="contact-form">
            <input
              type="hidden"
              name="access_key"
              value="3528c7e8-626a-4414-8c64-28210efa7ae3"
            />
            <input
              placeholder={t("fullName")}
              type="text"
              name="First name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              placeholder={t("email")}
              type="email"
              name="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder={t("companyOptional")}
              type="text"
              name="Company"
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              placeholder={t("phoneOptional")}
              type="tel"
              name="Phone number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
              placeholder={t("message")}
              type="text"
              name="Message"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button className="primary-button" type="submit">
              {t("sendMessage")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
