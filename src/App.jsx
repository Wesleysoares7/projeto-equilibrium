import "./App.css";
import About from "./components/about/about";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Services from "./components/servicesSection/servicesSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
    </>
  );
}

export default App;
