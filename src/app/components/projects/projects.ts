import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectListComponent } from '../../project-list/project-list';
import { ProjectsFilterComponent } from './projects-filter/projects-filter';
import { ProjectsDebugComponent } from './projects-debug/projects-debug';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, ProjectListComponent, ProjectsFilterComponent, ProjectsDebugComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  title = '🏗 Наши строительные проекты';

  selectedType = 'все';

  projects = [
    {
      name: 'Бизнес-центр "Орион"',
      type: 'коммерческий',
      area: 22000,
      status: 'в процессе',
      ready: false,
      image: 'assets/projects/orion.jpg',
      details: {
        floors: 20,
        parking: 'многоуровневая',
        year: 2025
      },
      additional: 'Бизнес-центр "Орион"'
    },
    {
      name: 'Коттеджный посёлок "Рассвет"',
      type: 'жилой',
      area: 18000,
      status: 'проектируется',
      ready: false,
      image: 'assets/projects/rassvet.jpg',
      details: {
        floors: 2,
        parking: 'наземная',
        year: 2026
      },
      additional: 'Коттеджный посёлок "Рассвет"'
    },
    {
      name: 'Торговый центр "Вега"',
      type: 'коммерческий',
      area: 30000,
      status: 'выполнен',
      ready: true,
      image: 'assets/projects/vega.jpg',
      details: {
        floors: 5,
        parking: 'подземная',
        year: 2022
      },
      additional: 'Торговый центр "Вега"'
    }
  ];

  @ViewChild('projectList') projectListComponent!: ProjectListComponent;
  @ViewChild(ProjectsDebugComponent) debugComponent!: ProjectsDebugComponent;

  get filteredProjects() {
    return this.selectedType === 'все'
      ? this.projects
      : this.projects.filter(p => p.type === this.selectedType);
  }

  onSelectedTypeChange(newType: string) {
    this.selectedType = newType;
  }
}
