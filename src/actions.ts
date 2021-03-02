import {SET_USER, FETCH_USER} from './constants';
import { User } from './types';


export interface SetUserAction {
  type: typeof SET_USER,
  user: User;
}


export type Actions =
  | SetUserAction;
  


  //Functions

  export function setUser(user: User): SetUserAction {
    return {
      type: SET_USER,
      user
    }
  }
  