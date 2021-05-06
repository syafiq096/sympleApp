import React, { useState } from "react";
import { DELETE_USER } from "../../GraphQL/Mutation";
import { useMutation } from "@apollo/client";

import TableList from "../../Components/Table";
import Modal from "../../Components/UpdatePasswordModal";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  SvgIcon,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import CancelIcon from "@material-ui/icons/Cancel";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

interface compData {
  data?: any;
  refetch: any;
  loading: any;
  setSearch: any;
  search: string;
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function Index({ data = [{}], refetch, loading, setSearch, search }: compData) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [deleteSelectedUser, deleteRes] = useMutation(DELETE_USER);

  const [oenModal, setOpenModal] = useState(false)

  const closeModal =()=> {
    setOpenModal(false)
  }

  const deleteUser = (id: number): void => {
    deleteSelectedUser({ variables: { id: id } }).then(() => {
      enqueueSnackbar("Successfully Delete User", { variant: "success" });
      setSearch("");
      refetch({variables: {name: search}});
    });
  };

  const renderDelete = (id: number) => {
    return (
      <div>
        <Tooltip title="Delete User" aria-label="Update">
          <IconButton onClick={() => deleteUser(id)}>
            <SvgIcon fontSize="small">
              <CancelIcon />
            </SvgIcon>
          </IconButton>
        </Tooltip>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Card>
        <CardHeader title="User Table" />
        <Divider />
        <CardContent>
          <Grid 
          container 
          spacing={3} 
          alignItems="center"
          //justify="center"
          >
            <Grid item md={4} xs={12}>
              <TextField
                // error={Boolean(touched.login && errors.login)}
                fullWidth
                // helperText={touched.login && errors.login}
                label="Search User"
                name="fullname"
                // onBlur={handleBlur}
                onChange={e => setSearch(e.target.value)}
                value={search}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Button
                onClick={() => refetch({variables: {name: search}})}
                variant="contained"
                color="primary"
                size="large"
                // disabled={isSubmitting || !dirty}>
              >
                Search
              </Button>
            </Grid>
            <Grid item md={2} xs={4}>
              <Button
                //onClick={() => refetch({variables: {name: search}})}
                onClick={()=> setOpenModal(true)}
                variant="contained"
                color="primary"
                size="large"
                // disabled={isSubmitting || !dirty}>
              >
                Update Password
              </Button>
            </Grid>
          </Grid>
          <Box mt={2} />
          <Divider variant="middle" />
          <Box mt={2} />
          <TableList
            data={data.map((item: any, index: number) => {
              return [
                index + 1,
                item.name,
                item.username,
                item.password,
                renderDelete(item.id),
              ];
            })}
            isFetch={loading}
            header={["No", "Name", "Username", "Password", "Action"]}
          />
        </CardContent>
      </Card>
      <Modal
      open={oenModal}
      handleClose={closeModal}
      refetch={refetch} />
    </div>
  );
}

export default Index;
