import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "./GraphQL/Queries";

import List from "./View/TableList/Index";
import UpdateUser from "./View/UpdatePassword";
import AppBar from "./Components/Appbar";
import UserForm from "./View/CreateUser";
import { Box, Container, Divider } from "@material-ui/core";

function App() {
  const { data, refetch, loading } = useQuery(GET_ALL_USERS);

  return (
    <div>
      <AppBar />
      <Container maxWidth="xl">
        <Box mt={2} />
        <UserForm refetch={refetch} />
        {/* <div className="createUser">
        <input type="text" placeholder="Name" onChange={e => setUserInfo({...userInfo, name: e.target.value})} />
        <input type="text" placeholder="User Name" onChange={e => setUserInfo({...userInfo, userName: e.target.value})} />
        <input type="text" placeholder="Password" onChange={e => setUserInfo({...userInfo, password: e.target.value})} />
        <button onClick={handleSubmit}>Create User</button>
        </div> */}
        <Box mt={3} />
        <Divider variant="middle" />
        <Box mt={3} />

        <List data={data?.getAllUsers} refetch={refetch} loading={loading} />
        <Box mt={2} />
        <UpdateUser />
      </Container>
    </div>
  );
}

export default App;
