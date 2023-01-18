import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import userList from "./initData.json";
import { IUserList, IUser } from "../../interfaces";

const userInitialState: IUserList = { userList, selectedUser: null };

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    getUserList(state, action: PayloadAction<number | undefined>) {
      state.userList = action.payload ? userList.slice(0, action.payload) : userList
    },
    selectUser(state, action: PayloadAction<string>) {
      state.selectedUser = userList.find(user => user.nickname === action.payload) as IUser;
    },
    closeUser(state) {
        state.selectedUser = null;
    },
  },
});

export const { selectUser, getUserList, closeUser } = userSlice.actions;
export default userSlice;