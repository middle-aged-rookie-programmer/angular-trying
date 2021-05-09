import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firststep',
  templateUrl: './firststep.component.html',
  styleUrls: ['./firststep.component.scss']
})
export class FirststepComponent implements OnInit {
  FruitList: Array<string> = ["Apple", "Banana", "Cherry", "Coconut", "Grapefruit", "Kiwi", "Orange", "Pineapple", "Raspberry", "Strawberry"]

  constructor() { }

  ngOnInit(): void {
  }

  dragStartFruit(event: DragEvent, fruit: string) {
    console.log("dragStartFruit");
    console.log(event);
    console.log(fruit);
  }

  dragEndFruit(event: DragEvent, fruit: string) {
    console.log("dragEndFruit");
    console.log(event);
    console.log(fruit);
  }

  dragEnterFruit(event: DragEvent, fruit: string) {
    event.preventDefault();
    console.log("dragEnterFruit");
    console.log(event);
    console.log(fruit);
  }

  dragLeaveFruit(event: DragEvent, fruit: string) {
    event.preventDefault();
    console.log("dragLeaveFruit");
    console.log(event);
    console.log(fruit);
  }

  dragOverFruit(event: DragEvent, fruit: string) {
    event.preventDefault();
    console.log("dragOverFruit");
    console.log(event);
    console.log(fruit);
  }

  dropFruit(event: any, fruit: string) {
    event.preventDefault();
    console.log("dropFruit");
    console.log(event);
    console.log(fruit);
  }
}
