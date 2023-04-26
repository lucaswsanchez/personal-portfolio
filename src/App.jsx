import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./assets/pages/AboutMe";
import Contact from "./assets/pages/Contact";
import Projects from "./assets/pages/Projects";
import HomePage from "./assets/pages/HomePage";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
