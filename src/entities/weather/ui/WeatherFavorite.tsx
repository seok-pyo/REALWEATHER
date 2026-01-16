import StarIcon from "@/shared/assets/star-favorite.svg";
import type { WeatherData } from "../model/types";
import type { LocationResult } from "../model/location";

interface Props {
  data?: WeatherData;
  location?: LocationResult;
}

export function WeatherFavorite({ data, location }: Props) {
  return (
    <div className="bg-zinc-300 h-24 md:h-42 md:rounded-xl flex justify-around items-center md:flex-col">
      <div className="flex gap-2 md:self-start md:ml-4">
        <img src={StarIcon} className="w-5" />
        <p className="truncate maw-w-[100px]">성동구 행당동</p>
      </div>
      <div>
        <img />
        <div className="flex md:flex-col gap-4 md:gap-0">
          <p>-3.2</p>
          <p>맑음</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col md:flex-row items-center">
          <p>최저</p>
          <p>-4.2</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <p>최고</p>
          <p>8</p>
        </div>
      </div>
    </div>
  );
}
