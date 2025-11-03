import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Comments } from './components/comments/comments'; 

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: 'comments', component: Comments }, //  этот маршрут обязателен
  { path: '**', component: PageNotFound }  // страница 404
];


