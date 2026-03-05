import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";

export default function Projects() {
    return (
        <motion.main
            className="page"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <h2>Projects</h2>

            <div className="projects-grid">
                {projectsData.map((project) => (
                    <Link
                        key={project.id}
                        to={`/projects/${project.id}`}
                        className="project-card-link"
                    >
                        <motion.div
                            className="project-card"
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-img"
                                />
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.shortDescription}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-buttons">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn github" onClick={(e) => e.stopPropagation()}>
                                        GitHub
                                    </a>
                                    <a href={project.demo} className="btn demo" onClick={(e) => e.stopPropagation()}>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>

            <p style={{ marginTop: 18 }}>
                <Link className="nav-link" to="/">← Back to Home</Link>
            </p>
        </motion.main>
    );
}