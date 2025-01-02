import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [message, setMessage] = useState("")


  return (
    <div className="contact-container">
      <div className="contact-top">
        <h2>Let's work together!</h2>
        <p>
          I love to design and code as much as possible, because I love to
          create software. Just simple like that!
        </p>
      </div>
      <div className="form-section">
        <form className="contact-form">
          <input
            placeholder="First Name"
            type="text"
            name="First name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Last Name"
            type="text"
            name="Last name"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            name="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
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
          ></textarea>
          <button className="primary-button" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
