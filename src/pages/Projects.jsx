import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Projects</h2>
      <p>Här kan du lista dina projekt. Lägg gärna cards, länkar och screenshots.</p>

      <div className="card">
        <h3>Project #1</h3>
        <p>Kort beskrivning.</p>
        <a href="#" onClick={(e) => e.preventDefault()}>
          Demo (lägg länk)
        </a>
      </div>

      <p style={{ marginTop: 18 }}>
        <Link className="nav-link" to="/">
          ← Back to Home
        </Link>
      </p>
    </motion.main>
  );
}