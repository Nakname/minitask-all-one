import React from 'react';
import '../styles/ProgramCard.css';

const ProgramCard = ({ program }) => {
  return (
    <div className="program-card">
      <div className="program-image" />
      <div className="program-details">
        <h3 className="details-header">{program.name}</h3>
        <p className="details-duration">{program.data}</p>
      </div>
      <div className="program-actions">
        <button className="action-more">Подробнее</button>
        <button className="action-go">Пройти</button>
      </div>
    </div>
  );
};

export default ProgramCard;
