import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { selectUser, closeUser } from "../../app/user/user-slice";
import { IUser } from "../../interfaces";

type ListItemProps = {
  user: IUser;
};

const ListItem: FC<ListItemProps> = ({ user }) => {
  const { photo, name, nickname } = user;

  const dispatch = useAppDispatch();
  const view = () => dispatch(selectUser(nickname));

  return (
    <div className="list-item">
      <img src={photo} />
      <div className="user-data">
        <span className="user-name">{name}</span>
        <span className="user-niclname">{nickname}</span>
      </div>
      <button className="button__view" onClick={view}>
        View
      </button>
    </div>
  );
};

export default ListItem;
