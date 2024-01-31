import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Sidebar />
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
    </div>
  );
};

export default App;
