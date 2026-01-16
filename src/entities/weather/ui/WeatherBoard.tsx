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
    <div className="pl-8 pt-6">
      <h1 className="text-zinc-300">{cityName}</h1>
      <div className="flex"></div>
    </div>
  );
}
