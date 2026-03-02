import { useMemo, useState } from "react";

export default function Skills() {
  const [active, setActive] = useState("fullstack");

  const data = useMemo(
    () => ({
      fullstack: {
        title: "Fullstack developer",
        bullets: ["React, JavaScript, HTML, CSS, Tailwind", "API:s, Node.js, Python", "Git/GitHub", "Responsiv design", "PostgreSQL/MongoDB"],
      },
      pm: {
        title: "Project Management",
        bullets: ["Planing and delivery", "Stakeholders", "Risk Management", "Process Optimization"],
      },
      agile: {
        title: "Agile coaching",
        bullets: ["Scrum & Kanban", "SAFe", "Workshops", "Teamcoaching"],
      },
      tools: {
        title: "Technicality & tools",
        bullets: ["Jira/Confluence", "Six Sigma & Lean", "Documentation sharepoint", "Structure & tools", "Power BI", "ITIL-processes", "MS office", "3D design", "Figma"],
      },
    }),
    []
  );

  const current = data[active];

  return (
    <section className="skills" id="skills">
      <div className="button-group-bar" role="tablist" aria-label="Skills">
        <button
          type="button"
          className={active === "fullstack" ? "is-active" : ""}
          onClick={() => setActive("fullstack")}
        >
          Fullstack developer
        </button>
        <button
          type="button"
          className={active === "pm" ? "is-active" : ""}
          onClick={() => setActive("pm")}
        >
          Project Management
        </button>
        <button
          type="button"
          className={active === "agile" ? "is-active" : ""}
          onClick={() => setActive("agile")}
        >
          Agile coaching
        </button>
        <button
          type="button"
          className={active === "tools" ? "is-active" : ""}
          onClick={() => setActive("tools")}
        >
          Technicality & tools
        </button>
      </div>

      <div className="skills-panel" aria-live="polite">
        <h3>{current.title}</h3>
        <ul>
          {current.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}