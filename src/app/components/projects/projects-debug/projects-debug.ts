// ===============================
// 💡 Вложенный компонент ProjectsDebugComponent
// Использует ng-content и ContentChild
// ===============================

import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-debug',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-debug.html',
  styleUrls: ['./projects-debug.scss']
})
export class ProjectsDebugComponent implements AfterContentInit {

  // ContentChild — получаем доступ к содержимому,
  // которое было передано внутрь <ng-content> (в projects.html)
  @ContentChild('debugContent') debugContent!: ElementRef;

  ngAfterContentInit() {
    // Этот метод вызывается, когда контент вставлен
    console.log('📊 ProjectsDebugComponent: контент вставлен');
    console.log(this.debugContent.nativeElement.textContent);
  }
}
