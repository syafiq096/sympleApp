import React, { useEffect, useState } from "react";
import { GET_ALL_USERS } from "../../GraphQL/Queries";
import { DELETE_USER } from "../../GraphQL/Mutation";
import { useQuery, useMutation } from "@apollo/client";

function Index() {
  const { data, refetch } = useQuery(GET_ALL_USERS);
  const [deleteSelectedUser, deleteRes] = useMutation(DELETE_USER);

  const deleteUser =(id: number): void => {
    deleteSelectedUser({variables: {id: id}}).then(() => refetch())
  }

  return (
    <div>
      {data?.getAllUsers.map((item: any) => {
        return (
          <div key={item.id}>
            {item.name} / {item.username}
            <button onClick={() => deleteUser(item.id)}>Delete User</button>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
