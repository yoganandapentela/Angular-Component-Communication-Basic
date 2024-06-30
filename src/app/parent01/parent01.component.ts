import { Component, ViewChild, ViewChildren } from '@angular/core';
import { Child01Component } from './child01/child01.component';
@Component({
  selector: 'app-parent01',
  templateUrl: './parent01.component.html',
  styleUrls: ['./parent01.component.css']
})
export class Parent01Component {
  message = 'Hello, child component!(Message from parent to Child)';
  @ViewChild(Child01Component) child!: Child01Component;
  @ViewChildren('titles') children: any;
  price!: any;
  constructor() { }
  //viewing the child message
  viewChildFromParent() {
    //console.log(this.child.childViewMessage);
    console.log(this.child.childMethod());
  }
  //viewing the childrens components
  //viewing the multiple tags of template
  viewChildren() {
    this.children.forEach((child: any) => {
      console.log(child.nativeElement.innerText); // Access data from each child component
    });
  }
  //modifying the emitted value from child
  onchange(value: any) {
    this.price = value * 4;
  }

}
