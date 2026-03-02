import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Resume</h2>
      <p>
        PDF ligger i <code>public/Taif-Helly-Resume.pdf</code>.
      </p>

      <div className="pdf-wrap">
        <iframe
          title="Resume PDF"
          src="/Taif-Helly-Resume.pdf"
          className="pdf"
        />
      </div>

      <p>
        Om iframe inte funkar:{" "}
        <a href="/Taif-Helly-Resume.pdf" target="_blank" rel="noreferrer">
          öppna PDF i ny flik
        </a>
      </p>

      <p style={{ marginTop: 18 }}>
        <Link className="nav-link" to="/">
          ← Back to Home
        </Link>
      </p>
    </motion.main>
  );
}