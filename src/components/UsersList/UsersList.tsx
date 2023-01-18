import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUserList } from "../../app/user/user-slice";
import { IUser } from "../../interfaces";

import ListItem from "../ListItem/ListItem";
import User from "../User/User";
import "./UserList-styles.css";

const UsersList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserList(3));
  }, []);

  const selectedUser = useAppSelector((state) => state.user.selectedUser);
  const userList = useAppSelector((state) => state.user.userList);

  const showAllUsers = () => dispatch(getUserList());
  const isFullList = userList.length > 3;

  return (
    <div className="users-list">
      {userList.map((user: IUser) => (
        <ListItem user={user} key={user.nickname} />
      ))}
      {selectedUser && <User user={selectedUser} />}
      {!isFullList && (
        <button className="button__view-all" onClick={showAllUsers}>
          View All
        </button>
      )}
    </div>
  );
};

export default UsersList;
