import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksData } from './taskJson';
import { DueDatePipe } from '../due-date.pipe';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  tasksData = new TasksData();
  taskArray = this.tasksData.tasks;

  dueDate = new DueDatePipe();
  statusOptions = ['TODO', 'INPROGRESS', 'DONE'];
  
  onSubmit(form: NgForm){
    console.log(this.taskArray);
    const newTask = {
      taskName: form.controls['task'].value,
      status: 'TODO',
      isCompleted: false,
      dueDate: new Date()
    }
    this.taskArray.push(newTask);
    form.reset();
  }

  onDelete(index: number){
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number){
    console.log(this.taskArray)
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
