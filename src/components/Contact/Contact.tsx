import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_3on8f86", // 🔹 Your EmailJS Service ID
        "template_f7wcche", // 🔹 Your Template ID
        form.current,
        "hOHKGb98ESRa5HVa6" // 🔹 Your Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();

          // 🕒 Trigger fade-out after 3s, then remove after 5s
          setTimeout(() => setFadeOut(true), 3000);
          setTimeout(() => {
            setStatus("");
            setFadeOut(false);
          }, 5000);
        },
        () => {
          setStatus("Failed to send message. Try again later.");

          setTimeout(() => setFadeOut(true), 3000);
          setTimeout(() => {
            setStatus("");
            setFadeOut(false);
          }, 5000);
        }
      );
  };

  return (
    <section id="contact" className="contact-container">

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2 className="contact-title">CONTACT ME</h2>
        {/* Name */}
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>

        {/* Email */}
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>

        {/* Subject */}
        <div className="field">
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" required />
        </div>

        {/* Message */}
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows={5} required />
        </div>

        {/* Submit */}
        <button type="submit" id="button" className="btn-primary">
          Submit
        </button>
      </form>

      {status && <p className={`status ${fadeOut ? "fade-out" : ""}`}>{status}</p>}
    </section>
  );
}
