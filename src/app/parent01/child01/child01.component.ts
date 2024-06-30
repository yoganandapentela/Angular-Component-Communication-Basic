import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child01',
  templateUrl: './child01.component.html',
  styleUrls: ['./child01.component.css']
})
export class Child01Component {
  @Input() parentMessage!: string;
  @Output() public newPrice = new EventEmitter<any>();
  childViewMessage = "View Child from Child";
  price!: any;
  constructor() { }
  childMethod() {
    return this.childViewMessage
  }

  onChange(value: any) {
    this.newPrice.emit(value);
  }
}
