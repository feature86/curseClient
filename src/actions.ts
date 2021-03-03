import {SET_USER, PUSH_REDIRECT, ADD_CURSE} from './constants';
import { User } from './types';


export interface SetUserAction {
  type: typeof SET_USER,
  user: User;
}

export interface PushAction {
  type: typeof PUSH_REDIRECT;
  path: String;
}


export type Actions =
  | SetUserAction
  | PushAction;
  


  //Functions

  export function setUser(user: User): SetUserAction {
    return {
      type: SET_USER,
      user
    }
  }

export function redirect(path: String): PushAction {
  return {
    type: PUSH_REDIRECT,
    path
    }
  }
  