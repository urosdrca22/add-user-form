import React from 'react';

import './UserList.css';


const UserList = (props) => {

    return (
        <div>
            <ul className="user-list">
                {props.users.map((user) => (
                    <li className="individual-user" key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;


// AddUserForm onSubmit > pass data to User > pass User to UserList > Output the list in App.js