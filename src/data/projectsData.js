import firstImg from "../assets/ProjectsPictures/first.png";
import main from "../assets/ProjectsPictures/main.png";
import retake from "../assets/ProjectsPictures/retake.png";
import answer from "../assets/ProjectsPictures/answer.png";
import codeAndGame from "../assets/ProjectsPictures/coding & gaming.png";
import mainblogg from "../assets/ProjectsPictures/mainblogg.png";
import webfunctions from "../assets/ProjectsPictures/functions.png";
export const projectsData = [
     {
        id: 3,
        title: "Dynamic Blogging Platform Tender Bites",
        shortDescription: "This blog page is focused on food and cooking, sharing recipes and inspiration in a clean and easy to read layout.",
        longDescription: "This blog page focuses on food and cooking, sharing recipes, tips, and inspiration for people who enjoy making and exploring different dishes. The page is designed with a clean and simple layout so readers can easily discover new recipes and learn more about food in an engaging way.",
        images: [mainblogg,webfunctions ],
        github: "https://github.com/Taif-Helly/Dynamisk-Bloggplattform-Tender-Bites",
        demo: "#",
        tags: ["HTML", "CSS", "JavaScript Vanilla"],
    },
    {
        id: 2,
        title: "Interaktiv-och-Dynamisk-Quizapplikation",
        shortDescription: "A web-based quiz platform where users can test their knowledge through interactive and engaging quizzes across different topics.",
        longDescription: "This project is a web-based quiz application designed to provide an interactive and engaging way for users to test their knowledge. The website presents a series of questions across different topics and allows users to select answers, receive feedback, and view their results. The goal of the project was to create a clean, responsive, and user-friendly interface while focusing on functionality and user experience.",
        images: [main,codeAndGame, answer, retake, ],
        github: "https://github.com/Taif-Helly/Interaktiv-och-Dynamisk-Quizapplikation",
        demo: "#",
        tags: ["HTML", "CSS", "JavaScript Vanilla"],
    },
    {
        id: 1,
        title: "Nordic EVÉE Lamps",
        shortDescription: "Scandinavian inspired eCommerce concept for modern lamps, combining clean design with a realistic shopping experience.",
        longDescription: "This project is a Scandinavian-inspired eCommerce concept for modern lamps, combining clean design with a realistic online shopping experience. My interest in lamps comes from a passion for interior design and how lighting can transform a space.",
        images: [firstImg],
        github: "https://github.com/Taif-Helly/lampor-hemsida-NordicEvee",
        demo: "#",
        tags: ["HTML", "CSS", "eCommerce", "in progress"],
    },
];
