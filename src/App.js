import React from 'react';
import './App.css';
import AddUserForm from './Components/AddUserForm'
import UserList from './Components/UserList'


function App() {

  const users = [
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

  return (
    <div>
      <AddUserForm />
      <UserList users={users}/>
    </div>
  );
}

export default App;
