import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>USERNAME</th>
                  <th>EMAIL</th>
                  <th>ROL</th>
                  <th className="text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {users.map((user) => (
                  <UserItem
                    key={user.id}
                    user={user}
                    onEdit={() => onEdit(user)}
                    onDelete={() => onDelete(user)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
