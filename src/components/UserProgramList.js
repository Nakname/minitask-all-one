import React from 'react';
import '../styles/UserProgramList.css';
import UserProgramCard from './UserProgramCard';

const UserProgramList = () => {
    const user_programs = [
        { id: 1, name: 'Программа 1', data: '12 часов', status: 'Куплено' },
        { id: 1, name: 'Программа 2', data: '12 часов', status: 'Куплено' },
        { id: 1, name: 'Программа 3', data: '12 часов', status: 'Куплено' },
    ];

    return (
        <div className="user-program-list">
            {user_programs.map(user_program => (
                <UserProgramCard key={user_program.id} user_program={user_program} />
            ))}
        </div>
    );
};

export default UserProgramList;