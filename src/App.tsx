import HeaderMUI from "./Sections/HeaderMUI";
import Footer from "./Sections/Footer";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Work from "./Sections/Work";
import Contact from "./Sections/Contact";
import { Toolbar } from "@mui/material";
import "./App.scss";
import Header from "./Sections/Header";
import Projects from "./Sections/Projects";

function App() {
  return (
    <div className="appContainer">
      {/* <Header /> */}
      <Header />
      <Home />
      <About />
      <Work />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
