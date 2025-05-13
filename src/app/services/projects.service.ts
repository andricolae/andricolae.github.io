import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    private fallbackProjects: Project[] = [
    {
      "title": "Loan Calculator",
      "description": "This is an Angular app that works as a Loan Calculator. All the simulation a user makes are stored in the Local Storage and the user can edit and delete a simulation. The app uses PWA functionality and the users can install this app on their mobile devices or on PC's as a standalone app.",
      "technologies": "Angular, Typescript, TailwindCSS, PWA",
      "liveLink": "https://loan-calculator-blond.vercel.app/",
      "githubLink": "https://github.com/andricolae/loan-calculator"
    },
    {
      "title": "Course Scheduler",
      "description": "Works together with the School Manager App, this app receives requests via an API from the school manager app to schedule the sessions for a newly added course. In this app the school admin can schedule all the sessions and check for conflicts and can send back the schedule via the API to the school manager app.",
      "technologies": "Angular, Typescript, Firebase, TailwindCSS",
      "liveLink": "https://course-scheduler-cyan.vercel.app/home",
      "githubLink": "https://github.com/andricolae/course-scheduler.git"
    },
    {
      "title": "School Manager",
      "description": "An Angular project for teachers, students and school admins to track the activity inside a school. Teachers can grade students and mark them absent or present. Students can enroll and attend classes, also they can see their grades and school admins can manage and see an overview of everything.",
      "technologies": "Angular, Typescript, Firebase, TailwindCSS",
      "liveLink": "https://school-mngr.vercel.app/home",
      "githubLink": "https://github.com/andricolae/school-mngr.git"
    }
  ];

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<any>('assets/data/projects.json')
      .pipe(
        map(data => {
          if (Array.isArray(data)) {
            return data.map(project => ({
              title: project.title || 'Untitled Project',
              description: project.description || 'No description available',
              technologies: project.technologies || '',
              liveLink: project.liveLink || '#',
              githubLink: project.githubLink || '#'
            }));
          } else {
            console.warn('Project data is not an array, using fallback');
            return this.fallbackProjects;
          }
        }),
        catchError(error => {
          console.error('Error fetching projects from JSON, using fallback data:', error);
          return of(this.fallbackProjects);
        })
      );
  }
}
