import {
    FaCss3Alt,
    FaDatabase,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaJava,
    FaJs,
    FaNodeJs,
    FaPhp,
    FaPython,
    FaReact
} from "react-icons/fa";
import "../assets/styles/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-header">
        <h2>Habilidades Técnicas</h2>
        <p>Conocimientos adquiridos durante mi formación académica, proyectos personales y prácticas profesionales.</p>
      </div>

      <div className="skills-category">
        <h3>Lenguajes de Programación</h3>
        <div className="skills-grid">
          <div className="skill"><FaJava /> Java</div>
          <div className="skill"><FaPython /> Python</div>
          <div className="skill"><FaPhp /> PHP</div>
          <div className="skill"><FaJs /> JavaScript</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Control de Versiones</h3>
        <div className="skills-grid">
          <div className="skill"><FaGitAlt /> Git</div>
          <div className="skill"><FaGithub /> GitHub</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Frameworks & Backend</h3>
        <div className="skills-grid">
          <div className="skill"><FaNodeJs /> Node.js</div>
          <div className="skill"><FaReact /> Spring Boot</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Desarrollo Web & Móvil</h3>
        <div className="skills-grid">
          <div className="skill"><FaHtml5 /> HTML5</div>
          <div className="skill"><FaCss3Alt /> CSS3</div>
          <div className="skill"><FaReact /> React</div>
          <div className="skill"><FaReact /> React Native</div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Bases de Datos</h3>
        <div className="skills-grid">
          <div className="skill"><FaDatabase /> MySQL</div>
          <div className="skill"><FaDatabase /> SQLite</div>
          <div className="skill"><FaDatabase /> MongoDB</div>
        </div>
      </div>

    </section>
  );
}
