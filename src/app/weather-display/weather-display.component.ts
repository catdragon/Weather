import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";
import { WeatherStruct } from "../weather";
import { APIService } from "../api.service";

@Component({
  selector: "app-weather-display",
  templateUrl: "./weather-display.component.html",
  providers: [APIService],
  styleUrls: ["./weather-display.component.css"]
})
export class WeatherDisplayComponent implements OnInit {
  weather: WeatherStruct;
  private today: number = Date.now();

  constructor(
    private apiService: APIService,
    private msgService: MessageService
  ) {}

  ngOnInit() {
    // this.apiService.currentLocation.subscribe(location => this.loc_id = location);
    this.fetchWeather();
    console.log("CCC");
  }

  fetchWeather(loc_id = "4480285") {
    console.log("weather-display.component showWeather(" + loc_id + ")");
    this.apiService.getWeather(loc_id).subscribe((data: WeatherStruct) => {
      this.weather = data;
      this.weather["today"] = this.today;
    });
  }
}
