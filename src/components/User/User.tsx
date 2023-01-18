import React, { FC } from "react";

import { useAppDispatch } from "../../app/hooks";
import { closeUser } from "../../app/user/user-slice";
import { IUser } from "../../interfaces";

import closeSvg from "./close.svg";
import "./User-styles.css";

type UserProps = {
  user: IUser;
};

const User: FC<UserProps> = ({ user }) => {
  const { phone, name, nickname, email, position, photo } = user;

  const dispatch = useAppDispatch();
  const close = () => dispatch(closeUser());
  const sendMessage = () => console.log(`Message sent to ${email}`);

  return (
    <div className="pop-up">
      <div className="top-content">
        <img
          className="top-content__photo"
          src={`assets/foto/${photo}`}
          alt="user photo"
        />
        <p className="top-content__username">{name}</p>
        <p className="top-content__position">{position}</p>
      </div>
      <hr />
      <div className="bottom-content">
        <a className="bottom-content__phone" href={`tel:${phone}`}>
          <span>Phone: </span>
          {phone}
        </a>
        <a className="bottom-content__url" href="#">
          <span>Nickname: </span>
          {nickname}
        </a>
        <a className="bottom-content__email" href={`mailto:${email}`}>
          <span>Email: </span>
          {email}
        </a>
      </div>
      <button className="button__send-message" onClick={sendMessage}>
        Send message
      </button>
      <button className="button__close" onClick={close}>
        <img src={closeSvg} alt="close icon" />
      </button>
    </div>
  );
};

export default User;
