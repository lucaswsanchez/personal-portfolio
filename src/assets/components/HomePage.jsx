import "./HomePage.css";
import image from "../images/portfolio-image.png"

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-text">
        <div className="home-page-introduction">
          <h5>BIENVENIDO A MI PORTAFOLIO</h5>
          <p className="home-page-name">Soy Lucas Sanchez</p>
          <p className="home-page-developer"><span className="green">Desarrollador Front-end</span></p>
        </div>
      </div>
      <div className="home-page-image">
        <img src={image} alt="portfolio-image"/>
      </div>
    </div>
  );
};

export default HomePage;
