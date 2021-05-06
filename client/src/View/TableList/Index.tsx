import React from "react";
import { DELETE_USER } from "../../GraphQL/Mutation";
import { useMutation } from "@apollo/client";

import TableList from '../../Components/Table'
import { IconButton, SvgIcon, Tooltip } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'

interface compData {
    data?: any;
    refetch: () => {}
}

function Index({data = [{}], refetch}: compData) {
  const [deleteSelectedUser, deleteRes] = useMutation(DELETE_USER);

  const deleteUser =(id: number): void => {
    deleteSelectedUser({variables: {id: id}}).then(() => refetch())
  }

  const renderDelete = (id: number) => {
    return (
      <div>
          <Tooltip title="Invoice" aria-label="Update">
            <IconButton onClick={() => deleteUser(id)}>
              <SvgIcon fontSize="small">
                <MenuIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
      </div>
    );
  };

  return (
    <div>
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
      header={['No', 'Name', 'Username', 'Action']}
      align={['center, center, center, center']}
       />
    </div>
  );
}

export default Index;
