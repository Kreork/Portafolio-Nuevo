import { FaAward, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "../assets/styles/Formacion.css";

const Formacion = () =>{
return (
    <section id="formacion" className="formacion-section">

      <div className="title-container">
        <h2>Trayectoria & Experiencia</h2>
        <p>Desarrollo constante en el ámbito tecnológico mediante formación académica, práctica profesional y logros destacados.</p>
      </div>

      <div className="formacion-grid">

        {/* Educación */}
        <div className="formacion-block">
          <div className="block-header">
            <FaGraduationCap className="block-icon" />
            <h3 className="block-title">Educación</h3>
          </div>

          <div className="item">
            <h4 className="item-title">Benemérita Universidad Autónoma de Puebla (BUAP)</h4>
            <span className="item-date">2019 — 2025</span>
            <p>
              Ingeniería en Ciencias de la Computación con enfoque en desarrollo de software,
              estructuras de datos, arquitectura de sistemas y tecnologías web.
            </p>
          </div>

          <div className="item">
            <h4 className="item-title">CETIS 104 — Técnico en Programación</h4>
            <span className="item-date">2016 — 2019</span>
            <p>
              Formación técnica especializada en programación estructurada, bases de datos y principios de ingeniería de software.
            </p>
          </div>
        </div>

        {/* Experiencia Profesional */}
        <div className="formacion-block">
          <div className="block-header">
            <FaBriefcase className="block-icon" />
            <h3 className="block-title">Experiencia Profesional</h3>
          </div>

          <div className="item">
            <h4 className="item-title">Smartkode · Prácticas Profesionales</h4>
            <span className="item-date">Enero 2025 — Mayo 2025</span>
            <p>
              Desarrollé e integré funcionalidades utilizando <strong>Spring Boot</strong> bajo el modelo MVC,
              aplicando principios de <strong>código limpio, documentación profesional</strong> y arquitectura modular.
              Participé en procesos de implementación, pruebas y mejora de componentes backend.
            </p>
          </div>
        </div>

        {/* Logros */}
        <div className="formacion-block">
          <div className="block-header">
            <FaAward className="block-icon" />
            <h3 className="block-title">Logros Destacados</h3>
          </div>

          <div className="item">
            <h4 className="item-title">Lobo Hackathon – BUAP</h4>
            <span className="item-date">Abril 2024</span>
            <p>
              Desarrollo de un asistente inteligente integrado con WhatsApp y Notion, diseñado para optimizar la organización académica mediante la automatización. 
              La solución permite gestionar notas, ideas y eventos de forma eficiente, además de enviar recordatorios y notificaciones directamente al dispositivo móvil.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Formacion;

