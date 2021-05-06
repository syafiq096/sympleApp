import { useMutation } from "@apollo/client";
import {CREATE_USER} from '../../GraphQL/Mutation';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

interface compData {
    refetch: any
}

function Index({refetch}: compData) {
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
          })
          .then(() => {
            refetch({variables: {name: ""}});
              setUserInfo({
                  ...userInfo,
                  name: '',
                  userName: '',
                  password: ''
            })
            }).catch(err => console.log(`err`, err))
      }

  return (
    <Card>
      <CardHeader title="Add New User" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              // error={Boolean(touched.login && errors.login)}
              fullWidth
              // helperText={touched.login && errors.login}
              label="Full Name"
              name="fullname"
              // onBlur={handleBlur}
              onChange={e => setUserInfo({...userInfo, name: e.target.value})}
              required
              value={userInfo.name}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              // error={Boolean(touched.login && errors.login)}
              fullWidth
              // helperText={touched.login && errors.login}
              label="User Name"
              name="username"
              // onBlur={handleBlur}
              onChange={e => setUserInfo({...userInfo, userName: e.target.value})}
              required
              value={userInfo.userName}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              // error={Boolean(touched.login && errors.login)}
              fullWidth
              // helperText={touched.login && errors.login}
              label="Password"
              name="password"
              // onBlur={handleBlur}
              onChange={e => setUserInfo({...userInfo, password: e.target.value})}
              required
              value={userInfo.password}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box m={2}>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          // disabled={isSubmitting || !dirty}>
        >
          Submit
        </Button>
      </Box>
    </Card>
  );
}

export default Index;
