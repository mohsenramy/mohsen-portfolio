import HeaderMUI from "./sections/HeaderMUI";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import { Toolbar } from "@mui/material";
import "./App.scss";
import Header from "./components/Header";
import Projects from "./sections/Projects";

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
