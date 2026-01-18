import type { WeatherItem } from "../model";
import { unixToLocal } from "../api";

interface Props {
  data?: WeatherItem<number>;
}

export function WeatherTime({ data }: Props) {
  return (
    <div className="flex flex-col gap-4 whitespace-nowrap items-center">
      <p>{unixToLocal(data?.dt || 0)}</p>

      <div className="mt-8 mb-8 flex flex-col gap-4 w-10 items-center">
        {data?.weather[0]?.icon ? (
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}
          />
        ) : (
          <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center"></div>
        )}
        <p>{data?.temp.toFixed(1)}°</p>
      </div>
      <p>{data?.pop}%</p>
      {/* <p>{data.data?.pop ? data.data?.rain : 0}mm</p> */}
      <p>{data?.rain ? data.rain["1h"] || 0 : 0}mm</p>
      <p>{data?.humidity}</p>
      <p>{data?.uvi}</p>
      <p>{data?.clouds}</p>
    </div>
  );
}
