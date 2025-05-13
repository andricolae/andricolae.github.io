import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
      }
    });
  }
}
