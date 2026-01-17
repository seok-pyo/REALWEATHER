import type { LocationResult } from "../model/location";
import type { WeatherData } from "../model/types";
import StarIcon from "@/shared/assets/star.svg";
import { unixToLocal } from "../api";

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
      <div className="flex gap-4">
        <img src={StarIcon} />
        <h1 className="text-zinc-300 text-xl">{cityName}</h1>
      </div>

      <div className="flex flex-col mt-4 mb-4 xl:ml-10 xl:mr-10 xl:mt-10 xl:flex-row xl:gap-10 justify-center items-center text-zinc-400">
        <div className="flex">
          <img
            className="shrink-0 w-30 h-30"
            src="https://openweathermap.org/img/wn/10d@4x.png"
          />
          <div className="flex flex-col justify-center items-center gap-2 whitespace-nowrap">
            <p className="text-4xl">{data?.current.temp.toFixed(1)}°</p>
            <p className="text-2xl pl-2">{data?.current.weather[0].main}</p>
          </div>
        </div>
        <div className="flex gap-8 items-center whitespace-nowrap">
          <div className="flex flex-col items-center">
            <p>체감</p>
            <p>{data?.current.feels_like.toFixed(1)}°</p>
          </div>
          <div className="flex flex-col items-center">
            <p>최저</p>
            <p>{data?.daily[0].temp.min.toFixed(1)}°</p>
          </div>
          <div className="flex flex-col items-center">
            <p>최고</p>
            <p>{data?.daily[0].temp.max.toFixed(1)}°</p>
          </div>
          <div className="flex flex-col items-center">
            <p>일출</p>
            <p>{unixToLocal(data?.daily[0].sunset || 0)}</p>
          </div>
          <div className="flex flex-col items-center">
            <p>일몰</p>
            <p>{unixToLocal(data?.daily[0].sunrise || 0)}</p>
          </div>
        </div>
      </div>
      <div className="flex"></div>
    </div>
  );
}
