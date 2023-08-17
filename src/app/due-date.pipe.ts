import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dueDate'
})
export class DueDatePipe implements PipeTransform {

  transform(value: Date | string, use24Hour: boolean = true): string {
    //let output: string = "";
    if (value instanceof Date) {
      const now = new Date();
      const timeDifference = value.getTime() - now.getTime();

      console.log(timeDifference)

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        if(days > 0){
          return `${this.formatDate(value, use24Hour)} - Task DUE by ${days} Day`;
        }else{
          return `${this.formatDate(value, use24Hour)} - Task DUE by ${hours} Hours`;
        }
      } else if(timeDifference == 0) {
        return `${this.formatDate(value, use24Hour)} - Task Completed`;
      }
    }
     return `Task Completed`;
}

private formatDate(date: Date, use24Hour: boolean): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: use24Hour ? 'numeric' : 'numeric',
    minute: 'numeric'
  };
  return date.toLocaleDateString(undefined, options);
}
}
