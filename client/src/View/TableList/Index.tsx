import React from "react";
import { DELETE_USER } from "../../GraphQL/Mutation";
import { useMutation } from "@apollo/client";

import TableList from '../../Components/Table'
import { Card, CardContent, CardHeader, Divider, IconButton, makeStyles, SvgIcon, Tooltip } from "@material-ui/core";
import {  useSnackbar } from 'notistack';
import CancelIcon from '@material-ui/icons/Cancel';

interface compData {
    data?: any;
    refetch: () => {};
    loading: any
}

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));


function Index({data = [{}], refetch, loading}: compData) {

  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [deleteSelectedUser, deleteRes] = useMutation(DELETE_USER);

  const deleteUser =(id: number): void => {
    deleteSelectedUser({variables: {id: id}})
    .then(() => {
      refetch();
      enqueueSnackbar('Successfully Delete User', { variant: "success"});
    })
  }

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
      <Card >
        <CardHeader
        title="User Table" />
        <Divider />
        <CardContent>
      <TableList 
      data={
        data.map((item: any , index: number) => {
          return [
            index +1,
            item.name,
            item.username,
            renderDelete(item.id)
          ]
      })} 
      isFetch={loading}
      header={['No', 'Name', 'Username', 'Action']}
       />
       </CardContent>
       </Card>
    </div>
  );
}

export default Index;
