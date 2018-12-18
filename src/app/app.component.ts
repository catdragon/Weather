import { Component, OnInit } from "@angular/core";
import { APIService } from "./api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  location: string;

  constructor(private apiService: APIService) {}

  title = "The Weather";

  ngOnInit() {
    this.apiService.currentLocation.subscribe(
      location => (this.location = location)
    );
  }
}
