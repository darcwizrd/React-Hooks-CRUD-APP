import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm'


const App = () => {
  const usersData = [
    {id: 1, name: 'Laila', username: 'acousticTheramin'},
    {id: 2, name: 'Raphael', username: 'gnosticAngel'},
    {id: 3, name: 'Brunhilde', username: 'swordCrone'},
  ]
  
  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
  
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
        <h1>CRUD App with Hooks</h1>
          <div className="flex-row">
            <div className="flex-large">
              <h2>Add user</h2>
            </div>
            <div className="flex-large">
              <h2>View users</h2>
            </div>
          </div>
      </div>
    </div>
  );*/
}

export default App;
