import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./sections/Header";
import ProductsAndPartners from "./sections/ProductsAndPartners";
import AboutUs from "./sections/About";
import TechStack from "./sections/TechStack";
import CaseStudy from "./sections/CaseStudy";
import Brochure from "./sections/Brochure";
import Footer from "./sections/Footer";
import Modal from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <div className="App">
        <Header setIsOpen={setIsOpen} />
        <ProductsAndPartners />
        <AboutUs />
        <TechStack />
        <CaseStudy />
        <Brochure />
        <Footer />
        {
        isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        }
      </div>
    </>
  );
}

export default App;
