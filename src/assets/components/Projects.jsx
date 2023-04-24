import "./Projects.css";
import Proyecto1 from "../images/Proyecto1.png";
import Proyecto2 from "../images/Proyecto2.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <div>
        <div className="projects">
          <div className="project">
            <figure>
              <img src={Proyecto1} alt="Nombre del proyecto" />
            </figure>
            <div className="description">
              <h4>Nombre del proyecto</h4>
              <p>Descripción breve del proyecto.</p>
              <a href="ruta/al/proyecto">Ver proyecto</a>
              <a href="ruta/al/codigo">Ver código</a>
            </div>
          </div>
          <div className="project">
            <figure>
              <img src={Proyecto2} alt="Nombre del proyecto" />
            </figure>
            <div className="description">
              <h4>Nombre del proyecto</h4>
              <p>Descripción breve del proyecto.</p>
              <a href="ruta/al/proyecto">Ver proyecto</a>
              <a href="ruta/al/codigo">Ver código</a>
            </div>
          </div>
          <div className="project">
            <figure>
              <img src={Proyecto1} alt="Nombre del proyecto" />
            </figure>
            <div className="description">
              <h4>Nombre del proyecto</h4>
              <p>Descripción breve del proyecto.</p>
              <a href="ruta/al/proyecto">Ver proyecto</a>
              <a href="ruta/al/codigo">Ver código</a>
            </div>
          </div>
          <div className="project">
            <figure>
              <img src={Proyecto1} alt="Nombre del proyecto" />
            </figure>
            <div className="description">
              <h4>Nombre del proyecto</h4>
              <p>Descripción breve del proyecto.</p>
              <a href="ruta/al/proyecto">Ver proyecto</a>
              <a href="ruta/al/codigo">Ver código</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
