import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
  @Input() course!: Course;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() wishlistAdded = new EventEmitter<any>();

  constructor(private route:Router){}

  onCourseBooked(): void {
    this.courseBooked.emit(this.course);
  }
  goToDetails(courseId:number): void{
    this.route.navigate(['/courses',courseId]);
  }

  onAddToWishlist(): void {
    this.wishlistAdded.emit(this.course);
  }
}