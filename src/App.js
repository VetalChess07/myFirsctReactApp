import mainCss from "./style/main.css";
import restCss from "./style/reset.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectsPage from "./pages/ProjectsPage";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectsPage/:id" element={<ProjectsPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
