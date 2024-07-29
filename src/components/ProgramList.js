import React from 'react';
import '../styles/ProgramList.css';
import ProgramCard from './ProgramCard';

const ProgramList = ({ programs }) => {

  return (
    <div className="program-list">
      {programs.map(program => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
};

export default ProgramList;
