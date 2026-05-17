import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
