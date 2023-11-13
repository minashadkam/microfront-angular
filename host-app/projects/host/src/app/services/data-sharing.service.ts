import { Injectable } from '@angular/core';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private _user?: User;
  constructor() { }


  get user(): User {
    return <User>this._user;
  }

  set user(value: User) {
    this._user = value;
  }

}
