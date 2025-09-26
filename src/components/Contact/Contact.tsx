import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const [status, setStatus] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_3on8f86",
        "template_f7wcche",
        form.current,
        "hOHKGb98ESRa5HVa6"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
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
    <section id="contact" ref={sectionRef} className="contact-container">
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`contact-form slide-up ${isVisible ? "animate" : ""}`}
      >
        <h2 className={`contact-title slide-right ${isVisible ? "animate" : ""}`}>
          CONTACT ME
        </h2>

      {/* Name */}
      <div
        className={`field slide-up ${isVisible ? "animate" : ""}`}
        style={{ animationDelay: "0.3s" }}
      >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>

      {/* Email */}
      <div
        className={`field slide-up ${isVisible ? "animate" : ""}`}
        style={{ animationDelay: "0.4s" }}
      >
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>

      {/* Subject */}
      <div
        className={`field slide-up ${isVisible ? "animate" : ""}`}
        style={{ animationDelay: "0.5s" }}
      >
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" required />
      </div>

      {/* Message */}
      <div
        className={`field slide-up ${isVisible ? "animate" : ""}`}
        style={{ animationDelay: "0.6s" }}
      >
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows={5} required />
      </div>

      {/* Submit */}
      <button
        type="submit"
        id="button"
        className={`btn-primary slide-up ${isVisible ? "animate" : ""}`}
        style={{ animationDelay: "0.7s" }}
      >
        Submit
      </button>
      </form>

      {status && <p className={`status ${fadeOut ? "fade-out" : ""}`}>{status}</p>}
    </section>
  );
}
