import { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <h2 className="logo">Charu Jain</h2>

      <ul className="nav-links">

        {/* 🔘 Simple Toggle Button */}
        <li>
          <button
            className="theme-toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            ⚡
          </button>
        </li>

        <li><a href="#home">🏠 Home</a></li>
        <li><a href="#about">👩‍💻 About</a></li>
        <li><a href="#skills">🛠 Skills</a></li>
        <li><a href="#experience">💼 Experience</a></li>
        <li><a href="#education">🎓 Education</a></li>
        <li><a href="#projects">🚀 Projects</a></li>
        <li><a href="#certifications">📜 Certifications</a></li>
        <li><a href="#contact">📞 Contact</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;
 