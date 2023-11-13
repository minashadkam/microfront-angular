import { Component, OnInit } from '@angular/core';
import {updateCurrentUser} from "../../store";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(username: HTMLInputElement, password: HTMLInputElement){
    const user = {name:username.value ,password:password.value};


    const onUserSignIn = new CustomEvent('ON_USE_LOGIN', { detail: { ...user} });

    // window.addEventListener('ON_USE_LOGIN' , (event)=> {
    //   console.log(`current user is : ${event}`);
    // });

    window.dispatchEvent(onUserSignIn);

    updateCurrentUser(user);

  }

}
