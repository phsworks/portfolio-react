import "./Contact.css";

function Contact() {
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
          <form>
            <label htmlFor="name">Name</label>
            <input type="text"/>
          </form>
        </div>
      </div>
  );
}

export default Contact;
