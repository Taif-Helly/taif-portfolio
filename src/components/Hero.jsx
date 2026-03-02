import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <div className="header-flex" id="home">
            <motion.div
                className="header-text"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
            >
                <h1>Taif Helly</h1>
                <p id="texten">
                    I am a junior fullstack web developer with a strong technical foundation in HTML, CSS, 
                    JavaScript, React, SQL and Python, combined with several years of experience working in agile environments and cross-functional teams.
                    I bring over three years of experience in project management and agile methodologies, 
                    which I aim to complement with my newly developed fullstack web development skills. 
                    By bringing together technical skills and an understanding of team and project processes, 
                    I strive to contribute as a link between development teams and stakeholders, while growing in a Junior Web Developer role.

                </p>

                <div className="flex-project-resume">
                    <button className="projects" type="button" onClick={() => navigate("/projects")}>
                        My Projects
                    </button>
                    <button className="resume" type="button" onClick={() => navigate("/resume")}>
                        My Resume
                    </button>
                </div>
            </motion.div>

            <motion.img
                src={profileImg}
                alt="Professional man in a dark suit and white shirt against a solid black background, facing forward with a neutral expression"
                className="profile-img"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
            />
        </div>
    );
}