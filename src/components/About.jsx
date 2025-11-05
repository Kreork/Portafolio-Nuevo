import FotoPerfil from "../assets/images/chris.jpg";
import "../assets/styles/About.css";


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container section-title">
        <h2>Sobre mí</h2>
        <p>
          Soy un recién egresado de Ingeniería en Ciencias de la Computación, apasionado por la tecnología y el aprendizaje continuo. 
          Me motiva enfrentar desafíos que me permitan crecer profesionalmente y adquirir nuevas
          habilidades.
          Durante mi formación académica, he participado en diversos proyectos que me han permitido desarrollar competencias en desarrollo 
          web y móvil, y actualmente estoy ampliando mis conocimientos en análisis de datos.
          Busco oportunidades que me permitan contribuir activamente y seguir aprendiendo en entornos dinámicos.
        </p>
      </div>

      <div className="container about-content">
        <div className="profile-image">
          <img src={FotoPerfil} alt="Christian Santiago" />
        </div>
        <div className="info">
          <h2>Ingeniero en Ciencias de la Computación</h2>
          <div className="details">
            <ul>
              <li><strong>Teléfono:</strong> +52 2228658596</li>
              <li><strong>Ciudad:</strong> Puebla, México</li>
              <li><strong>Correo:</strong> christian.santiagor@outlook.com</li>
              <li><strong>Última actualización:</strong> Noviembre 2025</li>
              <li><strong>Idiomas:</strong> Español: nativo, inglés: medio</li>
            </ul>
          </div>
          <p className="interests">
            Intereses: Videojuegos, ilustración, lectura y aprendizaje continuo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
