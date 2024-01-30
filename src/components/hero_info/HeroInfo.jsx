import React from "react";
import "./HeroInfo.scss";
import Button from "../button/Button";
import machineImg from '../../assets/png/machine.png'
import machineWithNumbersImg from '../../assets/png/numbers-and-machine.png'
const HeroInfo = () => {
  return (
    <div className="hero__info">
      <div className="hero__info-left">
        <h1>
          VENDWATER: насолода <br /> бізнесом з кожної краплі!
        </h1>
        <h5>
          Прибутковий бізнес «під ключ»: виготовлення апаратів питної води.{" "}
          <br />
          Не шукайте споживачів – вони знайдуть вас самі
        </h5>
       <a href="#contacts"><Button text={"Отримати консультацію"}/></a>
      </div>
      <div className="hero__info-right">
        <div className="img">
          <img src={machineWithNumbersImg} alt="water__machine" />
        </div>

      </div>
    </div>
  );
};

export default HeroInfo;
