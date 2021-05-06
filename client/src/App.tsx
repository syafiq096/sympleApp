import React, { useState } from 'react';
import {useMutation} from '@apollo/client';
import {CREATE_USER} from './GraphQL/Mutation'
import './App.css';

import List from './View/TableList/Index';

function App() {

  const [createUser, {error}] = useMutation(CREATE_USER);
  const [userInfo, setUserInfo] = useState({
    name: "",
    userName: "",
    password: ""
  });

  const handleSubmit =()=> {
    createUser(
      {variables: {
        name: userInfo.name, 
        username: userInfo.userName, 
        password: userInfo.password}
      })
  }


  
  return (
    
      <div className="createUser">
        <input type="text" placeholder="Name" onChange={e => setUserInfo({...userInfo, name: e.target.value})} />
        <input type="text" placeholder="User Name" onChange={e => setUserInfo({...userInfo, userName: e.target.value})} />
        <input type="text" placeholder="Password" onChange={e => setUserInfo({...userInfo, password: e.target.value})} />
        <button onClick={handleSubmit}>Create User</button>
        <List />
      </div>
  );
}

export default App;
