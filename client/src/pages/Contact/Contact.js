import React from "react";
import "./Contact.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    if (!name || !email || !message) {
      alert("Please fill out all fields");
      return;
    }

    alert(
      "Thank you for your message! I will do my best to get back to you as quick as possible 😁."
    );

    event.target.reset();
  };

  return (
    <div>
      <div className="form-container">
        <h1>Get In Touch! 😁</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-content">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
