import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner-wrapper">
        <div className="footer-info">
          <div className="copyrights">© 2018-2023 Платформа, все права защищены</div>
          <div className="contacts">
            <a href="#">• Контактная информация</a> 
            <a href="#">• Конфиденциальность</a>
            <a href="#">• Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
