import { Component } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-course-details',
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css'
})
export class CourseDetails {

  course: Course | null = null;
  constructor(private courseService: CourseService) { }

  loadCourseById(id: number): void {
    this.courseService.getCourseById(id).subscribe({
      next: (data: Course) => {
        this.course = data;
      },
      error: (err) => {
        console.log('Error while fetching course by ID', err);
      }
    })
  }

}
