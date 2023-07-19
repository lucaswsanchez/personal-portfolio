import "../styles/AboutMe.css";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiRedux } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { AiFillCaretRight } from "react-icons/ai";
import SoftSkillsImage from "../assets/images/soft-skills-image.png";

const AboutMe = () => {
  return (
    <div className="about-me-container fade-in-fwd">
      <div className="about-me-introduction">
        <p>
          ¡Hola! Mi nombre es Lucas Sanchez y soy un apasionado desarrollador
          front-end. Me he formado como autodidacta y actualmente estoy
          estudiando la Tecnicatura en Análisis de Sistemas. Mi objetivo es
          seguir aprendiendo y creciendo en esta emocionante industria. Me
          encanta crear sitios web y aplicaciones que no solo sean visualmente
          atractivos, sino que también brinden una experiencia de usuario fluida
          y fácil de usar. Mi enfoque principal es en el desarrollo front-end,
          pero en este momento me encuentro expandiendo mis conocimientos al
          área de back-end con PHP y Laravel. Me encanta estar al día con las
          últimas tendencias y tecnologías, y siempre estoy buscando nuevas
          formas de mejorar mi trabajo. ¡Gracias por visitar mi portafolio!
        </p>
      </div>
      <div className="about-me-habilities">
        <h3 className="green">HABILIDADES TECNICAS</h3>
        <div className="about-me-technical-skills">
          <div className="tech-skills-text">
            <ul>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} /> JavaScript
              </li>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} /> TypeScript
              </li>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} /> HTML, CSS
              </li>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} /> Bootstrap
              </li>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} /> React: Router,
                Redux, Context
              </li>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} /> Firebase
              </li>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} /> Git & Github
              </li>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} />
                Experiencia en uso de APIs externas para la creación de
                aplicaciones web.
              </li>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} />
                Habilidades avanzadas en diseño y maquetación de interfaces de
                usuario, incluyendo experiencia en desarrollo responsive para
                múltiples dispositivos.
              </li>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} />
                Resolución de problemas, programación orientada a objetos,
                arquitectura de software.
              </li>
            </ul>
          </div>
          <div className="tech-skills-images">
            <IoLogoJavascript className="icon" size={50} color="#F7DF1E" />
            <AiFillHtml5 className="icon" size={50} color="#E34F26" />
            <IoLogoCss3 className="icon" size={50} color="#1572B6" />
            <BsFillBootstrapFill className="icon" size={50} color="#8512F7" />
            <GrReactjs className="icon" size={50} color="#61DAFB" />
            <SiRedux className="icon" size={50} color="#8F73BE" />
            <BsGit className="icon" size={50} color="#F05033" />
            <FaGithubSquare className="icon" size={50} color="white" />
            <ImMobile className="icon" size={50} color="#F0E2C7" />
          </div>
        </div>
        <h3 className="green">HABILIDADES BLANDAS</h3>
        <div className="about-me-soft-skills">
          <div className="soft-skills-images">
            <img src={SoftSkillsImage} alt="soft-skills-image" />
          </div>
          <div className="soft-skills-text">
            <ul>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} /> Colaboración
              </li>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} /> Comunicación
              </li>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} /> Adaptabilidad
              </li>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} /> Pensamiento
                crítico
              </li>
              <li>
                <AiFillCaretRight color="#27ae60" size={10} /> Gestión del
                tiempo
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-me-education">
        <h3 className="green">HISTORIAL EDUCATIVO</h3>
        <p>
          Desde el inicio del 2022 he estado inmerso en el mundo de la
          programación como autodidacta, enfocado principalmente en el
          desarrollo front-end. Durante este tiempo, he estado aprendiendo de
          manera autónoma sobre lenguajes y tecnologías como JavaScript, HTML,
          CSS, React, etc. Todo esto me ha permitido adquirir habilidades
          avanzadas en maquetación y diseño de interfaces de usuario, así como
          experiencia en desarrollo responsive para todo tipo de dispositivos.
          Además, mi experiencia en desarrollo web también abarca la
          implementación de diversas funcionalidades para mejorar la experiencia
          del usuario. <br /> A partir de 2023, decidí dar un paso más allá en
          el desarrollo de mis habilidades y actualmente estoy cursando la
          Tecnicatura en Análisis de Sistemas. Durante mi formación en la
          carrera, estoy profundizando en los fundamentos y la lógica de la
          programación, como asi tambien trabajando en mejorar mis habilidades
          en programación orientada a objetos, estructuras de datos, algoritmos
          y patrones de diseño. Además, estoy incursionando en el mundo del
          desarrollo back-end, lo que me permitirá adquirir conocimientos en
          áreas como la gestión de bases de datos, la arquitectura de servidores
          y la programación de aplicaciones escalables. <br />
          Cabe destacar que tengo un nivel C2 de inglés, lo que me permite
          comunicarme eficazmente en este idioma y acceder a una gran cantidad
          de recursos y documentación en línea para seguir aprendiendo y
          creciendo en industria.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
