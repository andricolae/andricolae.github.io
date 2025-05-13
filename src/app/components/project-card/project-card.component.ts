  import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() index: number = 0;

  bgColors = ['bg-blue-50', 'bg-green-50', 'bg-indigo-50', 'bg-purple-50', 'bg-pink-50', 'bg-yellow-50'];
  borderColors = ['border-blue-200', 'border-green-200', 'border-indigo-200', 'border-purple-200', 'border-pink-200', 'border-yellow-200'];

}
