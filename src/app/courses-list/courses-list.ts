import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PristineChangeEvent } from '@angular/forms';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCard],
  templateUrl: './courses-list.html',
  styleUrls: ['./courses-list.css']
})
export class CoursesList implements OnInit {
  title = 'Available Courses';
   courses = [
    { id: 1, title: 'Intro to Angular', description: 'Learn the basics of Angular', price: 49, date: '2025-03-01', soldOut: false, img: 'angular-logo.png', onSale: false },
    { id: 2, title: 'Advanced Angular', description: 'Deep dive into Angular internals', price: 99, date: '2025-04-10', soldOut: true, img: 'angular-logo.png', onSale: true },
    { id: 3, title: 'RxJS Fundamentals', description: 'Asynchronous data streams', price: 45, date: '2025-05-05', img: 'rxjs-logo.png', soldOut: false, onSale: true }
  ];

  ngOnInit() {
    // Initialization logic can go here
    console.log('CoursesList component initialized');
  }

 

}
