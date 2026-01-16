import type { LocationResult } from "../model/location";
import type { WeatherData } from "../model/types";

interface Props {
  data?: WeatherData;
  location?: LocationResult;
}

export function WeatherBoard({ data, location }: Props) {
  const cityName = `${location?.structure.level2} ${
    location?.structure.level3
      ? location?.structure.level3
      : location?.structure.level4L
  }`;

  return (
    <div>
      <h1>{cityName}</h1>
      <div className="flex"></div>
    </div>
  );
}
