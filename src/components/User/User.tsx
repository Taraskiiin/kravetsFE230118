import React, { FC } from "react";

import { useAppDispatch } from "../../app/hooks";
import { closeUser } from "../../app/user/user-slice";
import { IUser } from "../../interfaces";

import closeSvg from "../../assets/close.svg";

type UserProps = {
  user: IUser;
};

const User: FC<UserProps> = ({ user }) => {
  const { phone, name, nickname, email, position, photo } = user;

  const dispatch = useAppDispatch();
  const close = () => dispatch(closeUser());
  const sendMessage = () => console.log(`Message sent to ${email}`);

  return (
    <>
      <div className="top-content">
        <img className="top-content__photo" src={photo} alt="user photo" />
        <p className="top-content__username">{name}</p>
        <p className="top-content__position">{position}</p>
      </div>
      <div className="bottom-content">
        <a className="bottom-content__phone" href={`tel:${phone}`}>
          {phone}
        </a>
        <a className="bottom-content__url" href="#">
          {nickname}
        </a>
        <a className="bottom-content__email" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
      <button className="button__send-message" onClick={sendMessage}>
        Send message
      </button>
      <button className="button__close" onClick={close}>
        <img src={closeSvg} alt="close icon" />
      </button>
    </>
  );
};

export default User;
