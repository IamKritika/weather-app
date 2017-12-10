import { Component, Input } from '@angular/core';
import { Weather } from "../shared/model/weather";
@Component({
	selector: 'weather-card',
  templateUrl: './weather-card.component.html'   
})
export class WeatherCardComponent {
    @Input() weather: Weather;
}