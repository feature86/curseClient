
import { createSelector } from 'reselect';
import { AppState } from '../reducer';
import {  } from '../types';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectApp = (state: any) => {
  return state.app as AppState;
};

export const makeSelectApp = () =>
  createSelector(selectApp, (state) => {
    return state;
  });

