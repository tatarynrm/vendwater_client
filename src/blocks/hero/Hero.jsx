import React from "react";
import "./styles/Hero.scss";
import heroImg from "../../assets/jpg/hero.jpg";
import Header from "../../components/header/Header";
import HeroInfo from "../../components/hero_info/HeroInfo";
const Hero = ({burgerMenu,setBurgerMenu}) => {

  return (
    <section className="section hero">
      <Header burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      <HeroInfo />
    </section>
  );
};

export default Hero;
