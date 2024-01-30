import React from "react";
import watrImage from '../../assets/png/man_water.png'
const Opportunities = () => {
  return (
    <section id="opportunities" className="opportunities">
      <div className="block__title">
        <h4><span>Наші Переваги</span></h4>
      </div>
      <div className="items">
        <div className="left__block">
          <img src={watrImage} alt="" />
        </div>
        <div className="right__block">
          <ul>
            <li>Супровід та консультування по схемі «бізнес під ключ»</li>
            <li>Установка та технічна підтримка нашими фахівцями</li>
            <li>Допомога з пошуком місця для установки водомату</li>
            <li>Розробка унікальних дизайнів апаратів</li>
            <li>Розробка бізнес плану</li>
            <li>Власне виробництво сертифікованих вендінгових апаратів</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
