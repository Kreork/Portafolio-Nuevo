import { useEffect, useState } from "react";
import HeroImage from "../assets/images/HackMorelos.jpg";
import HeroImage2 from "../assets/images/Lobo1.jpg";
import HeroImage3 from "../assets/images/Lobo2.jpg";
import "../assets/styles/Hero.css";

const roles = [
  "Ingeniero en Ciencias de la Computación",
  "Desarrollador Frontend",
  "Programador Python",
  "Programador JavaScript",
  "Programador Java",
  "Diseñador de Bases de Datos",
  "Desarrollador Móvil"
];

const images = [HeroImage, HeroImage2, HeroImage3];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 80;
    const pauseTime = 1200;

    const interval = setInterval(() => {
      const currentRole = roles[roleIndex];
      setText(currentRole.substring(0, charIndex + 1));
      setCharIndex(prev => prev + 1);

      if (charIndex === currentRole.length) {
        setTimeout(() => {
          setCharIndex(0);
          setRoleIndex(prev => (prev + 1) % roles.length);
        }, pauseTime);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [charIndex, roleIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex(prev => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      <img src={images[bgIndex]} alt="Hero" className="hero-bg fade-bg" />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">Christian Santiago Rodriguez</h1>
        <p className="hero-subtitle">
          Soy <span className="typed">{text}</span>
        </p>
        {/* Botón descargar CV */}
        <a
          href="/CV-Christian-Noviembre-2025.pdf"
          download
          className="hero-btn"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
}
