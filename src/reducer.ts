import { combineReducers } from 'redux';
import {Actions} from './actions'
import { SET_USER } from './constants';

export interface AppState {
  user: String;
  date: String;
}

export const initialState: AppState = {
  user: '',
  date: '',
}


export const appReducer =(state: AppState = initialState, action: Actions):AppState => {

  switch (action.type) {
  case SET_USER: {
    console.log('set User');
    console.log(action.user);
    break;
  } 
  }

  return{
    user: 'user',
    date: 'asdasd'
  }
}



export const rootReducer = combineReducers({
  app: appReducer
});

