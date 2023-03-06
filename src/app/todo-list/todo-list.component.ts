import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  inputValue:string="";
  todolist:string[]=[];
  add(){
    this.todolist.push(this.inputValue)
  }
  remove(num:number){
    console.log(num)
    console.log(this.todolist)
      this.todolist=this.todolist.filter(function(item,index){return index!=num})
    console.log(this.todolist)
  }
}
