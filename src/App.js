import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EdituserForm';


const App = () => {
  
  //Initial Dummy User Data
  const usersData = [
    {id: 1, name: 'Laila', username: 'acousticTheramin'},
    {id: 2, name: 'Raphael', username: 'gnosticAngel'},
    {id: 3, name: 'Brunhilde', username: 'swordCrone'},
  
  ]
  //Set user data in the array
  const [users, setUsers] = useState(usersData)

  //Add user data to the array
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  //Remove user data from the array
  const deleteUser = (id) => {
    
    setEditing(false)

    setUsers(users.filter((user) => user.id !== id))
  }

  const [editing, setEditing] = useState(false) //Is Edit Mode on?
  const initialFormState = { id:null, name: '', username: ''} //Initial empty state for the form
  const [currentUser, setCurrentUser] = useState(initialFormState) //Apply empty user state to the currentUser

  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({ id:user.id, name:user.name, username: user.username})
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
      <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
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
