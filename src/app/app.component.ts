import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private switch: boolean = false;
  onSwitch(){
    this.switch = !this.switch;
  }
}
