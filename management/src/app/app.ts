import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Employee } from "./pages/employee/employee";
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Menu } from './shares/menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('management');
}
