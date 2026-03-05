import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";

export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <motion.div
                className="page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h2>Projekt inte hittat</h2>
                <Link to="/projects" className="btn">Tillbaka till projekt</Link>
            </motion.div>
        );
    }

    return (
        <motion.main
            className="page project-detail"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <button onClick={() => navigate(-1)} className="btn back-btn">
                ← Tillbaka
            </button>

            <motion.div
                className="project-detail-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
            >
                <div className="detail-image">
                    <img src={project.image} alt={project.title} />
                </div>

                <div className="detail-content">
                    <h1>{project.title}</h1>

                    <p className="detail-description">{project.longDescription}</p>

                    <div className="detail-tags">
                        {project.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>

                    <div className="detail-buttons">
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn github"
                        >
                            View on GitHub
                        </a>
                        <a 
                            href={project.demo} 
                            target={project.demo !== "#" ? "_blank" : undefined}
                            rel={project.demo !== "#" ? "noopener noreferrer" : undefined}
                            className={`btn demo ${project.demo === "#" ? "disabled" : ""}`}
                        >
                            Live Demo
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.main>
    );
}
