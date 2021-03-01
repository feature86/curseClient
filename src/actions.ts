import {SET_USER} from './constants';


export interface SetUserAction {
  type: typeof SET_USER,
  user: string;
}



export type Actions =
  | SetUserAction;
  


  //Functions

  export function setUser(user: string): SetUserAction {
    return {
      type: SET_USER,
      user
    }
  }