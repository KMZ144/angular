import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private authService:AuthService ){

  }
  get getUserName(){
    return this.authService.currentUser?.name
  }
  get isLoggedIn(){
    return this.authService.isLoggedIn();
  }
  logOut(){
    this.authService.logout()
  }


}
