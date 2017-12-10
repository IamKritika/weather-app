import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import {HttpHelperService} from "../shared/utils/http-helper.service"
@Injectable()
export class ForecastService {
  
  constructor(private httpService : HttpHelperService) { 
  }

  getWeatherForecast(cityName): Observable<any[]>{
      let url = environment.baseUrl +'forecast?q='+ cityName +'&appid='+ environment.appId +'&units=' + environment.units;
     return this.httpService.getCall(url);
  }

}