import React, { useState } from 'react';
import './App.css';
import NewUser from './Components/NewUser';
import UserList from './Components/UserList'

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'user1',
    age: 16
  },
  {
    id: 'u2',
    name: 'user2',
    age: 29
  },
  {
    id: 'u3',
    name: 'user3',
    age: 36
  }
]

function App() {

  const [users, setUsers] = useState(DUMMY_USERS)

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
