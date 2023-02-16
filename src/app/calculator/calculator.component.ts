import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  toshow: string = '0';

  addToInput(number: string) {
    this.toshow = (this.toshow === '0') ? number : this.toshow + number;
  }

  handleClearClick() {
    this.toshow = '0';
  }

  handleEqualsClick() {
    this.toshow = eval(this.toshow);
  }

}
