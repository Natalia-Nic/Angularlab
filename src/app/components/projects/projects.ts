// src/app/projects/projects.ts
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Импортируй свои дочерние компоненты (пути могут отличаться в проекте).
// Убедись, что файлы project-list и projects-filter существуют и экспортируют компоненты.
import { ProjectListComponent } from '../../project-list/project-list';
import { ProjectsFilterComponent } from './projects-filter/projects-filter';
import { ProjectsDebugComponent } from './projects-debug/projects-debug';

@Component({
  selector: 'app-projects',
  standalone: true,
  // Здесь перечисляем, что подключаем: модули и дочерние компоненты.
  imports: [CommonModule, FormsModule, ProjectListComponent, ProjectsFilterComponent, ProjectsDebugComponent],
  templateUrl: './projects.html',   // HTML-шаблон (ниже)
  styleUrls: ['./projects.scss']    // SCSS-стили (можно оставить как есть)
})
export class Projects {
  // ------------------------------
  // Переменные компонента (данные)
  // ------------------------------
  title = '🏗 Наши строительные проекты'; // Заголовок страницы

  // Значение фильтра: 'все' / 'жилой' / 'коммерческий'
  selectedType = 'все';

  // Массив объектов — каждая карточка проекта использует один объект здесь
  projects = [
    {
      name: 'Бизнес-центр "Орион"',
      type: 'коммерческий',
      area: 22000,
      status: 'в процессе',
      ready: false,
      image: 'assets/projects/orion.jpg', // Убедись: файл есть в src/assets/projects/
      details: { floors: 20, parking: 'многоуровневая', year: 2025 },
      additional: 'Бизнес-центр "Орион"'
    },
    {
      name: 'Коттеджный посёлок "Рассвет"',
      type: 'жилой',
      area: 18000,
      status: 'проектируется',
      ready: false,
      image: 'assets/projects/rassvet.jpg',
      details: { floors: 2, parking: 'наземная', year: 2026 },
      additional: 'Коттеджный посёлок "Рассвет"'
    },
    {
      name: 'Торговый центр "Вега"',
      type: 'коммерческий',
      area: 30000,
      status: 'выполнен',
      ready: true,
      image: 'assets/projects/vega.jpg',
      details: { floors: 5, parking: 'подземная', year: 2022 },
      additional: 'Торговый центр "Вега"'
    }
  ];

  // ------------------------------
  // ViewChild — ссылка на дочерний компонент
  // ------------------------------
  // #projectList в шаблоне связывается с этим свойством:
  @ViewChild('projectList') projectListComponent!: ProjectListComponent;

  // Можно использовать для вывода отладочной информации в шаблоне
  @ViewChild(ProjectsDebugComponent) debugComponent!: ProjectsDebugComponent;

  // ------------------------------
  // Геттер: отфильтрованные проекты по выбранному типу
  // ------------------------------
  // Не изменяет исходный массив — возвращает новый массив для отображения
  get filteredProjects() {
    if (this.selectedType === 'все') {
      return this.projects;
    }
    // Возвращаем только те проекты, чей p.type совпадает с selectedType
    return this.projects.filter(p => p.type === this.selectedType);
  }

  // ------------------------------
  // Метод: обработчик изменения фильтра (вызывается из фильтра)
  // ------------------------------
  onSelectedTypeChange(newType: string) {
    // Преподаватель хочет чистую логику: просто сохранить выбор
    this.selectedType = newType;
    // Angular автоматически пересчитает шаблон, потому что selectedType — реактивное свойство
  }
}
