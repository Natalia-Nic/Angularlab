import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects-filter.html'
})
export class ProjectsFilterComponent {
  @Input() selectedType = 'все';
  @Output() selectedTypeChange = new EventEmitter<string>();

  onTypeChange() {
    this.selectedTypeChange.emit(this.selectedType);
  }
}
