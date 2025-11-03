// ==========================
// ЛАБОРАТОРНАЯ РАБОТА №3
// Работа с директивами (ngIf, ngFor, ngSwitch, ngClass, ngStyle)
// ==========================

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.scss']
})
export class ProjectCard {
  // --- Передача данных через @Input (универсальный компонент)
  @Input() project: any;
}
