import { combineReducers } from 'redux';
import {Actions} from './actions'
import { PUSH_REDIRECT, SET_USER, SET_USERS} from './constants';
import { User } from './types';
import { produce, Draft } from 'immer';
import history from './history';


export interface AppState {
  user: User | undefined;
  users: User[];
}

export const initialState: AppState = {
  user: undefined,
  users: []
}


export const appReducer = (state: AppState = initialState, action: Actions): AppState =>
  produce(state, (draft: Draft<AppState>) => {
    switch (action.type) {
      case SET_USER: {
        if (!state.user || state.user.userHash !== action.user.userHash) {
          draft.user = action.user;
        }
        window.localStorage.setItem('curseUser', `${action.user.userHash}`);
        history.push('/user');
        break;
      }
      case SET_USERS: {
        draft.users = action.users;
        break;
      }
      case PUSH_REDIRECT: {
        history.push(`${action.path}`);
        break;
      }
    }
  });

  


  export const rootReducer = combineReducers({
      app: appReducer
    });