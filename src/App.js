import React, { useState } from 'react';
import './App.css';
import NewUser from './Components/NewUser';
import UserList from './Components/UserList'


function App() {

  const [users, setUsers] = useState([])

  const AddNewUserHandler = user => {
    setUsers((prevUsers) =>{
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <NewUser onAddNewUser={AddNewUserHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
