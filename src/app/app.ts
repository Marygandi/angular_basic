import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Events } from './events/events';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Events],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_basic');
  name="Angular Tutorial";
  isAdmin=true;
  getMessage(){
    return "welcome to the portal";
  }
  count=signal(10);
  employee={
    name:"mary",
    age:24,
    salary:30000
  }
}
