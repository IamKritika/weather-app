import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { HomeComponent } from './home/home.component';
import { ForecastService } from './home/forecast.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule }  from './app-routing.module';
import { HttpHelperService} from './shared/utils/http-helper.service';

@NgModule({

  imports: [ BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherCardComponent,
    HeaderComponent,
  ],
  providers: [HttpHelperService,ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
