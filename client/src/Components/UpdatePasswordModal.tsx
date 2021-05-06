import { useMutation } from "@apollo/client";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, TextField } from "@material-ui/core";
import { UPDATE_PASSWORD } from "../GraphQL/Mutation";
import { useSnackbar } from "notistack";
import React, { useState } from "react";

interface compData {
    open: boolean;
    handleClose: any;
    refetch: any;
}

function UpdatePasswordModal({open, handleClose, refetch}: compData) {

    const { enqueueSnackbar } = useSnackbar();

    const [updatePassword, updatePasswordRes] = useMutation(UPDATE_PASSWORD);
    const [userData, setUserData] = useState({
      username: "",
      currentPassword: "",
      newPassword: "",
    });

    const handleUpdate =()=> {
        updatePassword({
            variables: {
              username: userData.username,
              oldPassword: userData.currentPassword,
              newPassword: userData.newPassword,
            },
          }).then(()=> {
            refetch({variables: {name: ""}});
            enqueueSnackbar("Successfully Update Password", { variant: "success" });
            setUserData({
                username: "",
                currentPassword: "",
                newPassword: "",
              });
          }).catch(err => {
            enqueueSnackbar(`${updatePasswordRes.error}`, { variant: "error" });
            setUserData({
              username: "",
              currentPassword: "",
              newPassword: "",
            });
          });
    }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="md"
      style={{height: "80vh"}}
    >
      <DialogTitle id="form-dialog-title">Update Password</DialogTitle>
      <Divider variant="middle" />
    <DialogContent style={{height: "20vh"}} >  
      <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="User Name"
              name="Uname"
              onChange={(e) => {
                setUserData({ ...userData, username: e.target.value });
              }}
              value={userData.username}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Currrent Password"
              name="username"
              onChange={(e) => {
                setUserData({ ...userData, currentPassword: e.target.value });
              }}
              value={userData.currentPassword}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="New Password"
              name="password"
              onChange={(e) => {
                setUserData({ ...userData, newPassword: e.target.value });
              }}
              value={userData.newPassword}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button 
        onClick={handleClose} 
        color="primary"
        variant="contained">
          Close
        </Button>
        <Button onClick={handleUpdate} color="primary" variant="contained">
          Update password
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpdatePasswordModal;
