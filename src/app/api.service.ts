import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MessageService } from "./message.service";
import { BehaviorSubject } from "rxjs";
import { WeatherStruct } from "./weather";

const API_URL = "http://api.openweathermap.org/data/2.5/weather";
// my key for the OpenWeatherAPI
const API_KEY = "3f25f897f61a2c93596aa18c05c7147f";
// TODO add input for location ID
// default location
const LOCATION_ID = "4480285"; // Morrisville, NC
// get the value from the message

// this call works:
//        api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3f25f897f61a2c93596aa18c05c7147f

@Injectable({
  providedIn: "root"
})
export class APIService {
  private locationSource = new BehaviorSubject(LOCATION_ID);
  currentLocation = this.locationSource.asObservable();

  constructor(
    private httpClient: HttpClient,
    private msgService: MessageService
  ) {}

  getWeather(loc_id = "4480285") {
    // this.msgService.add('api.service.ts '+loc_id);
    console.log("api.service getWeather(" + loc_id + ")");
    const api_string = `${API_URL}?id=${loc_id}&APPID=${API_KEY}&units=imperial`;
    console.log(api_string);
    return this.httpClient.get(api_string);
  }

  changeLocation(locid: string) {
    console.log("api.service changeLocation(" + locid + ")");
    this.locationSource.next(locid);
    // need to tell weather-display to re-fetch the data
    this.getWeather(locid);
  }
}
