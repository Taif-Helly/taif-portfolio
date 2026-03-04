import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import firstImg from "../assets/ProjectsPictures/first.png";

const projects = [
    {
        id: 2,
        title: "2",
        description:
            "Scandinavian inspired eCommerce concept for modern lamps, combining clean design with a realistic shopping experience.",
        image: firstImg,
        github: "https://github.com/Taif-Helly/lampor-hemsida-NordicEvee",
        demo: "#",
        tags: ["HTML", "CSS", "eCommerce"],
    },


    {
        id: 1,
        title: "Nordic EVÉE Lamps",
        description:
            "Scandinavian inspired eCommerce concept for modern lamps, combining clean design with a realistic shopping experience.",
        image: firstImg,
        github: "https://github.com/Taif-Helly/lampor-hemsida-NordicEvee",
        demo: "#",
        tags: ["HTML", "CSS", "eCommerce"],
    },
    // Lägg till fler projekt här enkelt



];

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

            <div className="projects-grid">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div
                            className="project-image-wrapper"
                            onClick={() => setSelectedImg(project.image)}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-img"
                            />

                        </div>

                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>

                            <div className="project-buttons">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn github">
                                    GitHub
                                </a>
                                <a href={project.demo} className="btn demo">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
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
                <Link className="nav-link" to="/">← Back to Home</Link>
            </p>
        </motion.main>
    );
}