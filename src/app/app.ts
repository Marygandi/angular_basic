import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortNamePipe } from './short-name-pipe';
import { FormsModule } from '@angular/forms';
interface user{
  name: string,
  age:number
  
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,ShortNamePipe,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('angular_basic');
  fullName=signal<string>('mary gandi');
  username='mohit';
  Emailid=signal<string>('mary@gmail.com');
  formatname(name: string):void{
    this.username= name.toUpperCase();
  }
  formatmail(event:any):void{
    this.Emailid.set(event.target.value.toUpperCase());
  }


  }
  
  

