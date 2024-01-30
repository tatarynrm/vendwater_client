import React from "react";
import "./styles/Machines.scss";
import machine1 from "../../assets/png/machine_1.png";
import machine2 from "../../assets/png/machine_2.png";
import machine3 from "../../assets/png/machine_3.png";
const Machines = () => {
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
            Блок наливу <br />
            "Водомат V-WATER"
          </div>
          <div className="price">ціна від 1500$</div>
          <button> <a href="#contacts">Отримати консультацію</a> </button>
        </div>
        <div className="item">
          <div className="img">
            <img src={machine2} alt="" />
          </div>
          <div className="title">
            Блок наливу <br />
            "Водомат V-WATER"
          </div>
          <div className="price">ціна від 1500$</div>
          <button> <a href="#contacts">Отримати консультацію</a> </button>
        </div>
        <div className="item">
          <div className="img">
            <img src={machine3} alt="" />
          </div>
          <div className="title">
            Блок наливу <br />
            "Водомат V-WATER"
          </div>
          <div className="price">ціна від 1500$</div>
          <button> <a href="#contacts">Отримати консультацію</a> </button>
        </div>
      </div>
    </section>
  );
};

export default Machines;
