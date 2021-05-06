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
  const [getUser, { data, loading, refetch }] = useLazyQuery(GET_ALL_USERS);

  useEffect(() => {
    getUser({variables: {name: ""}})
  }, [getUser])

  return (
    <div>
      <AppBar />
      <Container maxWidth="xl">
        <Box mt={2} />
        <UserForm refetch={refetch} />
        <Box mt={3} />
        <Divider variant="middle" />
        <Box mt={3} />
        <List data={data?.getAllUsers} refetch={refetch} loading={loading} setSearch={setSearch} search={search} />
        <Box mt={2} />
      </Container>
    </div>
  );
}

export default App;
