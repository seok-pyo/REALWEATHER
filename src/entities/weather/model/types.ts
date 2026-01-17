interface weatherItem<T> {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: T;
  humidity: number;
  feels_like: number;
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
  current: weatherItem<number>;
  hourly: weatherItem<number>[];
  daily: weatherItem<{ min: number; max: number }>[];
}
