import React, { useState } from 'react';

import './AddUserForm.css'

const AddUserForm = (props) => {

    const[enteredName, setEnteredName] = useState('');
    const[enteredAge, setEnteredAge] = useState('');

    const nameChangeHandler = (event) =>{
        setEnteredName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const formSubmitHandler = event => {
        event.preventDefault();

        const userData = {
            name: enteredName,
            age: enteredAge
        };

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            alert('Please fill out both fields')
            return;
        };
        if (+enteredAge < 1){
            alert('Age must be a number larger than 0')
            return;
        };

        props.onSaveUserData(userData);
        setEnteredName('');
        setEnteredAge('');
    };
    
    
    return(
        <div className="user-form">
            <form onSubmit={formSubmitHandler}>
                <div className="add-user-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={enteredName} id="name" onChange={nameChangeHandler}></input>
                </div>
                <div className="add-user-field">
                    <label htmlFor="age">Age</label>
                    <input type="number" value={enteredAge} id="age" onChange={ageChangeHandler}></input>
                </div>
                <div className="add-user-btn">
                    <button type="submit">Add User</button>
                </div>
            </form>
        </div>
    )
}

export default AddUserForm;