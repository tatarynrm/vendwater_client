import React from "react";
import "./Footer.scss";
import instaSvg from "../../assets/svg/mdi_instagram.svg";
import tgSvg from "../../assets/svg/ic_twotone-telegram.svg";
import fcSvg from "../../assets/svg/uil_facebook.svg";
const Footer = ({consult,setConsult}) => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__inner-left">
          <div className="footer__logo">VENDWATER</div>
          <div className="footer__menu">
            <a href="/">Головна</a>
            <a href="#machines">Комплектація та ціни</a>
            <a href="#opportunities">Співпраця</a>
            <a href="#contacts">Контакти</a>
          </div>
        </div>

        <div className="footer__social">
          <div className="footer__social-icons">
            <a href="#">
              <img src={instaSvg} alt="instagram__logo" />
            </a>
            <a href="#">
              <img src={tgSvg} alt="tg__logo" />
            </a>
            <a href="#">
              <img src={fcSvg} alt="fc__logo" />
            </a>
          </div>
          <a href="#consultation">
            <button onClick={()=> setConsult(true)} className="footer__button"><a href="#contacts">Отримати консультацію</a></button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
