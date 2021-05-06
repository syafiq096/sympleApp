import React, { useEffect, useState } from "react";
import { UPDATE_PASSWORD } from "../../GraphQL/Mutation";
import { useMutation } from "@apollo/client";

function Index() {
  const [updatePassword, updatePasswordRes] = useMutation(UPDATE_PASSWORD);
  const [userData, setUserData] = useState({
    username: "",
    currentPassword: "",
    newPassword: "",
  });

  const updateUser = () => {
    updatePassword({
      variables: {
        username: userData.username,
        oldPassword: userData.currentPassword,
        newPassword: userData.newPassword,
      },
    }).catch(err => console.log('err :>> ', err));
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUserData({ ...userData, username: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="Current password"
        onChange={(e) => {
          setUserData({ ...userData, currentPassword: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="New Password"
        onChange={(e) => {
          setUserData({ ...userData, newPassword: e.target.value });
        }}
      />
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default Index;
