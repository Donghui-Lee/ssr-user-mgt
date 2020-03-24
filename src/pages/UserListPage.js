import React from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

const UserListPage = () => {
  return (
    <>
      <h2>사용자 조회</h2>
      <UserForm />
      <UserList />
    </>
  );
};

export default UserListPage;
