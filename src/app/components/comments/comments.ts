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
  username = 'Гость';
  commentText = '';
  comments: { user: string; text: string; time: string }[] = [];

  addComment() {
    if (!this.commentText.trim()) return;

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

    this.commentText = '';
  }

  get inputIsEmpty() {
    return this.commentText.trim().length === 0;
  }
}
