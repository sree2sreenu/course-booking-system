import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PristineChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-courses-list',
  imports: [NgStyle],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})
export class CoursesList implements OnInit {
  title = 'Available Courses';
  courses = [
    { id: 1, name: 'Angular Basics', description: 'Learn the fundamentals of Angular.', price: 100, date: "06/15/2025", soldOut: false, img:"angular-logo.png" },
    { id: 2, name: 'Advanced Angular', description: 'Deep dive into Angular features.', price: 150, date: "06/15/2025", soldOut: false, img:"angular-logo.png" },
    { id: 3, name: 'Angular and RxJS', description: 'Integrate RxJS with Angular applications.', price: 200, date: "06/15/2025", soldOut: true, img:"angular-logo.png" }
  ];

  ngOnInit() {
    // Initialization logic can go here
    console.log('CoursesList component initialized');
  }

  viewDetails(CourseName: string): void {
    alert(`Details for ${CourseName}`);
  }

}
