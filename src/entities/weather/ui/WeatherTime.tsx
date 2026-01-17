import type { WeatherItem } from "../model";
import { unixToLocal } from "../api";

interface Props {
  data?: WeatherItem<number>;
}

export function WeatherTime(data: Props) {
  return (
    <div className="flex flex-col gap-4 whitespace-nowrap">
      <p>{unixToLocal(data.data?.dt || 0)}</p>

      <div className="mt-8 mb-8 flex flex-col gap-4 w-10">
        <img
          src={`https://openweathermap.org/img/wn/${data.data?.weather[0].icon}.png`}
        />
        <p>{data.data?.temp.toFixed(1)}°</p>
      </div>
      <p>{data.data?.pop}%</p>
      <p>{data.data?.pop ? data.data?.rain : 0}mm</p>
      <p>{data.data?.humidity}</p>
      <p>{data.data?.uvi}</p>
      <p>{data.data?.clouds}</p>
    </div>
  );
}
