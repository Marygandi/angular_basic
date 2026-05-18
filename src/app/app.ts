import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortNamePipe } from './short-name-pipe';
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Child } from './child/child';
interface user{
  name: string,
  age:number
  
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,ShortNamePipe,FormsModule,Child,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('angular_basic');
  username=signal('mary gandi');
userid=signal<string>('mary');

// forms pratctise-
// Ng model---template driven form practise
submit(f:any){
console.log(f.value);
}
//reactive form 
form=new FormGroup({
  Name:new FormControl(''),
  Email:new FormControl('')
});
submitReactive(){
  console.log(this.form.value);
}
// singals form
employeename=signal<string>('');
employeemail=signal<string>('');
submitSignalForm(){
  console.log(this.employeename(),this.employeemail());
}

  }

  
  

