 import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "jaincharu0602@gmail.com",   // Replace with your Service ID
        "template_umilays",  // Replace with your Template ID
        form.current,
        "zd4ojXNt3LDv1UjY6"    // Replace with your Public Key
      )
      .then(
        (result) => {
          setSuccess("Message sent successfully! ✅");
          e.target.reset();
        },
        (error) => {
          setSuccess("Oops! Something went wrong ❌");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or projects!</p>

      <div className="contact-container">

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Email: <a href="mailto:jaincharu0602@gmail.com">jaincharu0602@gmail.com</a></p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Location: Rajasthan, India</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Your Name" required />
            <input type="email" name="from_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          {success && <p className="success-msg">{success}</p>}
        </div>

      </div>
    </section>
  );
}

export default Contact;