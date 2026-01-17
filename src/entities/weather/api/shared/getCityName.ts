import type { LocationResult } from "../../model";

export function getCityName(location?: LocationResult) {
  const cityName = `${location?.structure.level2} ${
    location?.structure.level3
      ? location?.structure.level3
      : location?.structure.level4L
  }`;

  return cityName;
}
