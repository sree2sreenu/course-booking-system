import { Component } from '@angular/core';
import { PristineChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-courses-list',
  imports: [],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})
export class CoursesList {
  title = 'Available Courses';
  courses = [
    { id: 1, name: 'Angular Basics', description: 'Learn the fundamentals of Angular.', price: 100, date: new Date() },
    { id: 2, name: 'Advanced Angular', description: 'Deep dive into Angular features.', price: 150, date: new Date() },
    { id: 3, name: 'Angular and RxJS', description: 'Integrate RxJS with Angular applications.', price: 200, date: new Date() }
  ];

}
