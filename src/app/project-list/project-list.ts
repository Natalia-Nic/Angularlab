import { Component, Input, ContentChild, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.scss']
})
export class ProjectListComponent implements AfterContentInit {
  @Input() projects!: any[];

  @ContentChild(ProjectCard) firstCard!: ProjectCard;

  ngAfterContentInit() {
    if (this.firstCard) {
      console.log('ContentChild ProjectCard найден:', this.firstCard);
    }
  }
}
