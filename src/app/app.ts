import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
interface user{
  name: string,
  age:number
  
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('angular_basic');
count=signal<number>(0);
doublecount=computed(()=>this.count()*2);
triplecount=computed(()=>this.count()*3);
increment(){
  this.count.update((c)=>c+1);
}
constructor(){
  effect(()=>{
    console.log(this.count)
  })
}
name=signal<string>('Mary');
age=signal<number>(0.2);
date=signal<Date>(new Date());
amount=2000;
data=signal<user>({name:'Mary',age:20});

  }
  
  

