export interface InfoStruct {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface BasicStruct {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}
export interface WindStruct {
  speed: number;
  deg: number;
}
export interface SystemStruct {
  type: number;
  id: number;
  message: any;
  country: string;
  sunrise: string;
  sunset: string;
}
export interface CoordStruct {
  lon: number;
  lat: number;
}

export interface CloudStruct {
  all: string;
}
export interface RainStruct {
  "1h"?: number;
  "3h"?: number;
}

export interface WeatherStruct {
  coord: Coordinates;
  weather: Array<InfoStruct>;
  base: string;
  main: BasicStruct;
  wind: WindStruct;
  clouds: CloudStruct;
  rain?: RainStruct;
  dt: string;
  sys: SystemStruct;
  id: number;
  name: string;
  cod: number;
}
