import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { selectUser } from "../../app/user/user-slice";
import { IUser } from "../../interfaces";

import "./ListItems-styles.css";

type ListItemProps = {
  user: IUser;
};

const ListItem: FC<ListItemProps> = ({ user }) => {
  const { photo, name, nickname } = user;

  const dispatch = useAppDispatch();
  const view = () => dispatch(selectUser(nickname));

  return (
    <div className="list-item">
      <div className="user-avatar">
        <img src={`assets/foto/${photo}`} alt="user photo" />
      </div>
      <div className="user-data">
        <span className="user-name">{name}</span>
        <span className="user-nickname">{nickname}</span>
      </div>
      <button className="button__view" onClick={view}>
        View
      </button>
    </div>
  );
};

export default ListItem;
