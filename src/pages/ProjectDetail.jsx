import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { projectsData } from "../data/projectsData";

export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === parseInt(id));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => 
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => 
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    if (!project) {
        return (
            <motion.div
                className="page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h2>Didn't find the project</h2>
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
                ← Go back
            </button>

            <motion.div
                className="project-detail-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
            >
                <div className="detail-image-gallery">
                    <div className="main-image-wrapper">
                        <motion.img 
                            key={currentImageIndex}
                            src={project.images[currentImageIndex]} 
                            alt={`${project.title} - bild ${currentImageIndex + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        {project.images.length > 1 && (
                            <>
                                <button 
                                    className="gallery-nav prev" 
                                    onClick={handlePrevImage}
                                    aria-label="Föregående bild"
                                >
                                    ❮
                                </button>
                                <button 
                                    className="gallery-nav next" 
                                    onClick={handleNextImage}
                                    aria-label="Nästa bild"
                                >
                                    ❯
                                </button>
                            </>
                        )}
                    </div>

                    {project.images.length > 1 && (
                        <div className="gallery-thumbnails">
                            {project.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    className={`thumbnail ${idx === currentImageIndex ? "active" : ""}`}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    aria-label={`Se bild ${idx + 1}`}
                                >
                                    <img src={img} alt={`Miniatyr ${idx + 1}`} />
                                </button>
                            ))}
                        </div>
                    )}
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
