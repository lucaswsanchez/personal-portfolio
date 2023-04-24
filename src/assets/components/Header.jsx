import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-text">
        <div className="header-name">
          <h1><span className="white">Lucas</span> <span className="green">Sanchez</span></h1>
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
