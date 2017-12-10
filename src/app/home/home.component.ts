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

    getWeatherForecast() {  
    
    this.errorMessage=null;    
    this._weatherService.getWeatherForecast(this.cityName)
         .subscribe((data:any) => {   
             let details = data && data.list?data.list:[];
             this.weatherForecastData= mapWeatherDetails(details);
             this.onResetControls();
            }, (error) =>  {                     
                this.errorMessage = error.message},            
     ); 
    }

    enableCitySearch(event:Event) {  
      this.weatherForecastData=[];          
      this.disabledForecastButton=!this.cityName;  
    }

    onResetControls(){
        this.cityName = '';
        this.disabledForecastButton= true;
    }

}