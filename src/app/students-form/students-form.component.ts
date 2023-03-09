import { Component } from '@angular/core';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent {
  studentName:string='';
  studentAge:string='';
  students:{name:string,age:string}[]=[];

onSubmit(){
  this.students.push({name:this.studentName,age:this.studentAge})
}
}
