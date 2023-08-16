import { Injectable } from '@angular/core';

@Injectable()
export class TasksData {
  tasks = [
    {
      taskName: "Brush teeth",
      isCompleted: false,
      dueDate: new Date() 
    },
    {
      taskName: "Take bath",
      isCompleted: true,
      dueDate: new Date() 
    },
    {
      taskName: "Eat food",
      isCompleted: false,
      dueDate: new Date() 
    }
  ];
}
