import React from 'react';
import '../styles/ProgramList.css';
import ProgramCard from './ProgramCard';

const ProgramList = () => {
  const programs = [
    { id: 1, name: 'Программа 1', data: '12-24 ноября' },
    { id: 2, name: 'Программа 2', data: '12 часов' },
    { id: 3, name: 'Программа 3', data: '12 часов' },
    { id: 4, name: 'Программа 4', data: '20 часов' },
  ];

  return (
    <div className="program-list">
      {programs.map(program => (
        <ProgramCard key={program.id} program={program} />
      ))}
      <div className="pagination">
        <span>1 2 3 ... 7</span>
      </div>
    </div>
  );
};

export default ProgramList;
