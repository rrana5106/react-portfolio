import "bootstrap/dist/css/bootstrap.min.css";

// Import all of Bootstrap’s JS
import * as bootstrap from "bootstrap";

// React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectGallery from "./pages/ProjectGallery";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-gallery" element={<ProjectGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>Not found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
