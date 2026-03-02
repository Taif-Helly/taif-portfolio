import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  async function goToSection(id) {
    // Om vi inte är på startsidan, gå dit först
    if (location.pathname !== "/") {
      navigate("/");
      // liten delay så DOM hinner rendera Home
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header>
      <div className="upper-bar">
        <nav>
          <ul className="nav-links">
            <li>
              <button className="nav-btn" onClick={() => goToSection("home")}>
                Home
              </button>
            </li>
            <li>
              <button className="nav-btn" onClick={() => goToSection("skills")}>
                Skills
              </button>
            </li>
            <li>
              <button className="nav-btn" onClick={() => goToSection("contact")}>
                Contact
              </button>
            </li>

            {/* Extra “mer avancerat”: separata sidor */}
            <li className="nav-sep" aria-hidden="true" />
            <li>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}