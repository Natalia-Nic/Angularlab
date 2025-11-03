import {
  Component,
  Input,
  ContentChild,
  ElementRef,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-debug',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="debug-block">
      <h3>Компонент ProjectsDebugComponent</h3>

      <!-- ng-content позволяет вставить сюда часть шаблона из родителя -->
      <ng-content></ng-content>

      <div class="log">
        <h4>Лог жизненного цикла:</h4>
        <pre>{{ logs.join('\n') }}</pre>
      </div>
    </div>
  `,
  styles: [`
    .debug-block {
      border: 2px dashed gray;
      padding: 10px;
      margin-top: 20px;
      background: #f5f5f5;
      font-size: 14px;
    }
    .log {
      margin-top: 10px;
      background: white;
      border: 1px solid #ccc;
      padding: 10px;
    }
  `]
})
export class ProjectsDebugComponent implements
  OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  // Переменная, в которую будем записывать порядок вызова методов
  logs: string[] = [];

  // Через ContentChild получаем доступ к элементу, который вставлен через ng-content
  @ContentChild('debugContent') debugContent!: ElementRef;

  // Метод вызывается один раз при создании компонента
  ngOnInit(): void {
    this.logs.push('ngOnInit() — компонент создан');
  }

  // Срабатывает, если входные данные (Input) изменились
  ngOnChanges(changes: SimpleChanges): void {
    this.logs.push('ngOnChanges() — изменились входные данные');
  }

  // Срабатывает при каждой проверке изменений Angular
  ngDoCheck(): void {
    this.logs.push('ngDoCheck() — выполняется проверка изменений');
  }

  // Срабатывает один раз, когда вставлен контент через ng-content
  ngAfterContentInit(): void {
    this.logs.push('ngAfterContentInit() — вставлен контент через ng-content');

    // Проверяем, доступен ли контент и добавляем сообщение
    if (this.debugContent) {
      this.logs.push('Доступ к ContentChild получен: ' + this.debugContent.nativeElement.textContent.trim());
    }
  }

  // Срабатывает после каждой проверки контента
  ngAfterContentChecked(): void {
    this.logs.push('ngAfterContentChecked() — контент проверен');
  }

  // Срабатывает один раз, когда шаблон компонента полностью создан
  ngAfterViewInit(): void {
    this.logs.push('ngAfterViewInit() — шаблон компонента инициализирован');
  }

  // Срабатывает после каждой проверки шаблона
  ngAfterViewChecked(): void {
    this.logs.push('ngAfterViewChecked() — шаблон проверен');
  }
}
