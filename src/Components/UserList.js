import React from 'react';

import './UserList.css';
import User from './User';

const UserList = (props) => {

    return (
        <div className="user-list">
            {props.users.map((user) => (
            <User 
                name={user.name} 
                age={user.age}
            />
            ))};
            
        </div>
    );
};

export default UserList;


// AddUserForm onSubmit > pass data to User > pass User to UserList > Output the list in App.js