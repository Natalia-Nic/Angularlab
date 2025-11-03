import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // Массив объектов — имитация данных (база проектов)
  private projects = [
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

  constructor() { }

  // Метод для получения всех проектов
  getProjects() {
    return this.projects;
  }

  // Метод для фильтрации проектов по типу
  getFilteredProjects(type: string) {
    if (type === 'все') {
      return this.projects;
    }
    return this.projects.filter(p => p.type === type);
  }
}
