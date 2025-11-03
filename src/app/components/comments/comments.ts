// ==========================
// ЛАБОРАТОРНАЯ РАБОТА №2
// Работа с компонентами и привязками
// ==========================

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comments.html',
  styleUrls: ['./comments.scss']
})
export class Comments {
  // --- Односторонняя привязка (интерполяция и привязка к DOM-значению)
  username = 'Гость'; // имя пользователя, отображается в интерфейсе
  commentText = ''; // текст текущего комментария
  comments: { user: string; text: string; time: string }[] = []; // массив всех комментариев

  // --- Односторонняя привязка метода компонента к событию DOM (click)
  addComment() {
    if (!this.commentText.trim()) return; // проверка на пустой ввод

    // Добавляем новый комментарий в массив (односторонняя привязка данных)
    this.comments.push({
      user: this.username,
      text: this.commentText,
      time: new Date().toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    });

    // --- Двусторонняя привязка ([(ngModel)]) автоматически очистит textarea при сбросе
    this.commentText = '';
  }

  // --- Пример вычисляемого свойства, используемого в привязке к атрибуту и классу
  get inputIsEmpty() {
    return this.commentText.trim().length === 0;
  }
}
