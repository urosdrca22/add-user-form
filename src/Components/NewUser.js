import React from 'react';

import AddUserForm from './AddUserForm';

const NewUser = (props) => {

    const saveUserDataHandler = (enteredUserData) => {
        const userData = {
          ...enteredUserData,
          id: Math.random().toString()
        };
        props.onAddNewUser(userData);
      };

    return (
    <div>
        <AddUserForm onSaveUserData={saveUserDataHandler}/>
    </div>
    );
};

export default NewUser;