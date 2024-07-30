import React from 'react';
import '../styles/UserProgramList.css';
import UserProgramCard from './UserProgramCard';

const UserProgramList = ({ programs }) => {
    return (
        <div className="user-program-list">
            {programs.map(user_program => (
                <UserProgramCard key={user_program.id} user_program={user_program} />
            ))}
        </div>
    );
};

export default UserProgramList;