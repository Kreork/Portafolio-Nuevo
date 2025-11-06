import { useState } from "react";
import "../assets/styles/Portafolio.css";

import ChatBoot from "../assets/images/ChatBoot.jpeg";
import LogoClaro from "../assets/images/logoClaro.png";
import MediMapa from "../assets/images/MediMapa.png";
import YoTeCuido from "../assets/images/YoTeCuido.jpg";

// Imágenes extra
import Bio from "../assets/images/BioCollector/Fepro.jpg";
import Bio2 from "../assets/images/BioCollector/Grupos.jpg";
import Bio3 from "../assets/images/BioCollector/Inicio.jpg";
import Bio4 from "../assets/images/BioCollector/logoOscuro.png";
import ChatBoot2 from "../assets/images/Chat/img1.png";
import ChatBoot3 from "../assets/images/Chat/LobOs.jpg";
import MediMapa2 from "../assets/images/MediMapa/Menu.png";
import YoTeCuido2 from "../assets/images/morelos/img1.png";
import YoTeCuido3 from "../assets/images/morelos/img2.png";
import YoTeCuido4 from "../assets/images/morelos/img3.png";

export default function Portfolio() {
  const [filter, setFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const projects = [
    {
      title: "Hackathon 1",
      desc: "Reko: ChatBoot",
      fullDesc:
        "Reko es un chatbot diseñado para integrarse con WhatsApp y Notion, automatizando notas, eventos y tareas mediante comandos simples. Proyecto ganador del LoboHackathon 2024 (Track Noticion).",
      categories: ["Hackathones"],
      img: ChatBoot,
      gallery: [ChatBoot, ChatBoot2, ChatBoot3],
      repo: [
        "https://github.com/irvyn2703/chatBotWhatsapp",
        "https://github.com/JesusPichon/API-Notion"
      ],
      tech: ["Notion API", "Node.js", "WhatsApp API"],
    },
    {
      title: "Yo te Cuido",
      desc: "Plataforma de salud digital",
      fullDesc:
        "Yo te Cuido ayuda a conectar personas mayores con cuidadores certificados. También ofrece oportunidades laborales para enfermeros. Proyecto participante en el Hackathon Morelos 2024.",
      categories: ["Hackathones", "Páginas Web"],
      img: YoTeCuido,
      gallery: [YoTeCuido, YoTeCuido2, YoTeCuido3, YoTeCuido4],
      repo: ["https://github.com/JesusPichon/api-enfermeras"],
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "BioCollector",
      desc: "App para gestión de tomas de plantas",
      fullDesc:
        "Aplicación móvil para registrar y compartir datos botánicos desde campo, desarrollada con React Native y SQLite.",
      categories: ["App"],
      img: LogoClaro,
      gallery: [LogoClaro, Bio, Bio2, Bio3, Bio4],
      repo: ["https://github.com/Kreork/Bio-Collector"],
      tech: ["React Native", "SQLite"],
    },
    {
      title: "MediMapa",
      desc: "Plataforma para solicitud de cuidados médicos",
      fullDesc:
        "MediMapa facilita la conexión entre pacientes y médicos cercanos, mostrando su ubicación en tiempo real en un mapa interactivo.",
      categories: ["Páginas Web"],
      img: MediMapa,
      gallery: [MediMapa, MediMapa2],
      repo: ["https://github.com/Kreork/MediMapa"],
      link: "https://saludconfiable.netlify.app/",
      tech: ["React", "MySql"],
    },
  ];

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  const nextImage = () => {
    setActiveImage(
      (prev) => (prev + 1) % (selectedProject?.gallery.length || 1)
    );
  };

  const prevImage = () => {
    setActiveImage(
      (prev) =>
        (prev - 1 + (selectedProject?.gallery.length || 1)) %
        (selectedProject?.gallery.length || 1)
    );
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-content">
        <h2 className="portfolio-title">Portafolio</h2>
        <p className="portfolio-desc">
          Aquí encontrarás una selección de mis proyectos más destacados, donde
          combino diseño, funcionalidad e innovación tecnológica.
        </p>

        {/* ==== FILTROS ==== */}
        <div className="filter-bar">
          {["Todos", "App", "Páginas Web", "Hackathones"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ==== GALERÍA ==== */}
        <div className="gallery-grid">
          {filteredProjects.map((project, i) => (
            <div key={i} className="gallery-card">
              <img
                src={project.img}
                alt={project.title}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <button
                  className="see-more-btn"
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveImage(0);
                  }}
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ==== MODAL DETALLE ==== */}
        {selectedProject && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <h3>{selectedProject.title}</h3>

              {/* Galería con navegación */}
              <div className="modal-gallery-container">
                <button className="nav-btn left" onClick={prevImage}>
                  ‹
                </button>
                <img
                  src={selectedProject.gallery[activeImage]}
                  alt="imagen del proyecto"
                  className="modal-main-img"
                />
                <button className="nav-btn right" onClick={nextImage}>
                  ›
                </button>
              </div>

              <div className="modal-thumbnails">
                {selectedProject.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    className={`thumb ${
                      activeImage === index ? "active" : ""
                    }`}
                    onClick={() => setActiveImage(index)}
                  />
                ))}
              </div>

              <p className="modal-desc">{selectedProject.fullDesc}</p>

              <div className="tech-list">
                {selectedProject.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className="modal-links">
                {/* Múltiples repositorios */}
                {selectedProject.repo &&
                  selectedProject.repo.map((r, i) => (
                    <a
                      key={i}
                      href={r}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repositorio {selectedProject.repo.length > 1 ? i + 1 : ""}
                    </a>
                  ))}

                {/* Mostrar solo si tiene link */}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Proyecto
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
