import React from "react";
import { DELETE_USER } from "../../GraphQL/Mutation";
import { useMutation } from "@apollo/client";

interface compData {
    data?: any;
    refetch: () => {}
}

function Index({data = [{}], refetch}: compData) {
  const [deleteSelectedUser, deleteRes] = useMutation(DELETE_USER);

  const deleteUser =(id: number): void => {
    deleteSelectedUser({variables: {id: id}}).then(() => refetch())
  }

  return (
    <div>
      {data.map((item: any) => {
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
