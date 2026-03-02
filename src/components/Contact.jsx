import { useState } from "react";

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

  function onSubmit(e) {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", text: "Fyll i namn, email och meddelande." });
      return;
    }
    if (!validEmail(email)) {
      setStatus({ type: "error", text: "Skriv en giltig emailadress." });
      return;
    }

    setStatus({ type: "success", text: "Tack! Jag öppnar ditt mailprogram." });

    // Byt till din riktiga mailadress:
    const to = "taif.helly@example.com";
    const subject = encodeURIComponent(`Kontakt via portfolio – ${name}`);
    const body = encodeURIComponent(`Namn: ${name}\nEmail: ${email}\n\n${message}\n`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
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