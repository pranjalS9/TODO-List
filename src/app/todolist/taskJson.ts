import { Injectable } from '@angular/core';

@Injectable()
export class TasksData {
  tasks = [
    {
      taskName: "Brush teeth",
      dueDate: new Date('2023-08-31T14:00:00'),
      priority: "Medium"
    },
    {
      taskName: "Take bath",
      dueDate: new Date('2023-08-31T14:00:00'),
      priority: "High"
    },
    {
      taskName: "Eat food",
      dueDate: new Date('2023-08-31T14:00:00'),
      priority: "Low"
    }
  ];
}
