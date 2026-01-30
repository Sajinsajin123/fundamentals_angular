import { Routes } from '@angular/router';
import { Employee } from './pages/employee/employee';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Clickme } from './pages/clickme/clickme';

export const routes: Routes = [
  { path: 'employee', component: Employee },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'clickme', component: Clickme },
];
