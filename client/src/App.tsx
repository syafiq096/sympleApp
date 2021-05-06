import React, { useState } from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {CREATE_USER} from './GraphQL/Mutation';
import { GET_ALL_USERS } from "./GraphQL/Queries";

import List from './View/TableList/Index';
import UpdateUser from './View/UpdatePassword';
import AppBar from './Components/Appbar';

function App() {
  const { data, refetch } = useQuery(GET_ALL_USERS);
  const [createUser, createUserRes] = useMutation(CREATE_USER);
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
      }).then(() => refetch()).catch(err => console.log(`err`, err))
  }

  return (
      <div>
        <AppBar />
      <div className="createUser">
        <input type="text" placeholder="Name" onChange={e => setUserInfo({...userInfo, name: e.target.value})} />
        <input type="text" placeholder="User Name" onChange={e => setUserInfo({...userInfo, userName: e.target.value})} />
        <input type="text" placeholder="Password" onChange={e => setUserInfo({...userInfo, password: e.target.value})} />
        <button onClick={handleSubmit}>Create User</button>
        <List data={data?.getAllUsers} refetch={refetch}/>
        <UpdateUser />
      </div>
      </div>
  );
}

export default App;
