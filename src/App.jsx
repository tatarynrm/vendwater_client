import { useEffect, useState } from "react";
import Cooperation from "./blocks/hero/Cooperation";
import Hero from "./blocks/hero/Hero";
import Machines from "./blocks/hero/Machines";
import Opportunities from "./blocks/hero/Opportunities";
import Footer from "./components/footer/Footer";
import BurgerMenu from "./components/burger-menu/BurgerMenu";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [consult, setConsult] = useState(false);
  const [phone,setPhone] = useState(null)
const getPhone = async ()=>{
  try {
    const {data} = await axios.get(`https://api.vendmarket.space/site/contacts`);
    console.log(data);
    setPhone(data.phone_number)
  } catch (error) {
    console.log(error);
  }
}
  useEffect(() => {}, [burgerMenu]);
  useEffect(() => {getPhone()}, []);
  return (
    <>
      <Hero burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      <Opportunities />
      <Machines />
      <Cooperation consult={consult} setConsult={setConsult} />
      <Footer consult={consult} setConsult={setConsult} />
      <section className="call-buton">380968318989
        <a className="cc-calto-action-ripple" href={`tel:+${phone}`}>
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
