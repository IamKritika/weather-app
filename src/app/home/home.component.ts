import {Component, OnInit} from '@angular/core';
import {ForecastService} from './forecast.service';
import {Subject} from "rxjs/Subject";
import {mapWeatherDetails} from "../shared/mapper/weather-details"


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
})
export class HomeComponent {

    errorMessage: string;
    weatherForecastData: any[];
    disabledForecastButton: boolean = true;
    cityName:string;

    constructor(private _weatherService:ForecastService) {
    }

    // to get weather forecast
    getWeatherForecast() {  
    
    this.errorMessage=null;    
    // call to api
    this._weatherService.getWeatherForecast(this.cityName)
         .subscribe((data:any) => {   
             let details = data && data.list?data.list:[];
             // mapping the api data to desired form
             this.weatherForecastData= mapWeatherDetails(details);
             this.onResetControls();
            }, (error) =>  {                     
                this.errorMessage = error.message},            
     ); 
    }

    // enabling submit button
    enableCitySearch(event:Event) {  
      this.weatherForecastData=[];          
      this.disabledForecastButton=!this.cityName;  
      this.errorMessage = null;
    }

    onResetControls(){
        this.cityName = '';
        this.disabledForecastButton= true;
    }

}