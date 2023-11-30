import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherDetails(cityName : string): Observable<WeatherData>{
    let requestUrl = `${environment.weatherApiBaseUrl}${cityName}`;
    return this.httpClient.get<WeatherData>(requestUrl,{
      headers: new HttpHeaders()
      .set(environment.rapidApiKeyLabel,environment.rapidApiKeyValue)
      .set(environment.rapidApiHostLabel,environment.rapidApiHostValue)

    })
  }
}
