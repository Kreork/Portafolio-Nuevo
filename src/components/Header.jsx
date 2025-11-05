import { useEffect, useState } from "react";
import {
  FaEnvelope, FaFileAlt, FaGithub,
  FaHome, FaImages, FaLinkedin, FaUser
} from "react-icons/fa";
import FotoPerfil from "../assets/images/chris.jpg";
import "../assets/styles/Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "resume", "portfolio", "contact"];
      let current = "hero";

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <button 
        className={`menu-btn ${open ? "open" : ""}`} 
        onClick={() => setOpen(!open)}
      >
        <span></span><span></span><span></span>
      </button>

      <header className={`sidebar ${open ? "show" : ""}`}>
        <div className="profile">
          <img src={FotoPerfil} alt="profile" className="profile-img" />
          <h1 className="name">Christian Santiago Rodriguez</h1>

          <div className="social-icons">
            <a href="https://github.com/Kreork" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/christian-santiago-rodriguez-619334306/" target="_blank"><FaLinkedin /></a>
          </div>
        </div>

        <nav className="nav">
          <a href="#hero" onClick={closeMenu} className={activeSection === "hero" ? "active" : ""}>
            <FaHome className="icon" /> Inicio
          </a>
          <a href="#about" onClick={closeMenu} className={activeSection === "about" ? "active" : ""}>
            <FaUser className="icon" /> Sobre mí
          </a>
          <a href="#resume" onClick={closeMenu} className={activeSection === "resume" ? "active" : ""}>
            <FaFileAlt className="icon" /> Resumen
          </a>
          <a href="#portfolio" onClick={closeMenu} className={activeSection === "portfolio" ? "active" : ""}>
            <FaImages className="icon" /> Portafolio
          </a>
          <a href="#contact" onClick={closeMenu} className={activeSection === "contact" ? "active" : ""}>
            <FaEnvelope className="icon" /> Contacto
          </a>
        </nav>
      </header>
    </>
  );
}
