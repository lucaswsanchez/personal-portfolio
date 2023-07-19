import "../styles/Projects.css";
import { AiFillCaretRight } from "react-icons/ai";
import Proyecto1 from "../assets/images/Proyecto1.png";
import Proyecto2 from "../assets/images/Proyecto2.png";
import Proyecto3 from "../assets/images/Proyecto3.png";
import SportBlog from "../assets/images/SportBlog.png";
import IphonePortfolio from "../assets/images/IphonePortfolio.png";
import Yuh from "../assets/images/YUH.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <div>
        <div className="projects">
          <div className="project fade-in-fwd">
            <figure>
              <img src={SportBlog} alt="Nombre del proyecto" />
            </figure>
            <div className="description">
              <h5>SPORT BLOG</h5>
              <ul>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Desarrollado con React
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Implementacion de rutas con React Router
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Firebase para API con los equipos
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Utilizacion de React Context para gestion de datos
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Firebase para autenticacion con email
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Seccion para añadir comentarios en las regiones
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Diseño responsive para todos los dispositivos
                </li>
              </ul>
              <div className="description-a">
                <a href="https://sport-project.netlify.app/" target="_blank">
                  <button>Ver proyecto</button>
                </a>
                <a
                  href="https://github.com/lucaswsanchez/sport-project"
                  target="_blank"
                >
                  <button>Ver código</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project fade-in-fwd">
            <figure>
              <img src={Yuh} alt="Nombre del proyecto" />
            </figure>
            <div className="description">
              <h5>YUH</h5>
              <ul>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Desarrollado con React
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Implementacion de rutas con React Router
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Firebase para API con productos
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Filtrado de productos por marca
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Paginacion
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Diseño responsive para todos los dispositivos
                </li>
              </ul>
              <div className="description-a">
                <a href="https://yuh-website.netlify.app/" target="_blank">
                  <button>Ver proyecto</button>
                </a>
                <a
                  href="https://github.com/lucaswsanchez/yuh-ecommerce"
                  target="_blank"
                >
                  <button>Ver código</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project fade-in-fwd">
            <figure>
              <img src={Proyecto1} alt="Nombre del proyecto" />
            </figure>
            <div className="description">
              <h5>E-COMMERCE</h5>
              <ul>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Desarrollado con React
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Carrito de compras
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Barra de busqueda para los productos
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Carrusel de imagenes
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Filtrado por categoria y precio
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Obtencion productos desde "Fake Store API"
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Modal para ver descripcion e imagen de los productos
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Paginacion
                </li>
              </ul>
              <div className="description-a">
                <a
                  href="https://lucaswsanchez.github.io/react-ecommerce/"
                  target="_blank"
                >
                  <button>Ver proyecto</button>
                </a>
                <a
                  href="https://github.com/lucaswsanchez/react-ecommerce"
                  target="_blank"
                >
                  <button>Ver código</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project fade-in-fwd">
            <figure>
              <img src={IphonePortfolio} alt="Nombre del proyecto" />
            </figure>
            <div className="description">
              <h5>IPHONE PORTFOLIO</h5>
              <ul>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Desarrollado con React
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Implementacion traduccion en ingles y español
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Implementacion de rutas con React Router
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Formulario de contacto
                </li>
              </ul>
              <div className="description-a">
                <a
                  href="https://lucaswsanchez-iphone-portfolio.netlify.app/"
                  target="_blank"
                >
                  <button>Ver proyecto</button>
                </a>
                <a
                  href="https://github.com/lucaswsanchez/iphone-portfolio"
                  target="_blank"
                >
                  <button>Ver código</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project fade-in-fwd">
            <figure>
              <img src={Proyecto2} alt="Nombre del proyecto" />
            </figure>
            <div className="description">
              <h5>PORTAFOLIO</h5>
              <ul>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Desarrollado con React
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Implementacion de rutas con React Router
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Formulario de contacto
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Diseño responsive para todos los dispositivos
                </li>
              </ul>
              <div className="description-a">
                <a
                  href="https://lucaswsanchez-portfolio.netlify.app/"
                  target="_blank"
                >
                  <button>Ver proyecto</button>
                </a>
                <a
                  href="https://github.com/lucaswsanchez/personal-portfolio"
                  target="_blank"
                >
                  <button>Ver código</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project fade-in-fwd">
            <figure>
              <img src={Proyecto3} alt="Nombre del proyecto" />
            </figure>
            <div className="description">
              <h5>LANDING PAGE</h5>
              <ul>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Mini proyecto de maquetado que realizé en mis comienzos para
                  una postulacion de maquetador, donde habia que copiar una
                  imagen enviada.
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Pagina estática solo con HTML y CSS
                </li>
                <li>
                  <AiFillCaretRight color="#27ae60" size={10} />
                  Diseño responsive para todos los dispositivos
                </li>
              </ul>

              <div className="description-a">
                <a
                  href="https://lucaswsanchez-landing-page.netlify.app/"
                  target="_blank"
                >
                  <button>Ver proyecto</button>
                </a>
                <a
                  href="https://github.com/lucaswsanchez/landing-page-html-css"
                  target="_blank"
                >
                  <button>Ver código</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
