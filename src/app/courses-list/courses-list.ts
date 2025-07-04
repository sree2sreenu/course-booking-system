import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PristineChangeEvent } from '@angular/forms';
import { CourseCard } from '../course-card/course-card';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  imports: [CurrencyPipe,CourseCard],
  templateUrl: './courses-list.html',
  styleUrls: ['./courses-list.css']
})
export class CoursesList implements OnInit {
  title = 'Available Courses';
  wishlist: Course[] = [];
  courses: Course[] = [];

  constructor(private courseService: CourseService, private route:ActivatedRoute, private router: Router) { }
 
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params=>{
      const desc = params.get('description');
      this.loadCourses(desc);
    });
  }

  loadCourses(description: string | null): void {
     console.log('Sreeni description',description)
    this.courseService.getCourses(description).subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (err) => {
        console.log('Error while fetching courses:', err);
      }
    });
  }

  onCourseBooked(course: Course): void {
    console.log(`Parent heard about course booking ${course.title}`);
  }
  onWishlistAdded(course: Course): void {
    console.log(`Parent heard about wish list ${course.title}`);
    this.wishlist.push(course);

  }
}
