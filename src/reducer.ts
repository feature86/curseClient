import { combineReducers } from 'redux';
import {Actions} from './actions'
import { SET_USER } from './constants';
import { User } from './types';

export interface AppState {
  user: User | undefined;

}

export const initialState: AppState = {
  user: undefined
}


export const appReducer =(state: AppState = initialState, action: Actions):AppState => {

  switch (action.type) {
    case SET_USER: {
      console.log('set User');
      console.log(action.user);
      
        return {
          ...state,
          user: action.user
        }
    } 
    
    default: {
      return state;
    }
  }

  
  
}



export const rootReducer = combineReducers({
  app: appReducer
});

