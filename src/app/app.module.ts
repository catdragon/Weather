import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { WeatherDisplayComponent } from "./weather-display/weather-display.component";
import { AppRoutingModule } from "./app-routing.module";
import { LocationComponent } from "./location/location.component";
import { MessagesComponent } from "./messages/messages.component";
import { F2cPipe } from "./f2c.pipe";
import { C2fPipe } from "./c2f.pipe";
import { DegreeDirectionPipe } from "./degree-direction.pipe";

@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    LocationComponent,
    MessagesComponent,
    F2cPipe,
    C2fPipe,
    DegreeDirectionPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [F2cPipe, DegreeDirectionPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
