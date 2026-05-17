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
  isLoggedIn :boolean=true;
  age: number=20;
  updateAge(newAge: string)
  {
    this.age=Number(newAge);
    
  }
  tab:string="Home";
  items:string[]=["angualr","HTML","React"];
   users=[{name:'mary',age:21},{name:'sandhya',age:24}]
   removeItem(index: number){
    this.items.splice(index,1);
   }
   count=signal<number>(0);
   name=signal<string>('john');
   itemsarray=signal<string[]>(["A","B","C"]);
   itemsobject=signal<{name:string,age:number}[]>([{name:'Mary',age:21},{name:'sandhya',age:21}]);
  }
  
  

