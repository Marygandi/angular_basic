import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
interface user{
  name: string,
  age:number
  
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('angular_basic');
  count :number=0;
  username:string="mary";
  IsActive:boolean=true;
  colors:string[]=["red","green","blue"];
  values:number[]=[1,2,3,4];
  mary :user={
    name:"mary",
    age:24
  }

  name="Angular Tutorial";
  isAdmin=true;
  getMessage(){
    return "welcome to the portal";
  }
  counter:number=0
  handleAdd(){
        this.counter++;
  }
  handleMinus(){
    this.counter--;
  }
  handleReset(){
    this.counter=0;
  }
  handle(value :string){
    if(value==='plus'){
      this.counter++;
    }else if(value==='minus'){
      this.counter--;
    }else if(value==='reset'){
      this.counter=0;
    }
    }
message:string="";
handleinput(value: string){
  this.message=value;
}
city:string="";
country:string="";
getCountry(value: string){
  this.country=value;
}

  }
  

