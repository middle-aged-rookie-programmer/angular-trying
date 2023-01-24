import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-secondstep',
  templateUrl: './secondstep.component.html',
  styleUrls: ['./secondstep.component.scss']
})
export class SecondstepComponent implements OnInit {
  CoffeeList: Array<string> = ["Blue Mountain", "Colombian", "Guatemalan", "Kilimanjaro", "Mandheling", "Mocha"]
  fromCoffeeId: number = 0;
  fromCoffee: string = "";
  toCoffeeId: number = 0;
  toCoffee: string = "";

  constructor(private navigateS: NavigationService) { }

  ngOnInit(): void {
  }

  dragStartCoffee(event: DragEvent, id: number, coffee: string) {
    console.log("dragStartCoffee");
    this.fromCoffeeId = id;
    this.fromCoffee = coffee;
  }

  dragEndCoffee() {
    console.log("dragEndCoffee");
  }

  dragEnterCoffee(event: DragEvent) {
    event.preventDefault();
    console.log("dragEnterCoffee");
  }

  dragLeaveCoffee(event: DragEvent) {
    event.preventDefault();
    console.log("dragLeaveCoffee");
  }

  dragOverCoffee(event: DragEvent) {
    event.preventDefault();
    console.log("dragOverCoffee");
  }

  dropCoffee(event: any, id: number, coffee: string) {
    event.preventDefault();
    console.log("dropCoffee");
    this.toCoffeeId = id;
    this.toCoffee = coffee;
    this.CoffeeList[this.fromCoffeeId] = this.toCoffee;
    this.CoffeeList[this.toCoffeeId] = this.fromCoffee;
    this.resetCoffee();
  }

  resetCoffee() {
    this.fromCoffeeId = 0;
    this.fromCoffee = "";
    this.toCoffeeId = 0;
    this.toCoffee = "";
  }

  GoSimple() {
    this.navigateS.GoSimple();
  }
}
