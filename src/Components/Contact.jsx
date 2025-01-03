import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [message, setMessage] = useState("")

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
      <div className="contact-top">
        <h2>Let's work together!</h2>
        <p>
          I love to design and code as much as possible, because I love to
          create software. Just simple like that!
        </p>
      </div>
      <div className="form-section">
        <form onSubmit={onSubmit}
          className="contact-form"
        >
          <input
            type="hidden"
            name="access_key"
            value="b15501f2-26aa-448c-94b2-ed57b42c56fa"
          ></input>
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
            required
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
