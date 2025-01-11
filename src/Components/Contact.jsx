import "./Contact.css";
import { useState } from "react";
import mail from "../assets/mail.svg"
import map from "../assets/map.svg"
import phone from "../assets/phone.svg"

function Contact() {
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

    formData.append("access_key", "b15501f2-26aa-448c-94b2-ed57b42c56fa");

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
            <h4>Phone</h4>
            <p>+31 615309763</p>
          </div>
        </div>
        <div className="contact-method">
          <div className="contact-icon">
            <img src={mail} alt="mail" />
          </div>
          <div className="contact-text">
            <h4>Email</h4>
            <p>piethein@schouten.nl</p>
          </div>
        </div>
        <div className="contact-method">
          <div className="contact-icon">
            <img src={map} alt="map" />
          </div>
          <div className="contact-text">
            <h4>Address</h4>
            <p>Netherlands - Breda</p>
          </div>
        </div>
      </div>
      <div className="form-section">
        <div className="form-intro">
          <h2>Let's work together!</h2>
          <p>
            I’m passionate about designing and coding because I love bringing
            ideas to life through software!
          </p>
        </div>
        <div className="form">
          <form onSubmit={onSubmit} className="contact-form">
            <input
              type="hidden"
              name="access_key"
              value="b15501f2-26aa-448c-94b2-ed57b42c56fa"
            />
            <input
              placeholder="Full Name"
              type="text"
              name="First name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              placeholder="Email"
              type="email"
              name="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Company (Optional)"
              type="text"
              name="Company"
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              placeholder="Phone Number (optional)"
              type="tel"
              name="Phone number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
              placeholder="Message"
              type="text"
              name="Message"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
           
            <button className="primary-button" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
