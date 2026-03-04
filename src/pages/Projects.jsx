import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import firstImg from "../assets/ProjectsPictures/first.png";

export default function Projects() {
  const [selectedImg, setSelectedImg] = useState(null);

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
        <h3>Nordic EVÈE - Lamps</h3>

        <p>
          This project is a Scandinavian-inspired eCommerce concept for modern lamps,
          combining clean design with a realistic online shopping experience.
          My interest in lamps comes from a passion for interior design and how lighting
          can transform a space.
        </p>

        <img
          src={firstImg}
          alt="Nordic EVEE project"
          className="project-img"
          onClick={() => setSelectedImg(firstImg)}
        />

        <a
          href="https://github.com/Taif-Helly/lampor-hemsida-NordicEvee"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </div>

      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <img
            src={selectedImg}
            alt="Project enlarged"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <p style={{ marginTop: 18 }}>
        <Link className="nav-link" to="/">
          ← Back to Home
        </Link>
      </p>
    </motion.main>
  );
}