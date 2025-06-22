import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css'
})
export class CourseDetails implements OnInit {

  course: Course | null = null;
  constructor(private courseService: CourseService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idStr = params.get('id');
      if (idStr) {
        const id = +idStr;
        this.loadCourseById(id);
      }

    })
  }

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
