import React from "react";

const UserList = ({ userList }) => {
  if(!userList) {
    return <div>데이터가 없습니다.</div>
  }
  return (
    <div>
      <table>
        <tr>
          <th>아이디</th>
          <th>이름</th>
          <th>이메일</th>
          <th>주소</th>
        </tr>
        {userList.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UserList;
