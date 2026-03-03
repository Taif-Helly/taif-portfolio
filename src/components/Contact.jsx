import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", text: "" });

  function update(key, value) {
    setForm((p) => ({ ...p, [key]: value }));
    if (status.type !== "idle") setStatus({ type: "idle", text: "" });
  }

  function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }


  async function onSubmit(e) {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", text: "Fill in your name, email and message." });
      return;
    }
    if (!validEmail(email)) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    // (valfritt) visar att den skickar
    setStatus({ type: "loading", text: "Sending..." });

    try {
      const res = await emailjs.send(
        "service_pth7fah",
        "template_i4679hp",
        { name, email, message },
        "WZvH73k1NP7uPY4_q"
      );

      console.log("EmailJS OK:", res);

      setStatus({
        type: "success",
        text: "Thank you for your email! I'll get back to you shortly.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS ERROR:", error);
      setStatus({ type: "error", text: "Something went wrong. Please try again." });
    }
  }

  return (
    <>
      <h3 className="contact-me" id="contact" style={{ fontSize: "3rem" }}>
        Contact me
      </h3>

      <form className="contact-wrapper" onSubmit={onSubmit}>
        <div className="contact-me">
          <div className="contact-form">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Your name.."
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              autoComplete="name"
            />
          </div>

          <div className="contact-form">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Your email.."
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              autoComplete="email"
            />
          </div>
        </div>

        <div className="message-form">
          <label htmlFor="Message">Message</label>
          <textarea
            id="Message"
            name="Message"
            placeholder="Hello there, I would like to ask you.."
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </div>

        <div className="submit-button">
          <input type="submit" value="Send Message" className="submit-btn" />
        </div>

        {status.type !== "idle" && (
          <div className={`form-status ${status.type}`} role="status">
            {status.text}
          </div>
        )}
      </form>
    </>
  );
}