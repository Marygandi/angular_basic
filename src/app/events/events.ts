import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  count=0;
  age=signal(0);
  increment(){
    this.count++;
    this.age.update((a)=>a+1);
  }
  showEvents(e : any){
    console.log(e);
  }
  username='';
  updateUsername(value: string){
    this.username=value;
  }
  handleSubmit(e:any){
    e.preventDefault();
    console.log("form subitted successfully");
    this.helloworld();

  }
  helloworld(){
    console.log("hello world");
  }

}
