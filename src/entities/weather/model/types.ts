export interface WeatherItem<T> {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: T;
  humidity: number;
  feels_like: number;
  uvi: number;
  clouds: number;
  pop?: number;
  rain?: { "1h"?: number };
  snow?: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}

export interface WeatherData {
  lat: number;
  lon: number;
  current: WeatherItem<number>;
  hourly: WeatherItem<number>[];
  daily: WeatherItem<{ min: number; max: number }>[];
}
