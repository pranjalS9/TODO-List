import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dueDate'
})
export class DueDatePipe implements PipeTransform {

  transform(value: Date | string, use24Hour: boolean = true): string {
    if (value instanceof Date) {
      const now = new Date();
      const timeDifference = value.getTime() - now.getTime();

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        // return `${this.formatDate(value, use24Hour)} - Task DUE by ${days} Days/${hours} Hours`;
        return `${this.formatDate(value, use24Hour)}`;

      } else {
        // return `${this.formatDate(value, use24Hour)} - Task Completed`;
        return `${this.formatDate(value, use24Hour)}`;

      }
    }

    return value;

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
