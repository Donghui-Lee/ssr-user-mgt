import React from "react";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <ul>
      <li>
        <Link to="/UserList">UserList</Link>
      </li>
    </ul>
  );
};

export default LeftMenu;
