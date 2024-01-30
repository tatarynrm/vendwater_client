import React, { useEffect } from "react";
import "./Header.scss";
import burgerMenuIcon from "../../assets/png/burger-menu.png";
import burgerClose from "../../assets/png/burger-menu-close.png";
const Header = ({ burgerMenu, setBurgerMenu }) => {
  const handleBurgerMenuToggle = () => {
    setBurgerMenu(true);

    // Вимикаємо/включаємо прокрутку при відкритті/закритті меню
    document.body.style.overflowY = burgerMenu ? "hidden" : "auto";
  };
  useEffect(() => {}, [burgerMenu]);
  return (
    <header className="header">
      <a href="/">
        <span className="header__logo">VENDWATER</span>
      </a>
      <nav className={`header__nav ${burgerMenu ? "active" : " "}`}>
        {burgerMenu ? (
          <div
            onClick={() => setBurgerMenu(false)}
            className="burger__menu-close"
          >
            <img src={burgerClose} alt="burger__menu-icon" />
          </div>
        ) : null}
        <ul>
          <li onClick={() => setBurgerMenu(false)}>
            {" "}
            <a href="/">Головна</a>{" "}
          </li>
          <li onClick={() => setBurgerMenu(false)}>
            {" "}
            <a href="#machines">Комплектація та ціни</a>{" "}
          </li>
          <li onClick={() => setBurgerMenu(false)}>
            {" "}
            <a href="#opportunities">Співпраця</a>{" "}
          </li>
          <li onClick={() => setBurgerMenu(false)}>
            {" "}
            <a href="#contacts">Контакти</a>{" "}
          </li>
        </ul>
      </nav>
      <div onClick={() => setBurgerMenu(true)} className="burger__menu">
        <img src={burgerMenuIcon} alt="burger__menu-icon" />
      </div>
    </header>
  );
};

export default Header;
