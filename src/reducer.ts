import { combineReducers } from 'redux';
import {Actions} from './actions'
import { SET_USER } from './constants';
import { User } from './types';
import { produce, Draft } from 'immer';
import history from './history';


export interface AppState {
  user: User | undefined;

}

export const initialState: AppState = {
  user: undefined
}


export const appReducer = (state: AppState = initialState, action: Actions): AppState =>
  produce(state, (draft: Draft<AppState>) => {
    switch (action.type) {
      case SET_USER: {
        if (!state.user || state.user.userHash !== action.user.userHash) {
          draft.user = action.user;
        }
        history.push('/user');
        break;
      }
    }
  });

  


  export const rootReducer = combineReducers({
      app: appReducer
    });