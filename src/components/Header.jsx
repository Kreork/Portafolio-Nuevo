import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../assets/styles/Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa (solo móvil) */}
      <button className={`menu-btn ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </button>

      <header className={`sidebar ${open ? "show" : ""}`}>
        <div className="profile">
          <img src="/assets/img/chris.jpg" alt="profile" className="profile-img" />
          <h1 className="name">Christian Santiago Rodriguez</h1>

          {/* Social Icons debajo del nombre */}
          <div className="social-icons">
            <a href="https://github.com/Kreork" target="_blank" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/christian-santiago-rodriguez-619334306/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <nav className="nav">
          <a href="/CV-Christian-Septiembre-2025.pdf" download>📄 Descargar CV</a>
          <a href="#hero" onClick={() => setOpen(false)}>🏠 Inicio</a>
          <a href="#about" onClick={() => setOpen(false)}>👤 Sobre mí</a>
          <a href="#resume" onClick={() => setOpen(false)}>📚 Resumen</a>
          <a href="#portfolio" onClick={() => setOpen(false)}>🖼️ Portafolio</a>
          <a href="#contact" onClick={() => setOpen(false)}>✉️ Contacto</a>
        </nav>
      </header>
    </>
  );
}
