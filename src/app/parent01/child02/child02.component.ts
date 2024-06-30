import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child02',
  templateUrl: './child02.component.html',
  styleUrls: ['./child02.component.css']
})
export class Child02Component {
  @Output() public newPrice = new EventEmitter<any>();
  childViewMessage="View Child from Child";
  price!:any;
  constructor(){}
     childMethod(){
        return this.childViewMessage
     }
  
     onChange(value:any) {
      this.newPrice.emit(value);
    }
}
