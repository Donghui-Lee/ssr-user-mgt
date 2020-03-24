import React from "react";
import { Route } from "react-router-dom";
import LeftMenu from "./components/LeftMenu";
import UserListPage from "./pages/UserListPage";

function App() {
  return (
    <div>
      <LeftMenu />
      <div></div>
      <Route path="/UserList" component={UserListPage} />
    </div>
  );
}

export default App;
