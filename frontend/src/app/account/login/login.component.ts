import { requestLogin } from "./../../resources/models/requestLogin.1";
import { Component, OnInit } from '@angular/core';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public requestLogin: requestLogin;

  constructor() {}

  ngOnInit(): void {
    this.requestLogin = new requestLogin();
  }

  public doLogin() :void {
    console.log(this.requestLogin)
  }
}
