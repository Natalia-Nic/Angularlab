import { Component, ContentChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-debug',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-debug.html'
})
export class ProjectsDebugComponent {
  @ContentChild('debugContent') debugContent!: ElementRef;
}
