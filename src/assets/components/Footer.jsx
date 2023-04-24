import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/lucaswsanchez/" target="_blank">
          <FaLinkedin size={30} color="#27ae60" />
        </a>
        <a href="https://github.com/lucaswsanchez" target="_blank">
          <FaGithubSquare size={30} color="#27ae60" />
        </a>
      </div>
      <div className="footer-text">
        <p>Copyright © 2023 by Lucas Sanchez | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
