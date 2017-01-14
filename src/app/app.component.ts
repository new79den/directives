import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  private switch: boolean = false;
  private items: number[] = [1,2,3,4,5];
  private value: number = 1020;
  onSwitch(){
    this.switch = !this.switch;
  }
}
