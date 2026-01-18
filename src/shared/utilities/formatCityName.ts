import type { LocationResult } from "@/entities/weather/model";

export function formatCityName(location?: LocationResult) {
  const cityName = `${location?.structure.level2} ${
    location?.structure.level3
      ? location?.structure.level3
      : location?.structure.level4L
  }`;

  return cityName;
}
