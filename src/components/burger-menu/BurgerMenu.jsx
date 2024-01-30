import React from "react";
import "./BurgerMenu.scss";
import burgerClose from "../../assets/png/burger-menu-close.png";
const BurgerMenu = () => {
  return (
    <div className="burger__menu_wrapper">
      <div className="burger__menu-inner">
      <div className="close__btn">
      <img src={burgerClose} alt="close" />
      </div>
        <div className="menu">..dfaf</div>
      </div>
    </div>
  );
};

export default BurgerMenu;
