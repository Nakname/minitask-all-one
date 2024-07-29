import React from 'react';
import '../styles/UserProgramCard.css';

const UserProgramCard = ({ user_program }) => {
    return (
        <div className="user-card">
            <div className="user_program-image" />
            <div className="program-details">
                <h3>{user_program.name}</h3>
              <p>{user_program.data}</p>
              <p>{user_program.status}</p>
            </div>
            <div className="program-actions">
              <button className="action-watch">Смотреть</button>    
            </div>
        </div>
    );
};

export default UserProgramCard;