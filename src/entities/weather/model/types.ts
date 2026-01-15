interface weatherItem {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  humidity: number;
  uvi: number;
  clouds: number;
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
  current: weatherItem;
  hourly: weatherItem[];
}
