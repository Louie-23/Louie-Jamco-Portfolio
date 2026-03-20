import { useEffect, useRef, useState, type FormEvent } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

type StatusState = {
  message: string;
  type: "success" | "error" | "";
};

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const fadeTimeoutRef = useRef<number | null>(null);
  const clearTimeoutRef = useRef<number | null>(null);

  const [status, setStatus] = useState<StatusState>({ message: "", type: "" });
  const [fadeOut, setFadeOut] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
      if (clearTimeoutRef.current) window.clearTimeout(clearTimeoutRef.current);
    };
  }, []);

  const queueStatusReset = () => {
    if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
    if (clearTimeoutRef.current) window.clearTimeout(clearTimeoutRef.current);

    fadeTimeoutRef.current = window.setTimeout(() => setFadeOut(true), 3000);
    clearTimeoutRef.current = window.setTimeout(() => {
      setStatus({ message: "", type: "" });
      setFadeOut(false);
    }, 5000);
  };

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current) return;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        message: "Contact form is temporarily unavailable. Please use the email link below.",
        type: "error",
      });
      setFadeOut(false);
      queueStatusReset();
      return;
    }

    try {
      setIsSubmitting(true);
      setFadeOut(false);

      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);

      setStatus({ message: "Message sent successfully.", type: "success" });
      form.current.reset();
      queueStatusReset();
    } catch {
      setStatus({
        message: "Failed to send message. Please try again later.",
        type: "error",
      });
      queueStatusReset();
    } finally {
      setIsSubmitting(false);
    }
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

        <div
          className={`field slide-up ${isVisible ? "animate" : ""}`}
          style={{ animationDelay: "0.3s" }}
        >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" autoComplete="name" required />
        </div>

        <div
          className={`field slide-up ${isVisible ? "animate" : ""}`}
          style={{ animationDelay: "0.4s" }}
        >
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" autoComplete="email" required />
        </div>

        <div
          className={`field slide-up ${isVisible ? "animate" : ""}`}
          style={{ animationDelay: "0.5s" }}
        >
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" required />
        </div>

        <div
          className={`field slide-up ${isVisible ? "animate" : ""}`}
          style={{ animationDelay: "0.6s" }}
        >
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows={5} required />
        </div>

        <button
          type="submit"
          id="button"
          className={`btn-primary slide-up ${isVisible ? "animate" : ""}`}
          style={{ animationDelay: "0.7s" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>

      <p
        className={`status ${status.type} ${fadeOut ? "fade-out" : ""}`}
        aria-live="polite"
      >
        {status.message}
      </p>
    </section>
  );
}
