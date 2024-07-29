import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#" className="active">ПРОГРАММЫ</a></li>
        <li><a href="#">ПРОФИЛЬ</a></li>
        <li><a href="#">СЕРТИФИКАТЫ</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
