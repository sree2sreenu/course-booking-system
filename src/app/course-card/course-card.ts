import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course:any;
  @Output() courseBooked = new EventEmitter<any>();

 onCourseBooked(): void {
   this.courseBooked.emit(this.course);
 }
}
