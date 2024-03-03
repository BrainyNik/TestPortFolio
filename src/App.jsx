import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AnimatePresence>
      <div className="overflow-x-hidden font-kalam">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
