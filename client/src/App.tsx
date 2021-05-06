import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_USERS } from "./GraphQL/Queries";

import List from "./View/TableList/Index";
import UpdateUser from "./View/UpdatePassword";
import AppBar from "./Components/Appbar";
import UserForm from "./View/CreateUser";
import { Box, Container, Divider } from "@material-ui/core";

function App() {
  const [search, setSearch] = useState("")
  const [getUser, { data, loading }] = useLazyQuery(GET_ALL_USERS);

  console.log('search :>> ', search);

  useEffect(() => {
    getUser({variables: {name: ""}})
  }, [getUser])

  return (
    <div>
      <AppBar />
      <Container maxWidth="xl">
        <Box mt={2} />
        <UserForm refetch={getUser} />
        {/* <div className="createUser">
        <input type="text" placeholder="Name" onChange={e => setUserInfo({...userInfo, name: e.target.value})} />
        <input type="text" placeholder="User Name" onChange={e => setUserInfo({...userInfo, userName: e.target.value})} />
        <input type="text" placeholder="Password" onChange={e => setUserInfo({...userInfo, password: e.target.value})} />
        <button onClick={handleSubmit}>Create User</button>
        </div> */}
        <Box mt={3} />
        <Divider variant="middle" />
        <Box mt={3} />

        <List data={data?.getAllUsers} refetch={getUser} loading={loading} setSearch={setSearch} search={search} />
        <Box mt={2} />
        <UpdateUser />
      </Container>
    </div>
  );
}

export default App;
