import firstImg from "../assets/ProjectsPictures/first.png";
import main from "../assets/ProjectsPictures/main.PNG";
import retake from "../assets/ProjectsPictures/retake.PNG";
import answer from "../assets/ProjectsPictures/answer.PNG";
import codeAndGame from "../assets/ProjectsPictures/coding & gaming.PNG";
import mainblogg from "../assets/ProjectsPictures/mainblogg.PNG";
import webfunctions from "../assets/ProjectsPictures/functions.PNG";
import mainpok from "../assets/ProjectsPictures/main-pokemon.PNG";
import charizard from "../assets/ProjectsPictures/charizard.PNG";
import mainprod from "../assets/ProjectsPictures/main-prod.PNG";
import loginprod from "../assets/ProjectsPictures/log in-prod.PNG";
export const projectsData = [
     {
        id: 5,
        title: "Productivity Assistant Application",
        shortDescription: "A streamlined productivity app to track habits, tasks, and events with local storage authentication.",
        longDescription: "This project is a productivity tracking web application where users can manage events, create to-do lists, and track daily habits. It includes a simple login system using local storage and provides an organized interface to help users stay productive and manage their tasks efficiently.",
        images: [mainprod,loginprod ],
        github: "https://github.com/Taif-Helly/Productivity-Assistant-Application-",
        demo: "#",
        tags: ["React", "HTML", "CSS", "JavaScript"],
    },

     {
        id: 4,
        title: "Pokémon application",
        shortDescription: "This project is a web application that fetches data from a Pokémon API to display information about different Pokémon, including their types and abilities.",
        longDescription: "This project is a web application that fetches data from a Pokémon API to display information about different Pokémon, including their types, abilities, and strengths. The website allows users to explore and learn more about various Pokémon through dynamically loaded data and a simple, user friendly interface.",
        images: [mainpok,charizard ],
        github: "https://github.com/Taif-Helly/Pokemon-application",
        demo: "#",
        tags: ["React", "HTML", "CSS", "JavaScript"],
    },
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
        images: [main,codeAndGame, answer, retake],
        github: "https://github.com/Taif-Helly/Interaktiv-och-Dynamisk-Quizapplikation",
        demo: "https://quiz-application-code.netlify.app/",
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
