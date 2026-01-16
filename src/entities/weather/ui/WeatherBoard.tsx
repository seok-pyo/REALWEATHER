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
    <div className="pl-8 pt-6 pr-8">
      <h1 className="text-zinc-300 text-xl">{cityName}</h1>

      <div className="flex flex-col xl:ml-10 xl:mr-10 xl:mt-8 xl:flex-row xl:gap-10 justify-center items-center text-zinc-400">
        <div className="flex">
          <img
            className="shrink-0 w-30 h-30"
            src="https://openweathermap.org/img/wn/10d@4x.png"
          />
          <div className="flex flex-col justify-center items-center gap-2 whitespace-nowrap">
            <p className="text-4xl">-3.2</p>
            <p className="text-2xl pl-2">맑음</p>
          </div>
        </div>
        <div className="flex gap-8 items-center whitespace-nowrap">
          <div className="flex flex-col items-center">
            <p>체감</p>
            <p>-3.2</p>
          </div>
          <div className="flex flex-col items-center">
            <p>최저</p>
            <p>-4.2</p>
          </div>
          <div className="flex flex-col items-center">
            <p>최고</p>
            <p>8</p>
          </div>
          <div className="flex flex-col items-center">
            <p>일출</p>
            <p>07:47</p>
          </div>
          <div className="flex flex-col items-center">
            <p>일몰</p>
            <p>17:34</p>
          </div>
        </div>
      </div>
      <div className="flex"></div>
    </div>
  );
}
