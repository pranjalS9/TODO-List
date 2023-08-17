import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksData } from './taskJson';
import { DueDatePipe } from '../due-date.pipe';

type TaskInProgressType = {
  taskName: string,
  dueDate: Date,
  priority: string
}
type TaskCompletedType = {
  taskName: string,
  priority: string
}
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent {
  tasksData = new TasksData();
  taskArray = this.tasksData.tasks;

  dueDate = new DueDatePipe();
  
  onSubmit(form: NgForm){
    console.log(form);
    const newTask = {
      taskName: form.controls['task'].value,
      dueDate: new Date(form.controls['dueDate'].value),
      priority: form.controls['priority'].value || 'Medium'
    }
    this.taskArray.push(newTask);
    form.reset();
  }

  inProgressArray: TaskInProgressType[]=[];

  onStart(index: number){
    this.inProgressArray.push({
      taskName: this.taskArray[index].taskName,
      dueDate: this.taskArray[index].dueDate,
      priority: this.taskArray[index].priority|| 'Medium'
    })
    this.taskArray.splice(index, 1);
  }

  onCompleteArray: TaskCompletedType[]=[];

  onComplete(index: number){
    this.onCompleteArray.push({
      taskName: this.inProgressArray[index].taskName,
      priority: this.inProgressArray[index].priority
    })
    this.inProgressArray.splice(index, 1);
  }

  onDelete(index: number){
    this.onCompleteArray.splice(index, 1);
  }
  removePastDates(){
    return new Date().toISOString().slice(0,16)
  }
  completedOn(){
    return new Date().toDateString();
  }
}
