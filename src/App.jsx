import { useEffect, useState } from "react";
import Cooperation from "./blocks/hero/Cooperation";
import Hero from "./blocks/hero/Hero";
import Machines from "./blocks/hero/Machines";
import Opportunities from "./blocks/hero/Opportunities";
import Footer from "./components/footer/Footer";
import BurgerMenu from "./components/burger-menu/BurgerMenu";
import { FaPhoneAlt } from "react-icons/fa";

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [consult, setConsult] = useState(false);

  useEffect(() => {}, [burgerMenu]);
  return (
    <>
      <Hero burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      <Opportunities />
      <Machines />
      <Cooperation consult={consult} setConsult={setConsult} />
      <Footer consult={consult} setConsult={setConsult} />
      <section className="call-buton">
        <a className="cc-calto-action-ripple" href="tel:+380968318989">
          <i className="fa fa-phone">
            <FaPhoneAlt fontSize={20} />
          </i>
        </a>
      </section>
      {/* {burgerMenu && <BurgerMenu/>} */}
    </>
  );
}

export default App;
