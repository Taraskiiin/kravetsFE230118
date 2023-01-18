export interface IUser {
    phone: string;
    name: string;
    nickname: string;
    email: string;
    position: string;
    photo: string;
  }
  
export interface IUserList {
  userList: IUser[]
  selectedUser: IUser | null
}