import React, { useEffect, useState } from "react";
import "./styles/Machines.scss";
import machine1 from "../../assets/png/machine_1.png";
import machine2 from "../../assets/png/machine_2.png";
import machine3 from "../../assets/png/machine_3.png";
import axios from "axios";
const Machines = () => {
  const [machines, setMachines] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios("https://api.vendmarket.space/site");
      console.log(data);
      setMachines(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section id="machines" className="machines">
      <div className="block__title">
        <h4>
          <span>Комплектація та ціни</span>
        </h4>
      </div>
      <div className="machines__items">
        <div className="item">
          <div className="img">
            <img src={machine1} alt="" />
          </div>
          <div className="title">
            {/* Блок наливу <br />
            "Водомат V-WATER" */}
            {machines?.[0]?.machine_name}
          </div>
          <div className="price">ціна від {machines?.[0]?.machine_price}$</div>
          <button>
            {" "}
            <a href="#contacts">Отримати консультацію</a>{" "}
          </button>
        </div>
        <div className="item">
          <div className="img">
            <img src={machine2} alt="" />
          </div>
          <div className="title">
            {/* Блок наливу <br />
            "Водомат V-WATER" */}
            {machines?.[1]?.machine_name}
          </div>
          <div className="price">ціна від {machines?.[1]?.machine_price}$</div>
          <button>
            {" "}
            <a href="#contacts">Отримати консультацію</a>{" "}
          </button>
        </div>
        <div className="item">
          <div className="img">
            <img src={machine3} alt="" />
          </div>
          <div className="title">
            {/* Блок наливу <br />
            "Водомат V-WATER" */}
            {machines?.[2]?.machine_name}
          </div>
          <div className="price">ціна від {machines?.[2]?.machine_price}$</div>
          <button>
            {" "}
            <a href="#contacts">Отримати консультацію</a>{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Machines;
