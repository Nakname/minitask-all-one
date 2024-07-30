import React from 'react';
import '../styles/ProgramList.css';
import ProgramCard from './ProgramCard';

const ProgramList = ({ programs, onAddToUserPrograms }) => {

  return (
    <div className="program-list">
      {programs.map(program => (
        <ProgramCard key={program.id} program={program} onAddToUserPrograms={onAddToUserPrograms} />
      ))}
    </div>
  );
};

export default ProgramList;
