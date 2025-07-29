import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature',
  imports: [FormsModule, CommonModule],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css'
})

export class TemperatureComponent {
 celsius: number = 0;
  fahrenheit: number = 32;

  convertToFahrenheit(): void {
    this.fahrenheit = parseFloat(((this.celsius * 9/5) + 32).toFixed(1));
  }

  convertToCelsius(): void {
    this.celsius = parseFloat((((this.fahrenheit - 32) * 5/9)).toFixed(1));
  }

  reset(): void {
    this.celsius = 0;
    this.fahrenheit = 32;
  }

}
