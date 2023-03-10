import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent{
  studentName:string='';
  studentAge:string='';
  students:{name:string,age:string}[]=[];
  nameError:string=''
  ageError:string=''

onSubmit(){
  if (!this.validateName(this.studentName)&&!this.validateAge(this.studentAge)){
    this.students.push({name:this.studentName,age:this.studentAge})
  }

}

validateName(name:string){
  let isValidName:boolean=false;
  const regex=new RegExp('^[a-zA-Z]{3,}$');
  if (name==''){
    this.nameError="name is required"
    isValidName=true

  }
  if (!regex.test(name)){
    this.nameError="name must be at least 3 characters and character only"
    isValidName=true
  }
  return isValidName
}
validateAge(age:string){
  let isValidAge:boolean=false
  const regex=new RegExp('^([0-9])*$');
  if (age==''){
    this.ageError="age is required"
    isValidAge=true
  }
  if (!regex.test(age)){
    this.ageError="age must numbers only"
   isValidAge=true

  }
  if(parseInt(age)<=17){
    this.ageError="age must be at least 18"
    isValidAge=true
  }
  return isValidAge
}

}
