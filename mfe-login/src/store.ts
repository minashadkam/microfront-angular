import { configureStore, createSelector } from '@reduxjs/toolkit';
import {BehaviorSubject, Observable} from 'rxjs';

const DEFAULT_USERS_VALUE = null;
const sbj$: BehaviorSubject<any>= new BehaviorSubject<any>([]);
let userObs$: Observable<any>;

function updateUser(currentUser: any){
  return {
    type: 'UPDATE_USERS',
    payload: currentUser,
  }
}

const bindUpdateUser = (user: any) => Store.dispatch(updateUser(user));

export function updateCurrentUser(user: any) {
  bindUpdateUser(user);
  userObs$ = sbj$.asObservable();
  sbj$.next(user);
}

export function getUserState() {
  return Store.getState().currentUser;
}




const Store = configureStore({ reducer: reducer_USERS_update });

function reducer_USERS_update(state = {currentUser: DEFAULT_USERS_VALUE}, action: { type: any; payload: any; }){
  switch(action.type){
    case 'UPDATE_USERS':
      return {...state, currentUser: action.payload};
    default:
      return state;
  }
}




export default Store;
