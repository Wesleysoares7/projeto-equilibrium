import "./App.css";
import About from "./components/about/about";
import FooterSection from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Services from "./components/servicesSection/servicesSection";
import Testimonials from "./components/testimonials/testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FooterSection />
    </>
  );
}

export default App;
