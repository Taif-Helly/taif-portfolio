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
     

      <div className="pdf-wrap">
        <iframe
          title="Resume PDF"
          src="/CV-Taif Helly.pdf"
          className="pdf"
        />
      </div>

      <p>
        If the resume is not loading on the screen:{" "}
        <a href="/CV-Taif Helly.pdf" target="_blank" rel="noreferrer">
          Open PDF in a new tab
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