// == Projects — родительский компонент
// Лабораторная работа №4 — Работа с вложенными компонентами
// Используется:
//  - Несколько вложенных компонентов (Filter, List, Debug)
//  - ViewChild для обращения к дочерним компонентам
//  - В шаблоне есть шаблонные переменные (#projectList)
// ===============================

// Импортируем базовые вещи из Angular
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Импортируем дочерние компоненты, которые используются внутри HTML этого компонента.
//  Пути могут отличаться в твоем проекте — проверь, чтобы они совпадали.
import { ProjectListComponent } from '../../project-list/project-list';
import { ProjectsFilterComponent } from './projects-filter/projects-filter';
import { ProjectsDebugComponent } from './projects-debug/projects-debug';

// ===============================
//  Декоратор @Component — описывает сам компонент
// ===============================
@Component({
  selector: 'app-projects',                // HTML-тег для вставки этого компонента
  standalone: true,                        // компонент не зависит от AppModule
  imports: [                               // сюда добавляем всё, что нужно в шаблоне
    CommonModule,                          // базовые директивы Angular (*ngIf, *ngFor)
    FormsModule,                           // для [(ngModel)] — двусторонней привязки
    ProjectListComponent,                  // дочерний компонент со списком проектов
    ProjectsFilterComponent,               // дочерний компонент фильтра
    ProjectsDebugComponent                 // дочерний компонент отладки
  ],
  templateUrl: './projects.html',          // HTML-шаблон компонента
  styleUrls: ['./projects.scss']            // файл со стилями
})
export class Projects {

  // ===========================================================
  //  1. Поля класса — это данные, которые используются в HTML
  // ===========================================================
  title = '🏗 Наши строительные проекты'; // заголовок страницы

  // Тип фильтра: "все", "жилой" или "коммерческий"
  selectedType = 'все';

  // ===========================================================
  //  2. Массив объектов — имитация данных (база проектов)
  // ===========================================================
  projects = [
    {
      name: 'Бизнес-центр "Орион"',
      type: 'коммерческий',
      area: 22000,
      status: 'в процессе',
      ready: false,
      image: 'assets/projects/orion.jpg', // ссылка на картинку
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

  // ===========================================================
  // 3. ViewChild — обращение к дочернему компоненту из кода
  // ===========================================================
  // Через шаблонную переменную #projectList (см. в HTML)
  // Angular автоматически находит этот компонент в DOM.
  @ViewChild('projectList') projectListComponent!: ProjectListComponent;

  // Второй пример ViewChild — получаем компонент отладки напрямую
  @ViewChild(ProjectsDebugComponent) debugComponent!: ProjectsDebugComponent;

  // ===========================================================
  //  4. Геттер для фильтрации проектов
  // ===========================================================
  // При каждом обращении к filteredProjects вычисляется новый список.
  // Если выбран "все" — показываем весь массив,
  // иначе — только те, у которых p.type совпадает с выбранным фильтром.
  get filteredProjects() {
    if (this.selectedType === 'все') {
      return this.projects; // показываем всё
    }
    // .filter() создаёт новый массив только с нужными элементами
    return this.projects.filter(p => p.type === this.selectedType);
  }

  // ===========================================================
  //  5. Метод, который срабатывает, когда пользователь меняет фильтр
  // ===========================================================
  // Этот метод вызывается во вложенном компоненте ProjectsFilterComponent
  // через @Output() selectedTypeChange.
  onSelectedTypeChange(newType: string) {
    // Сохраняем выбор пользователя
    this.selectedType = newType;

    // После этого Angular сам обновит шаблон (перерисует список проектов)
    // потому что selectedType — реактивное свойство (оно влияет на геттер filteredProjects).
  }
}
