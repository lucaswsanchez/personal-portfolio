import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-text slide-in-blurred-top">
        <div className="header-name">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>
              <span className="white">Lucas</span>{" "}
              <span className="green">Sanchez</span>
            </h1>
          </Link>
        </div>
        <div className="header-list">
          <ul className="header-ul">
            <li>
              <Link className="link" to="/">
                INICIO
              </Link>
            </li>
            <li>
              <Link className="link" to="/aboutme">
                SOBRE MI
              </Link>
            </li>
            <li>
              <Link className="link" to="/projects">
                PROYECTOS
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
