import type { LocationResult } from "@/entities/weather/model";
import type { WeatherData } from "@/entities/weather/model";
import StarIcon from "@/shared/assets/star.svg";
import StraIconFavorite from "@/shared/assets/star-favorite.svg";
import { unixToLocal } from "@/entities/weather/api";
import { formatIconUrl } from "@/shared";

interface Props {
  data?: WeatherData;
  location?: LocationResult;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  isLoading?: boolean;
  customName?: string;
  nickName?: string;
}

export function WeatherBoard({
  data,
  location,
  isFavorite,
  onToggleFavorite,
  isLoading,
  nickName,
}: Props) {
  const cityName = location?.text || "";
  let formatCityName;

  if (cityName) {
    const nameArr = cityName.split(" ");
    formatCityName = `${nameArr[1]} ${nameArr[2]}`;
  }

  if (isLoading) {
    return (
      <div className="pl-8 pt-6 pr-8">
        <p className="text-zinc-600">데이터를 불러오고 있습니다</p>
        <div className="h-55"></div>
      </div>
    );
  }

  return (
    <div className="pl-8 pt-6 pr-8">
      <div className="flex gap-4">
        <img
          src={`${isFavorite ? StraIconFavorite : StarIcon}`}
          onClick={onToggleFavorite}
        />
        <h1 className="text-zinc-300 text-xl">
          {nickName || formatCityName || "데이터 가져오는 중.."}
        </h1>
      </div>

      <div className="flex flex-col mt-4 mb-4 xl:ml-10 xl:mr-10 xl:mt-10 xl:flex-row xl:gap-10 justify-center items-center text-zinc-400">
        <div className="flex">
          {data?.current.weather[0]?.icon ? (
            <img
              className="shrink-0 w-30 h-30"
              src={formatIconUrl(data?.current.weather[0].icon, "@4x")}
            />
          ) : (
            <div className="w-30 h-30 bg-zinc-700 rounded-full flex items-center justify-center"></div>
          )}
          <div className="flex flex-col justify-center items-center gap-2 whitespace-nowrap pl-4">
            <p className="text-4xl font-bold text-zinc-200">
              {data?.current.temp.toFixed(1)}°
            </p>
            <p className="text-2xl">{data?.current.weather[0].main}</p>
          </div>
        </div>
        <div className="flex gap-8 items-center whitespace-nowrap">
          <div className="flex flex-col items-center gap-2">
            <p>체감</p>
            <p>{data?.current.feels_like.toFixed(1)}°</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p>최저</p>
            <p className="text-blue-400">
              {data?.daily[0].temp.min.toFixed(1)}°
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p>최고</p>
            <p className="text-red-400">
              {data?.daily[0].temp.max.toFixed(1)}°
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p>일출</p>
            <p className="text-amber-400">
              {unixToLocal(data?.daily[0].sunrise || 0)}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p>일몰</p>
            <p className="text-amber-400">
              {unixToLocal(data?.daily[0].sunset || 0)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex"></div>
    </div>
  );
}
