import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name:string='';
  pass:string='';
  constructor(private authService:AuthService,private router:Router){
  }
  errors:{name:string,pass:string}={name:'',pass:''}
  validateName(name:string){
    let isValidName:boolean=false;
    const regex=new RegExp('^[a-zA-Z]{3,}$');
    if (name==''){
      isValidName=true
      this.errors.name="name is required";
    }
    if (!regex.test(name)){
      isValidName=true
      this.errors.name="characters only";
    }
    return isValidName
  }
  validatePassword(pass:string){
    let isValidPass:boolean=false;
    const regex=new RegExp('');
    if(pass=''){
      this.errors.pass="pass is required"
    }
    if(!regex.test(pass)){
      this.errors.pass="pass must contain uppercase and 8 characters at least"
    }
    return isValidPass;
  }
  login(){
    this.authService.login(this.name,this.pass)
    this.router.navigate(['/products'])
  }
  logout(){
    this.authService.logout();
  }


}
