

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,           // 👈 обязательно указываем
  imports: [],      // 👈 если используешь <a routerLink="">
  templateUrl: './home.html',
  styleUrls: ['./home.scss']  // 👈 должно быть styleUrls (множественное)
})
export class Home { }
