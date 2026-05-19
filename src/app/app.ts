import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal, } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShortNamePipe } from './short-name-pipe';
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
interface user{
  name: string,
  age:number
  
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CommonModule,ShortNamePipe,FormsModule,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('angular_basic');
 

  }

  
  

