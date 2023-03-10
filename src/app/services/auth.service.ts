import { IUser } from './../models/iuser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser:IUser|undefined;
  constructor() { }
  login(name:string,pass:string){
    this.currentUser={name:name,pass:pass};
  }
  isLoggedIn(){
    if(this.currentUser?.name&&this.currentUser.pass){
      return true
    }
    return false
  }
  logout(){
    this.currentUser=undefined
  }

}
