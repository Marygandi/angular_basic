import { Component,input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
name=input<string>();
namechange=output<string>();
changename(){
  this.namechange.emit('sandhay');

}

}
