import {SET_USER, SET_USERS, PUSH_REDIRECT} from './constants';
import { User } from './types';


export interface SetUserAction {
  type: typeof SET_USER,
  user: User;
}
export interface SetUsersAction {
  type: typeof SET_USERS,
  users: User[];
}

export interface PushAction {
  type: typeof PUSH_REDIRECT;
  path: String;
}


export type Actions =
  | SetUserAction
  | SetUsersAction
  | PushAction;
  


  //Functions

  export function setUser(user: User): SetUserAction {
    return {
      type: SET_USER,
      user
    }
  }
  
  export function setUsers(users: User[]): SetUsersAction {
    return {
      type: SET_USERS,
      users
    }
  }

export function redirect(path: String): PushAction {
  return {
    type: PUSH_REDIRECT,
    path
    }
  }
  