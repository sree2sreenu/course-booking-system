import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesList } from './courses-list/courses-list';
import { CourseDetails } from './course-details/course-details';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe,RouterOutlet,CourseDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'course-booking-system';
}
