import React from 'react';

import './User.css'



const User = (props) => {
    
    return (
        <div className="user-info">
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
        </div>
    );
};

export default User;